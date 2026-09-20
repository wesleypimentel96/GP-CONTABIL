import { NextResponse } from "next/server";
import { Resend } from "resend";
import { leadSchema, SEGMENTO_LABELS } from "@/lib/validations/lead";
import { getSupabaseAdmin, supabaseConfigured } from "@/lib/supabase/server";
import { whatsappUrl } from "@/lib/whatsapp";

// Rate limit simples em memória (por instância): 10 req / 10 min por IP
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 10;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_HITS;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde alguns minutos e tente novamente." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return NextResponse.json(
      { error: first?.message ?? "Dados inválidos." },
      { status: 400 },
    );
  }

  const { company, ...lead } = parsed.data;
  if (company) {
    // Honeypot preenchido: finge sucesso sem processar
    return NextResponse.json({ ok: true, whatsappUrl: whatsappUrl(lead.nome) });
  }

  const segmentoLabel = SEGMENTO_LABELS[lead.segmento];

  // 1. Supabase (se configurado)
  let savedId: string | null = null;
  if (supabaseConfigured()) {
    try {
      const supabase = getSupabaseAdmin();
      const { data, error } = await supabase!
        .from("leads")
        .insert({
          nome: lead.nome,
          email: lead.email,
          whatsapp: lead.whatsapp,
          segmento: lead.segmento,
          mensagem: lead.mensagem || null,
          origem: lead.origem,
          consent_lgpd: true,
        })
        .select("id")
        .single();
      if (error) throw error;
      savedId = data?.id ?? null;
    } catch (e) {
      console.error("Supabase insert failed:", e);
      return NextResponse.json(
        { error: "Não foi possível salvar. Tente novamente." },
        { status: 500 },
      );
    }
  } else {
    console.log("SUPABASE_SKIPPED — lead recebido sem persistência:", {
      nome: lead.nome,
      segmento: lead.segmento,
    });
  }

  // 2. Resend (se configurado)
  const notifyEmail = process.env.LEAD_NOTIFY_EMAIL;
  if (process.env.RESEND_API_KEY && notifyEmail) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const from =
        process.env.RESEND_FROM_EMAIL ?? "GP Contábil <contato@gpcontabil.com.br>";
      await resend.emails.send({
        from,
        to: notifyEmail,
        subject: `Novo contato pelo site — ${lead.nome}`,
        html: `
          <h2>Novo contato pelo site</h2>
          <ul>
            <li><strong>Nome:</strong> ${escapeHtml(lead.nome)}</li>
            <li><strong>E-mail:</strong> ${escapeHtml(lead.email)}</li>
            <li><strong>WhatsApp:</strong> ${escapeHtml(lead.whatsapp)}</li>
            <li><strong>Segmento:</strong> ${escapeHtml(segmentoLabel)}</li>
            <li><strong>Origem:</strong> ${escapeHtml(lead.origem)}</li>
            <li><strong>LGPD:</strong> consentido em ${new Date().toISOString()}</li>
          </ul>
          <p><strong>Mensagem:</strong></p>
          <p>${escapeHtml(lead.mensagem || "(não informada)")}</p>
        `,
      });
      await resend.emails.send({
        from,
        to: lead.email,
        subject: "Recebemos sua mensagem — GP Contábil",
        html: `
          <p>Olá, ${escapeHtml(lead.nome)}!</p>
          <p>Recebemos sua mensagem sobre <strong>${escapeHtml(segmentoLabel)}</strong> e retornaremos em breve.</p>
          <p>Atenciosamente,<br/>GP Contábil — Geovania Paes</p>
        `,
      });
    } catch (e) {
      console.error("Resend failed:", e);
      // Não bloqueia o lead por falha de e-mail
    }
  } else {
    console.log("RESEND_SKIPPED — sem RESEND_API_KEY ou LEAD_NOTIFY_EMAIL");
  }

  return NextResponse.json(
    { ok: true, id: savedId, whatsappUrl: whatsappUrl(lead.nome) },
    { status: 200 },
  );
}

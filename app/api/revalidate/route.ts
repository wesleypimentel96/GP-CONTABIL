import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Webhook não configurado (SANITY_REVALIDATE_SECRET ausente)." },
      { status: 500 },
    );
  }

  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  let slug: string | undefined;
  try {
    const body = await req.json();
    slug = body?.slug?.current ?? body?.slug;
  } catch {
    slug = undefined;
  }

  try {
    revalidatePath("/");
    revalidatePath("/blog");
    if (slug) revalidatePath(`/blog/${slug}`);
    return NextResponse.json({ revalidated: true, slug: slug ?? null });
  } catch (e) {
    console.error("Revalidate failed:", e);
    return NextResponse.json({ error: "Falha ao revalidar." }, { status: 500 });
  }
}

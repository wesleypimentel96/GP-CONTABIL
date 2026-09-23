"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { leadSchema, SEGMENTO_LABELS, type LeadInput } from "@/lib/validations/lead";
import { cn } from "@/lib/utils";

type Status = { type: "idle" } | { type: "success"; whatsappUrl: string } | { type: "error"; message: string };

export function LeadForm({ dark = false, origem = "site" }: { dark?: boolean; origem?: string }) {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: { origem, mensagem: "", company: "", consent_lgpd: undefined as unknown as true },
  });
  const MESSAGE_MAX = 2000;
  const messageLength = (watch("mensagem") ?? "").length;

  async function onSubmit(data: LeadInput) {
    setStatus({ type: "idle" });
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, origem }),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus({ type: "error", message: json?.error ?? "Não foi possível enviar. Tente novamente." });
        return;
      }
      setStatus({ type: "success", whatsappUrl: json.whatsappUrl });
      reset();
    } catch {
      setStatus({ type: "error", message: "Erro de conexão. Tente novamente." });
    }
  }

  const fieldCls = dark ? "text-cream" : "";
  const inputCls = dark ? "border-cream/20 bg-white text-ink" : "";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      {/* Honeypot anti-spam — invisível para humanos */}
      <div className="hidden" aria-hidden="true">
        <label>
          Empresa
          <input type="text" {...register("company")} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="lead-nome" className={fieldCls}>Nome</Label>
          <Input id="lead-nome" placeholder="Seu nome" autoComplete="name" className={inputCls} {...register("nome")} />
          {errors.nome && <p className="text-xs text-red-400" role="alert">{errors.nome.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="lead-whatsapp" className={fieldCls}>WhatsApp</Label>
          <Input id="lead-whatsapp" placeholder="(00) 90000-0000" autoComplete="tel" inputMode="tel" className={inputCls} {...register("whatsapp")} />
          {errors.whatsapp && <p className="text-xs text-red-400" role="alert">{errors.whatsapp.message}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="lead-email" className={fieldCls}>E-mail</Label>
        <Input id="lead-email" type="email" placeholder="voce@email.com" autoComplete="email" className={inputCls} {...register("email")} />
        {errors.email && <p className="text-xs text-red-400" role="alert">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="lead-segmento" className={fieldCls}>Assunto</Label>
        <select
          id="lead-segmento"
          className={cn(
            "flex h-11 w-full rounded-card border border-ink/15 bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink",
            dark && "border-cream/20",
          )}
          defaultValue=""
          {...register("segmento")}
        >
          <option value="" disabled>Selecione…</option>
          {Object.entries(SEGMENTO_LABELS).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        {errors.segmento && <p className="text-xs text-red-400" role="alert">{errors.segmento.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-baseline justify-between gap-2">
          <Label htmlFor="lead-mensagem" className={fieldCls}>Mensagem <span className={dark ? "text-cream/50" : "text-ink/50"}>(opcional)</span></Label>
          <span
            className={dark ? "text-xs text-cream/50" : "text-xs text-ink/50"}
            aria-live="polite"
            aria-label={`${messageLength} de ${MESSAGE_MAX} caracteres usados`}
          >
            {messageLength}/{MESSAGE_MAX}
          </span>
        </div>
        <Textarea
          id="lead-mensagem"
          placeholder="Conte brevemente sua necessidade"
          maxLength={MESSAGE_MAX}
          aria-describedby="lead-mensagem-contador"
          className={`${inputCls} max-h-[300px] resize-y`.trim()}
          {...register("mensagem")}
        />
        <span id="lead-mensagem-contador" className="sr-only" aria-live="polite">
          {messageLength} de {MESSAGE_MAX} caracteres usados
        </span>
        {errors.mensagem && <p className="text-xs text-red-400" role="alert">{errors.mensagem.message}</p>}
      </div>

      <div className="flex items-start gap-2">
        <input
          id="lead-lgpd"
          type="checkbox"
          className="mt-1 size-4 accent-[#8A837E]"
          {...register("consent_lgpd")}
        />
        <Label htmlFor="lead-lgpd" className={cn("text-xs font-normal leading-relaxed", dark ? "text-cream/80" : "text-ink/70")}>
          Concordo com o tratamento dos meus dados para que a GP Contábil possa entrar em contato comigo, conforme a{" "}
          <Link href="/politica-privacidade" className="underline underline-offset-2">Política de Privacidade</Link>.
        </Label>
      </div>
      {errors.consent_lgpd && <p className="-mt-2 text-xs text-red-400" role="alert">{errors.consent_lgpd.message}</p>}

      {status.type === "error" && (
        <p className="inline-flex items-center gap-2 rounded-card bg-red-500/15 p-3 text-sm text-red-300" role="alert">
          <AlertCircle className="size-4 shrink-0" aria-hidden />
          {status.message}
        </p>
      )}
      {status.type === "success" && (
        <div className="rounded-card bg-green-500/15 p-3 text-sm" role="status">
          <p className="inline-flex items-center gap-2 font-semibold text-green-300">
            <CheckCircle2 className="size-4" aria-hidden />
            Mensagem recebida! Retornaremos em breve.
          </p>
          <a href={status.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-semibold underline underline-offset-4">
            Continuar no WhatsApp
          </a>
        </div>
      )}

      <Button type="submit" variant="accent" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden />}
        {isSubmitting ? "Enviando…" : "Enviar mensagem"}
      </Button>
    </form>
  );
}

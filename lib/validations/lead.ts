import { z } from "zod";

export const SEGMENTOS = ["pf", "mei", "empresas", "reforma", "outro"] as const;
export type Segmento = (typeof SEGMENTOS)[number];

export const SEGMENTO_LABELS: Record<Segmento, string> = {
  pf: "Pessoa Física",
  mei: "MEI",
  empresas: "Empresa",
  reforma: "Reforma Tributária",
  outro: "Outro",
};

export const leadSchema = z.object({
  nome: z
    .string({ required_error: "Informe seu nome." })
    .trim()
    .min(2, "Informe seu nome completo."),
  email: z
    .string({ required_error: "Informe seu e-mail." })
    .trim()
    .email("Informe um e-mail válido."),
  whatsapp: z
    .string({ required_error: "Informe seu WhatsApp." })
    .trim()
    .transform((v) => v.replace(/\D/g, ""))
    .refine((v) => v.length >= 10 && v.length <= 13, {
      message: "Informe um WhatsApp válido com DDD.",
    }),
  segmento: z.enum(SEGMENTOS, {
    errorMap: () => ({ message: "Escolha o assunto do atendimento." }),
  }),
  mensagem: z
    .string()
    .trim()
    .max(2000, "A mensagem deve ter no máximo 2000 caracteres.")
    .optional()
    .default(""),
  origem: z.string().trim().max(255).optional().default("site"),
  consent_lgpd: z.literal(true, {
    errorMap: () => ({
      message: "É necessário concordar com a Política de Privacidade.",
    }),
  }),
  // Honeypot anti-spam: deve vir vazio
  company: z.string().max(0, "Envio inválido.").optional().default(""),
});

export type LeadInput = z.infer<typeof leadSchema>;

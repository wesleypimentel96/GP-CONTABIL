import {
  Calculator,
  Building2,
  Store,
  Scale,
  LineChart,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

export const BIO_CURTA =
  "Sou Geovania Paes, Contadora há 14 anos, formada em Ciências Contábeis, MBA em Direito Tributário, pós em Empreendedorismo Contábil e Controladoria Financeira. Especialista em Reforma Tributária.";

export const BIO_COMPLETA =
  "Sou Geovania Paes, Contadora atuante na área há 14 anos, formada em Ciências Contábeis, com MBA em Direito Tributário, pós graduada em Empreendedorismo Contábil e Controladoria Financeira. Atualmente estou me especializando em reforma tributária.";

export interface Segment {
  slug: string;
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}

export const SEGMENTS: Segment[] = [
  {
    slug: "pf",
    href: "/servicos-pf",
    title: "Pessoa Física",
    description:
      "Imposto de renda e organização financeira pessoal com orientação direta da Geovania.",
    icon: Calculator,
    items: [
      "Declaração de IR",
      "IR para profissionais liberais",
      "Carnê-Leão",
      "Ganho de capital",
      "Regularização CPF",
      "Parcelamento IR",
      "Saída Definitiva do País",
      "Livro Caixa",
      "Planejamento tributário para médicos e profissionais da saúde",
      "Consultoria financeira pessoal",
    ],
  },
  {
    slug: "empresas",
    href: "/para-empresas",
    title: "Empresas",
    description:
      "Gestão contábil e estratégica para empresas que querem crescer com segurança.",
    icon: Building2,
    items: [
      "Abertura",
      "Alteração contratual",
      "Baixa",
      "Planejamento tributário",
      "Assessoria mensal",
      "Apuração de impostos",
      "Obrigações acessórias",
      "Folha de pagamento",
      "Pró-labore",
      "Regularização fiscal",
      "Parcelamento de débitos",
      "Certidões negativas",
      "Consultoria contábil/financeira",
      "Fluxo de caixa",
      "Análise de lucro/desempenho",
    ],
  },
  {
    slug: "mei",
    href: "/mei",
    title: "MEI",
    description:
      "Soluções completas para abrir, regularizar e fazer o MEI crescer.",
    icon: Store,
    items: [
      "Abertura",
      "Regularização",
      "Baixa",
      "DAS mensal",
      "DASN-SIMEI anual",
      "Parcelamento",
      "Desenquadramento",
      "Alteração cadastral",
      "Nota fiscal",
      "MEI inapto/suspenso",
      "Migração para ME",
    ],
  },
];

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const SERVICES: Service[] = [
  {
    title: "Contabilidade para Pessoa Física",
    description:
      "Declaração de IR, carnê-leão, livro caixa e planejamento para profissionais liberais e da saúde.",
    icon: Calculator,
    href: "/servicos-pf",
  },
  {
    title: "Contabilidade para Empresas",
    description:
      "Assessoria mensal, apuração de impostos, folha de pagamento e obrigações acessórias.",
    icon: Building2,
    href: "/para-empresas",
  },
  {
    title: "Contabilidade para MEI",
    description:
      "Abertura, DAS, declaração anual, notas fiscais e migração para ME quando chegar a hora.",
    icon: Store,
    href: "/mei",
  },
  {
    title: "Planejamento Tributário",
    description:
      "Enquadramento e estratégias para pagar o justo, com atenção à Reforma Tributária.",
    icon: Scale,
    href: "/reforma-tributaria",
  },
  {
    title: "Consultoria Contábil",
    description:
      "Regularização fiscal, parcelamentos, certidões e análise de lucro e desempenho.",
    icon: LineChart,
    href: "/contato",
  },
  {
    title: "Consultoria Financeira",
    description:
      "Fluxo de caixa, pró-labore e organização financeira pessoal e empresarial.",
    icon: HeartHandshake,
    href: "/contato",
  },
];

export const DIFFERENTIALS = [
  {
    title: "Atendimento personalizado",
    description:
      "Você fala direto com a contadora responsável, não com um robô ou call center.",
  },
  {
    title: "Visão estratégica",
    description:
      "14 anos de experiência com foco em planejamento tributário e controladoria.",
  },
  {
    title: "Reforma Tributária",
    description:
      "Acompanhamento atualizado das mudanças para proteger PF, MEI e empresas.",
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Entre em contato",
    description: "Chame no WhatsApp ou envie o formulário com sua necessidade.",
  },
  {
    number: "02",
    title: "Explique sua necessidade",
    description: "Conte seu momento: PF, MEI, empresa ou dúvida sobre a reforma.",
  },
  {
    number: "03",
    title: "Receba uma orientação",
    description: "A Geovania analisa seu caso e indica o melhor caminho.",
  },
  {
    number: "04",
    title: "Tenha acompanhamento",
    description: "Atendimento contínuo para manter tudo em dia.",
  },
];

export const FAQS = [
  {
    question: "Quem pode contratar os serviços?",
    answer:
      "Pessoas físicas, profissionais liberais e da saúde, MEIs e empresas de diversos segmentos que buscam contabilidade com atendimento direto e estratégico.",
  },
  {
    question: "A GP Contábil atende MEI?",
    answer:
      "Sim. Abertura, regularização, baixa, DAS mensal, declaração anual DASN-SIMEI, notas fiscais, parcelamentos e migração para ME.",
  },
  {
    question: "É possível receber orientação sobre Imposto de Renda?",
    answer:
      "Sim. Declaração anual, IR para profissionais liberais, carnê-leão, ganho de capital, parcelamento e declaração de saída definitiva do país.",
  },
  {
    question: "A GP Contábil atende empresas?",
    answer:
      "Sim. Abertura, alteração e baixa, assessoria contábil mensal, apuração de impostos, obrigações acessórias, folha de pagamento, pró-labore e planejamento tributário.",
  },
  {
    question: "Como funciona o atendimento?",
    answer:
      "Você entra em contato pelo WhatsApp ou formulário, explica sua necessidade, recebe a orientação da Geovania e conta com acompanhamento contínuo.",
  },
  {
    question: "Como entrar em contato?",
    answer:
      "Pelo botão de WhatsApp presente em todo o site ou pelo formulário de contato. O retorno é feito pela própria equipe da GP Contábil.",
  },
];

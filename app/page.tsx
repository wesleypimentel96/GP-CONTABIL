import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Hero } from "@/components/sections/hero";
import { Differentials } from "@/components/sections/differentials";
import { Segments } from "@/components/sections/segments";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { BlogPreview } from "@/components/sections/blog-preview";
import { ReformTributaria } from "@/components/sections/reform";
import { Humanizacao } from "@/components/sections/humanizacao";
import { Steps } from "@/components/sections/steps";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { FinalCta } from "@/components/sections/final-cta";
import { getLatestPosts } from "@/lib/sanity/posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "GP Contábil — Geovania Paes | Contabilidade para PF, MEI e Empresas",
  description:
    "Sou Geovania Paes, Contadora há 14 anos, MBA em Direito Tributário. Contabilidade estratégica para pessoa física, MEI e empresas. Especialista em Reforma Tributária.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const posts = await getLatestPosts();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Differentials />
        <Segments />
        <About />
        <Services />
        <BlogPreview posts={posts} />
        <ReformTributaria />
        <Humanizacao />
        <Steps />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

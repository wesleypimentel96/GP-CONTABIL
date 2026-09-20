import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { FAQS } from "@/lib/site";

export function Faq() {
  return (
    <section className="section-pad bg-white" aria-labelledby="faq-title">
      <div className="container max-w-3xl">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Nós tiramos suas dúvidas"
        />
        <Reveal>
          <Accordion type="single" collapsible className="mt-8 flex flex-col gap-3" id="faq-title">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

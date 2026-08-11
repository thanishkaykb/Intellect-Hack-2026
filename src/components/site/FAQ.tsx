import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/event";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  return (
    <section id="faq" className="relative scroll-mt-28 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Everything You Need to Know"
          align="center"
        />
        <Reveal delay={100} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="border-border/60 bg-surface/25 mb-3 rounded-md border px-5 transition-colors hover:border-primary/45"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

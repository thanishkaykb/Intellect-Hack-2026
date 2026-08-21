import { Download, FileText, MessageCircle } from "lucide-react";
import { ONLINE_ROUND_POINTS, PPT_TEMPLATE_URL, WHATSAPP_GROUP_URL } from "@/data/event";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function OnlineRound() {
  return (
    <section id="online-round" className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="glass-panel grain-overlay relative overflow-hidden rounded-lg p-6 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,oklch(0.45_0.17_18/32%),transparent_70%)] blur-2xl"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-14">
            <div className="min-w-0">
              <SectionHeading
                eyebrow="Phase I"
                title="Online Preliminary Round"
                description="22 August 2026 — 15 September 2026"
              />
              <ul className="mt-6 space-y-3.5">
                {ONLINE_ROUND_POINTS.map((point, i) => (
                  <Reveal as="li" key={point} delay={i * 60} className="flex gap-3 text-sm">
                    <span aria-hidden="true" className="text-primary mt-0.5 font-mono text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{point}</span>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div id="template" className="scroll-mt-24 lg:self-center lg:mt-12">
            <Reveal
              delay={120}
              className="border-border/70 bg-background/40 rounded-md border p-6"
            >
              <p className="text-eyebrow flex items-center gap-2">
                <FileText className="text-primary h-3.5 w-3.5" aria-hidden="true" />
                Official PPT template
              </p>
              <h3 className="mt-3 text-lg font-semibold">Use this template only</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                All Phase I submissions must be prepared using the official Intellect Hack 2026
                presentation template and submitted through the Google Form. Make a copy of the
                template and use it for your submission. Submissions in any other format may not be
                evaluated.
              </p>
              <div className="mt-5">
                <Cta
                  href={PPT_TEMPLATE_URL || undefined}
                  size="lg"
                  className="w-full justify-center"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Template
                </Cta>
              </div>
              {!PPT_TEMPLATE_URL && (
                <p className="text-muted-foreground mt-3 text-xs">
                  The template file will be published here shortly.
                </p>
              )}
            </Reveal>

            <Reveal
              delay={180}
              className="border-border/70 bg-background/40 mt-6 rounded-md border p-6"
            >
              <p className="text-eyebrow flex items-center gap-2">
                <MessageCircle className="text-primary h-3.5 w-3.5" aria-hidden="true" />
                Stay connected
              </p>
              <h3 className="mt-3 text-lg font-semibold">Join our WhatsApp group</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                Join the official Intellect Hack 2026 WhatsApp group for updates, announcements
                and support throughout the competition.
              </p>
              <div className="mt-5">
                <Cta
                  href={WHATSAPP_GROUP_URL || undefined}
                  size="lg"
                  className="w-full justify-center"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Join WhatsApp Group
                </Cta>
              </div>
              {!WHATSAPP_GROUP_URL && (
                <p className="text-muted-foreground mt-3 text-xs">
                  The WhatsApp group link will be published here shortly.
                </p>
              )}
            </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

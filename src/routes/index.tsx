import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhyParticipate } from "@/components/site/WhyParticipate";
import { Timeline } from "@/components/site/Timeline";
import { OnlineRound } from "@/components/site/OnlineRound";
import { ProblemStatements } from "@/components/site/ProblemStatements";
import { OfflineRound } from "@/components/site/OfflineRound";
import { EvaluationCriteria } from "@/components/site/EvaluationCriteria";
import { Prizes } from "@/components/site/Prizes";
import { Registration } from "@/components/site/Registration";
import { FAQ } from "@/components/site/FAQ";
import { Coordinators } from "@/components/site/Coordinators";
import { Footer } from "@/components/site/Footer";

const TITLE = "Intellect Hack 2026 | AI Hackathon";
const DESCRIPTION =
  "Intellect Hack 2026 is an AI-focused inter-college competition organized by IEEE Reliability Society, SEC SBC at Sri Sairam Engineering College, Chennai.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Intellect Hack 2026",
          description: DESCRIPTION,
          startDate: "2026-09-25",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "Apple Hall, Sri Sairam Engineering College",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chennai",
              addressCountry: "IN",
            },
          },
          organizer: {
            "@type": "Organization",
            name: "IEEE Reliability Society, SEC SBC",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="text-foreground min-h-screen">
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyParticipate />
        <Timeline />
        <OnlineRound />
        <ProblemStatements />
        <OfflineRound />
        <EvaluationCriteria />
        <Prizes />
        <Registration />
        <FAQ />
        <Coordinators />
      </main>
      <Footer />
    </div>
  );
}

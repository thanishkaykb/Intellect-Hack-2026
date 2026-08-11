import { SectionHeading } from "./SectionHeading";
import { EventStats } from "./EventStats";

export function About() {
  return (
    <section id="about" className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="About the event"
          title="What is Intellect Hack 2026?"
          description="Intellect Hack 2026 is an AI-focused competition designed to encourage students to develop innovative solutions to real-world challenges using Artificial Intelligence."
        />
        <div className="mt-12">
          <EventStats />
        </div>
      </div>
    </section>
  );
}

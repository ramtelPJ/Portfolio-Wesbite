import { GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp } from "@/utils/animations";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="academy" className="relative px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Development Journey" title="Player Academy" />

        <div className="relative mt-16">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-gold via-electric-blue to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <ol className="space-y-12">
            {education.map((entry, i) => (
              <li key={entry.id} className="relative">
                <Reveal variants={fadeUp}>
                  <div
                    className={`relative flex flex-col gap-4 sm:flex-row sm:items-start ${
                      i % 2 === 1 ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="absolute left-4 top-1.5 -translate-x-1/2 sm:left-1/2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gold bg-background-secondary">
                        <GraduationCap className="h-4 w-4 text-gold" />
                      </span>
                    </div>

                    <div
                      className={`ml-12 flex-1 rounded-2xl border border-glass-border bg-glass p-6 sm:ml-0 ${
                        i % 2 === 1 ? "sm:mr-[calc(50%+2rem)]" : "sm:ml-[calc(50%+2rem)]"
                      }`}
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                        {entry.yearRange}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-text-primary">
                        {entry.institution}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-electric-blue">
                        {entry.degree} — {entry.field}
                      </p>

                      {entry.achievements.length > 0 && (
                        <ul className="mt-4 space-y-1.5">
                          {entry.achievements.map((achievement) => (
                            <li
                              key={achievement}
                              className="flex items-start gap-2 text-sm text-text-secondary"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

import { Briefcase } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp } from "@/utils/animations";

export default function ExperienceTimeline() {
  const { experience } = portfolioData;

  return (
    <section id="career" className="relative px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Professional Record" title="Career History" />

        <div className="mt-16 space-y-8">
          {experience.map((entry) => (
            <Reveal key={entry.id} variants={fadeUp}>
              <div className="rounded-2xl border border-glass-border bg-glass p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-background-secondary">
                      <Briefcase className="h-4 w-4 text-gold" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase tracking-wide text-text-primary">
                        {entry.role}
                      </h3>
                      <p className="text-sm font-semibold text-electric-blue">
                        {entry.company}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold sm:pt-2">
                    {entry.yearRange}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {entry.description}
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

                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-background-secondary px-2.5 py-0.5 text-[11px] font-medium text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-glass-border pt-5">
                  {entry.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="font-display text-2xl font-extrabold text-gold">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-secondary">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Briefcase, MapPin, Sparkles, Target, CalendarClock } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { slideRight, slideLeft } from "@/utils/animations";
import SkillRadarLazy from "./SkillRadarLazy";

const FIELDS = [
  { icon: Briefcase, label: "Role", key: "role" as const },
  { icon: Target, label: "Specialty", key: "specialty" as const },
  { icon: MapPin, label: "Location", key: "location" as const },
  { icon: CalendarClock, label: "Years Active", key: "yearsActive" as const },
];

export default function PlayerBio() {
  const { personal, radar } = portfolioData;

  return (
    <section id="profile" className="relative px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Scouting Report" title="Player Bio" />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variants={slideRight}>
            <div className="rounded-2xl border border-glass-border bg-glass p-6 sm:p-8">
              <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {FIELDS.map(({ icon: Icon, label, key }) => (
                  <div key={label}>
                    <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
                      <Icon className="h-3.5 w-3.5 text-electric-blue" />
                      {label}
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-text-primary">
                      {personal[key]}
                    </dd>
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
                    <Sparkles className="h-3.5 w-3.5 text-achievement-green" />
                    Status
                  </dt>
                  <dd className="mt-1 inline-flex items-center gap-2 text-base font-semibold text-achievement-green">
                    <span className="h-1.5 w-1.5 rounded-full bg-achievement-green" />
                    {personal.status}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 h-px w-full bg-glass-border" />

              <p className="mt-6 text-sm leading-relaxed text-text-secondary sm:text-base">
                {personal.bio}
              </p>
            </div>
          </Reveal>

          <Reveal variants={slideLeft}>
            <div className="rounded-2xl border border-glass-border bg-glass p-6 sm:p-8">
              <h3 className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-text-secondary">
                Skill Radar
              </h3>
              <div className="mt-4">
                <SkillRadarLazy data={radar} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Award, Medal, GraduationCap, Trophy } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { scaleIn } from "@/utils/animations";
import type { Achievement } from "@/types/portfolio";

const CATEGORY_ICON: Record<Achievement["category"], typeof Award> = {
  award: Award,
  certification: Medal,
  scholarship: GraduationCap,
  competition: Trophy,
};

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="relative px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Recognition" title="Trophy Cabinet" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => {
            const Icon = CATEGORY_ICON[achievement.category];
            return (
              <Reveal key={achievement.id} variants={scaleIn} className="h-full">
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-glass p-6 transition-transform hover:-translate-y-1 ${
                    achievement.placeholder
                      ? "border-dashed border-glass-border"
                      : "border-gold/40"
                  }`}
                >
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/10 blur-2xl transition-opacity group-hover:opacity-100" />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-background-secondary">
                    <Icon className="h-5 w-5 text-gold" />
                  </span>
                  <h3 className="relative mt-4 font-display text-lg font-bold uppercase tracking-wide text-text-primary">
                    {achievement.title}
                  </h3>
                  <p className="relative mt-1 text-xs font-semibold uppercase tracking-wide text-electric-blue">
                    {achievement.issuer} · {achievement.year}
                  </p>
                  <p className="relative mt-3 text-sm leading-relaxed text-text-secondary">
                    {achievement.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { portfolioData } from "@/data/portfolio";
import { Counter } from "@/components/ui/Counter";

export default function Statistics() {
  const { statistics } = portfolioData;

  return (
    <section className="relative px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl rounded-2xl border border-glass-border bg-glass px-6 py-12 sm:px-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {statistics.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl font-extrabold text-gold sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

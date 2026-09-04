import { portfolioData } from "@/data/portfolio";
import PlayerCard from "./PlayerCard";
import PlayerStats from "./PlayerStats";

export default function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16 sm:px-10 lg:px-16"
    >
      {/* ambient stadium background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[32rem] w-[32rem] rounded-full bg-electric-blue/10 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
        {/* left: identity + stats */}
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-electric-blue">
            Player Profile
          </p>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
            {personal.name}
          </h1>
          <p className="mt-3 text-lg font-medium uppercase tracking-[0.15em] text-text-secondary">
            {personal.role}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="font-display text-4xl font-extrabold text-gold">
              {personal.rating}
              <span className="ml-2 align-middle text-sm font-semibold tracking-[0.2em] text-text-secondary">
                OVR
              </span>
            </div>
            <span className="h-6 w-px bg-glass-border" />
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-achievement-green">
              <span className="h-1.5 w-1.5 rounded-full bg-achievement-green" />
              {personal.status}
            </span>
          </div>

          <div className="mt-10">
            <PlayerStats stats={stats} />
          </div>
        </div>

        {/* right: interactive player card */}
        <div className="order-1 lg:order-2">
          <PlayerCard personal={personal} stats={stats} />
        </div>
      </div>
    </section>
  );
}

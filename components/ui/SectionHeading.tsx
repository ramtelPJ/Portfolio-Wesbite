import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-electric-blue">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-text-primary sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm text-text-secondary sm:text-base ${
            align === "center" ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

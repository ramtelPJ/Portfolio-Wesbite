import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personal, social } = portfolioData;

  return (
    <footer className="border-t border-glass-border px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <span className="font-display text-lg font-bold uppercase tracking-wide text-text-primary">
          {personal.name}
        </span>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${social.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-glass-border text-text-secondary transition-colors hover:border-gold/50 hover:text-gold"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-glass-border text-text-secondary transition-colors hover:border-gold/50 hover:text-gold"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-glass-border text-text-secondary transition-colors hover:border-gold/50 hover:text-gold"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-text-secondary">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

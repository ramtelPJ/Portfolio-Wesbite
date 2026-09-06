"use client";

import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, FileText, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { slideRight, slideLeft } from "@/utils/animations";

const inputClass =
  "w-full rounded-lg border border-glass-border bg-background-secondary px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 outline-none transition-colors focus:border-gold";

export default function Contact({ resumeVersion }: { resumeVersion: number }) {
  const { social } = portfolioData;
  const resumeHref = `${social.resume}?v=${resumeVersion}`;
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.get("name")}`);
    const body = encodeURIComponent(
      `${form.get("message")}\n\n— ${form.get("name")} (${form.get("email")})\n${form.get("company") || ""}`
    );
    window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Transfer Market"
          title="Transfer Market"
          subtitle="Interested in adding this player to your team?"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-16">
          <Reveal variants={slideRight} className="lg:col-span-2">
            <div className="space-y-4">
              <a
                href={`mailto:${social.email}`}
                className="flex items-center gap-3 rounded-xl border border-glass-border bg-glass px-4 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:border-gold/50 hover:text-gold"
              >
                <Mail className="h-4 w-4 text-electric-blue" />
                {social.email}
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-glass-border bg-glass px-4 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:border-gold/50 hover:text-gold"
              >
                <Linkedin className="h-4 w-4 text-electric-blue" />
                LinkedIn
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-glass-border bg-glass px-4 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:border-gold/50 hover:text-gold"
              >
                <Github className="h-4 w-4 text-electric-blue" />
                GitHub
              </a>
              <a
                href={resumeHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-glass-border bg-glass px-4 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:border-gold/50 hover:text-gold"
              >
                <FileText className="h-4 w-4 text-electric-blue" />
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal variants={slideLeft} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input id="name" name="name" required placeholder="Name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="sr-only">
                  Company
                </label>
                <input id="company" name="company" placeholder="Company" className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Message"
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-background-primary shadow-[0_0_0_0_rgba(246,200,95,0.5)] transition-shadow hover:shadow-[0_0_30px_4px_rgba(246,200,95,0.35)]"
              >
                <Send className="h-4 w-4" />
                {sent ? "Message Ready — Check Your Mail App" : "Start a Conversation"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

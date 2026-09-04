"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project, ProjectCategory } from "@/types/portfolio";

const FILTERS: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI" },
  { id: "design", label: "Design" },
];

const CATEGORY_COLOR: Record<ProjectCategory, string> = {
  web: "text-electric-blue border-electric-blue/40",
  mobile: "text-achievement-green border-achievement-green/40",
  ai: "text-accent-purple border-accent-purple/40",
  design: "text-gold border-gold/40",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl border border-glass-border bg-glass p-6 transition-colors hover:border-gold/50 ${
        project.featured ? "sm:col-span-2" : ""
      }`}
    >
      {/* light sweep on hover */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <div className="relative flex items-start justify-between gap-3">
        <div>
          <span
            className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] ${CATEGORY_COLOR[project.category]}`}
          >
            {project.type}
          </span>
          <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-wide text-text-primary">
            {project.name}
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-1 rounded-full border border-glass-border bg-background-primary/60 px-2.5 py-1">
          <Star className="h-3 w-3 fill-gold text-gold" />
          <span className="font-display text-sm font-bold text-gold">
            {project.rating}
          </span>
        </div>
      </div>

      <p className="relative mt-3 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>

      <div className="relative mt-4 flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-text-secondary">
          {project.year}
        </span>
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-background-secondary px-2.5 py-0.5 text-[11px] font-medium text-text-secondary"
          >
            {tech}
          </span>
        ))}
        {project.wip && (
          <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-gold">
            Work in progress
          </span>
        )}
      </div>

      <div className="relative mt-5 flex items-center gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-text-primary transition-colors hover:text-gold"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            View Live
          </a>
        )}
        {project.sourceUrl && (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-text-secondary transition-colors hover:text-gold"
          >
            <Github className="h-3.5 w-3.5" />
            View Source
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [projects, filter]
  );

  return (
    <section id="projects" className="relative px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="The Portfolio" title="Career Highlights" />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                filter === f.id
                  ? "border-gold bg-gold text-background-primary"
                  : "border-glass-border text-text-secondary hover:border-gold/50 hover:text-gold"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

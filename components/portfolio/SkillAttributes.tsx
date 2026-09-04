"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerChildren, fadeUp } from "@/utils/animations";

export default function SkillAttributes() {
  const { skills } = portfolioData;

  return (
    <section id="attributes" className="relative px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Rated Skills" title="Player Attributes" />

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl border border-glass-border bg-glass p-6"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-electric-blue">
                {group.title}
              </h3>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={staggerChildren}
                className="mt-5 space-y-5"
              >
                {group.skills.map((skill) => (
                  <motion.div key={skill.name} variants={fadeUp} className="group">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-semibold text-text-primary">
                        {skill.name}
                      </span>
                      <span className="font-display text-base font-bold text-gold">
                        {skill.value}
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-background-secondary">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-electric-blue to-gold transition-[filter] group-hover:brightness-125"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

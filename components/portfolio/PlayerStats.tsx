"use client";

import { motion } from "framer-motion";
import { staggerChildren, fadeUp } from "@/utils/animations";
import type { Stat } from "@/types/portfolio";

export default function PlayerStats({ stats }: { stats: Stat[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerChildren}
      className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3"
    >
      {stats.map((stat) => (
        <motion.div key={stat.label} variants={fadeUp} className="group">
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-semibold tracking-[0.2em] text-text-secondary">
              {stat.label}
            </span>
            <span className="font-display text-xl font-bold text-text-primary">
              {stat.value}
            </span>
          </div>
          <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-glass">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-electric-blue to-gold"
              initial={{ width: 0 }}
              whileInView={{ width: `${stat.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            />
          </div>
          <span className="mt-1 block text-[11px] text-text-secondary opacity-0 transition-opacity group-hover:opacity-100">
            {stat.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

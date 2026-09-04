"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, animate } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function CinematicIntro() {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const controls = animate(0, 100, {
      duration: 1.4,
      ease: "easeInOut",
      onUpdate: (v) => setProgress(Math.round(v)),
      onComplete: () => {
        setTimeout(() => setVisible(false), 200);
      },
    });

    return () => controls.stop();
  }, [prefersReducedMotion]);

  const show = visible && !prefersReducedMotion;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-background-primary"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
            }}
          />
          <div className="pointer-events-none absolute h-96 w-96 rounded-full bg-electric-blue/10 blur-[100px]" />

          <p className="relative text-xs font-semibold uppercase tracking-[0.4em] text-electric-blue">
            Player Profile
          </p>
          <p className="relative mt-2 text-[11px] font-medium uppercase tracking-[0.3em] text-text-secondary">
            Initializing...
          </p>

          <div className="relative mt-8 h-1 w-56 overflow-hidden rounded-full bg-glass">
            <div
              className="h-full rounded-full bg-gradient-to-r from-electric-blue to-gold"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="relative mt-3 font-display text-2xl font-bold text-gold">
            {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useSpring, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useMousePosition } from "@/hooks/useMousePosition";
import type { PersonalInfo, Stat } from "@/types/portfolio";

// Original angular frame — an eight-sided cut rectangle, not a FIFA card silhouette.
const CARD_CLIP =
  "polygon(0% 6%, 6% 0%, 94% 0%, 100% 6%, 100% 94%, 94% 100%, 6% 100%, 0% 94%)";

interface PlayerCardProps {
  personal: PersonalInfo;
  stats: Stat[];
}

export default function PlayerCard({ personal, stats }: PlayerCardProps) {
  const canTilt = useMediaQuery("(hover: hover) and (pointer: fine)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const { ref, x, y, onMouseMove, onMouseLeave } = useMousePosition();

  const interactive = canTilt && !prefersReducedMotion;

  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), {
    stiffness: 220,
    damping: 22,
  });

  const shineX = useTransform(x, (v) => `${v * 100}%`);
  const shineY = useTransform(y, (v) => `${v * 100}%`);
  const shineBackground = useMotionTemplate`radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.35), transparent 45%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={interactive ? onMouseMove : undefined}
      onMouseLeave={interactive ? onMouseLeave : undefined}
      style={{ perspective: 1200 }}
      className="relative mx-auto w-72 sm:w-80"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* ambient glow behind the card */}
      <div className="absolute inset-6 -z-10 rounded-full bg-gold/20 blur-3xl" />

      <motion.div
        style={
          interactive
            ? { rotateX, rotateY, transformStyle: "preserve-3d" }
            : undefined
        }
        className="relative aspect-[3/4.3]"
      >
        {/* metallic gold frame */}
        <div
          style={{ clipPath: CARD_CLIP }}
          className="h-full w-full bg-gradient-to-br from-gold via-gold-highlight to-electric-blue p-[2px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
        >
          {/* card surface */}
          <div
            style={{ clipPath: CARD_CLIP }}
            className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-b from-surface to-background-secondary px-5 pt-5 pb-4"
          >
            {/* faint diagonal metallic texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(115deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)",
              }}
            />

            {/* cursor-follow shine */}
            {interactive && (
              <motion.div
                className="pointer-events-none absolute inset-0"
                style={{ background: shineBackground }}
              />
            )}

            {/* header: rating + location */}
            <div className="relative flex items-start justify-between">
              <div className="leading-none">
                <div className="font-display text-5xl font-extrabold tracking-tight text-gold">
                  {personal.rating}
                </div>
                <div className="mt-1 text-[11px] font-semibold tracking-[0.25em] text-text-secondary">
                  OVR
                </div>
              </div>
              <div className="flex items-center gap-1 rounded-full border border-glass-border bg-glass px-2.5 py-1 text-[10px] font-medium tracking-wide text-text-secondary">
                <MapPin className="h-3 w-3 text-electric-blue" />
                {personal.location}
              </div>
            </div>

            {/* portrait */}
            <div className="relative mx-auto mt-3 flex h-36 w-36 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/40 to-electric-blue/30 blur-md" />
              <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-gold/70 bg-background-secondary">
                {personal.image ? (
                  <Image
                    src={personal.image}
                    alt={personal.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                ) : (
                  <span className="font-display text-3xl font-bold text-gold">
                    {personal.initials}
                  </span>
                )}
              </div>
            </div>

            {/* name + role */}
            <div className="relative mt-3 text-center">
              <h1 className="font-display text-2xl font-bold uppercase tracking-wide text-text-primary">
                {personal.name}
              </h1>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-electric-blue">
                {personal.role}
              </p>
            </div>

            <div className="relative mt-3 h-px w-full bg-gradient-to-r from-transparent via-glass-border to-transparent" />

            {/* stats grid */}
            <div className="relative mt-3 grid flex-1 grid-cols-2 gap-x-4 gap-y-2">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.15em] text-text-secondary">
                    {stat.label}
                  </span>
                  <span className="font-display text-lg font-bold text-text-primary">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative mt-2 text-center text-[10px] font-medium uppercase tracking-[0.3em] text-gold/70">
              {personal.status}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

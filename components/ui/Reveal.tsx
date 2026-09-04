"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/utils/animations";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  once?: boolean;
}

export function Reveal({ children, variants = fadeUp, className, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

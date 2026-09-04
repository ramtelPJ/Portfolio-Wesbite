"use client";

import { useRef, type RefObject } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

interface UseMousePositionResult {
  ref: RefObject<HTMLDivElement | null>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
}

/** Normalized (0-1) pointer position relative to the bound element, as Framer Motion values. */
export function useMousePosition(): UseMousePositionResult {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function onMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return { ref, x, y, onMouseMove, onMouseLeave };
}

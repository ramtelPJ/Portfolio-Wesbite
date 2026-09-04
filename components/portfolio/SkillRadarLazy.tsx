"use client";

import dynamic from "next/dynamic";
import type { RadarCategory } from "@/types/portfolio";

const SkillRadar = dynamic(() => import("./SkillRadar"), {
  ssr: false,
  loading: () => (
    <div className="h-72 w-full animate-pulse rounded-xl bg-glass sm:h-80" />
  ),
});

export default function SkillRadarLazy({ data }: { data: RadarCategory[] }) {
  return <SkillRadar data={data} />;
}

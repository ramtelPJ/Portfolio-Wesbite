"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import type { RadarCategory } from "@/types/portfolio";

export default function SkillRadar({ data }: { data: RadarCategory[] }) {
  return (
    <div className="h-72 w-full sm:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="75%">
          <PolarGrid stroke="rgba(255,255,255,0.12)" />
          <PolarAngleAxis
            dataKey="category"
            tick={{ fill: "#A7B0C0", fontSize: 11, fontWeight: 600 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />
          <Radar
            dataKey="value"
            stroke="#00AEEF"
            strokeWidth={2}
            fill="#F6C85F"
            fillOpacity={0.25}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

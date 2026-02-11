"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "??? ?????????", value: 120 },
  { label: "?????? ?????", value: 86 },
  { label: "??????? ?????", value: 24 },
  { label: "????? ??????", value: 3 }
];

function StatValue({ value }: { value: number }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  React.useEffect(() => {
    const controls = animate(motionValue, value, { duration: 1.2 });
    return controls.stop;
  }, [motionValue, value]);

  return <motion.span>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section className="grid gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center shadow-soft"
        >
          <Badge tone="muted" className="mb-3">
            ????????
          </Badge>
          <div className="text-3xl font-semibold text-white">
            <StatValue value={stat.value} />+
          </div>
          <div className="mt-2 text-xs text-white/60">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}

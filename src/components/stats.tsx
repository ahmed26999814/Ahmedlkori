"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "عدد المراجعات", value: 120 },
  { label: "ملخصات متاحة", value: 86 },
  { label: "مجموعات فعالة", value: 24 },
  { label: "أماكن مذاكرة", value: 3 }
];

export function Stats() {
  return (
    <section className="grid gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} label={stat.label} value={stat.value} />
      ))}
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center shadow-soft"
    >
      <Badge tone="muted" className="mb-3">
        إحصائيات
      </Badge>
      <div className="text-3xl font-semibold text-white">
        {inView ? <CountUp end={value} duration={1.2} /> : 0}+
      </div>
      <div className="mt-2 text-xs text-white/60">{label}</div>
    </div>
  );
}

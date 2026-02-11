"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { SummaryCard } from "@/components/summary-card";
import { useContent } from "@/components/providers/content-provider";

export function TodayPick() {
  const { summaries } = useContent();
  const [pick, setPick] = React.useState(summaries[0]);

  React.useEffect(() => {
    if (!summaries.length) return;
    const today = new Date().toDateString();
    const seed = today.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = seed % summaries.length;
    setPick(summaries[index]);
  }, [summaries]);

  if (!pick) return null;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-white/70">
        <Sparkles size={16} /> ?????? ?????
      </div>
      <SummaryCard {...pick} />
    </section>
  );
}

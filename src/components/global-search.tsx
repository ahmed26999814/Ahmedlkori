"use client";

import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { useContent } from "@/components/providers/content-provider";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export function GlobalSearch() {
  const { telegramReviews, whatsappGroups, summaries, places } = useContent();
  const [query, setQuery] = React.useState("");

  const results = React.useMemo(() => {
    if (!query.trim()) return [] as { label: string; href: string; tag: string }[];
    const q = query.toLowerCase();
    const items: { label: string; href: string; tag: string }[] = [];

    telegramReviews.forEach((item) => {
      if (
        item.title.toLowerCase().includes(q) ||
        item.subject.toLowerCase().includes(q)
      ) {
        items.push({ label: item.title, href: "/reviews", tag: "Telegram" });
      }
    });

    whatsappGroups.forEach((item) => {
      if (
        item.title.toLowerCase().includes(q) ||
        item.subject.toLowerCase().includes(q)
      ) {
        items.push({ label: item.title, href: "/reviews", tag: "WhatsApp" });
      }
    });

    summaries.forEach((item) => {
      if (
        item.title.toLowerCase().includes(q) ||
        item.subject.toLowerCase().includes(q)
      ) {
        items.push({ label: item.title, href: "/summaries", tag: "????" });
      }
    });

    places.forEach((item) => {
      if (item.name.toLowerCase().includes(q)) {
        items.push({ label: item.name, href: "/places", tag: "????" });
      }
    });

    return items.slice(0, 8);
  }, [query, telegramReviews, whatsappGroups, summaries, places]);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur">
      <div className="flex items-center gap-2 text-white/70">
        <Search size={18} />
        <span className="text-sm">??? ???? ?? ?? ???????</span>
      </div>
      <div className="mt-4">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="???? ?? ????? ???? ????..."
        />
      </div>
      <div className="mt-4 space-y-3">
        {!query && (
          <div className="text-xs text-white/50">
            ????: ??????? ?????? ?????...
          </div>
        )}
        {results.map((item) => (
          <Link
            key={`${item.label}-${item.tag}`}
            href={item.href}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
          >
            <span>{item.label}</span>
            <Badge tone="accent">{item.tag}</Badge>
          </Link>
        ))}
      </div>
    </section>
  );
}

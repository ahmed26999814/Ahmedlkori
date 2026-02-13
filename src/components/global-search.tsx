"use client";

import React from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContent } from "@/components/providers/content-provider";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/components/providers/language-provider";

export function GlobalSearch() {
  const { telegramReviews, whatsappGroups, summaries, places } = useContent();
  const [query, setQuery] = React.useState("");
  const router = useRouter();
  const { t } = useLang();

  const results = React.useMemo(() => {
    if (!query.trim()) return [] as { label: string; href: string; tag: string }[];
    const q = query.toLowerCase();
    const items: { label: string; href: string; tag: string }[] = [];

    telegramReviews.forEach((item) => {
      if (item.title.toLowerCase().includes(q) || item.subject.toLowerCase().includes(q)) {
        items.push({ label: item.title, href: "/reviews", tag: "Telegram" });
      }
    });

    whatsappGroups.forEach((item) => {
      if (item.title.toLowerCase().includes(q) || item.subject.toLowerCase().includes(q)) {
        items.push({ label: item.title, href: "/reviews", tag: "WhatsApp" });
      }
    });

    summaries.forEach((item) => {
      if (item.title.toLowerCase().includes(q) || item.subject.toLowerCase().includes(q)) {
        items.push({ label: item.title, href: "/summaries", tag: t("tag_summary") });
      }
    });

    places.forEach((item) => {
      if (item.name.toLowerCase().includes(q)) {
        items.push({ label: item.name, href: "/places", tag: t("tag_place") });
      }
    });

    return items.slice(0, 8);
  }, [query, telegramReviews, whatsappGroups, summaries, places, t]);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur">
      <Command value={query} onValueChange={setQuery} className="w-full">
        <div className="flex items-center gap-2 text-white/70">
          <Search size={18} />
          <span className="text-sm">{t("search_title")}</span>
        </div>
        <div className="mt-4">
          <Command.Input
            placeholder={t("search_placeholder")}
            className="flex h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 shadow-soft outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
          />
        </div>
        <Command.List className="mt-4 space-y-3">
          {!query ? (
            <div className="text-xs text-white/50">{t("search_tip")}</div>
          ) : null}
          <Command.Empty className="text-xs text-white/50">
            {t("command_empty")}
          </Command.Empty>
          {results.map((item) => (
            <Command.Item
              key={`${item.label}-${item.tag}`}
              value={`${item.label} ${item.tag}`}
              onSelect={() => router.push(item.href)}
              className="flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10 aria-selected:bg-white/10"
            >
              <span>{item.label}</span>
              <Badge tone="accent">{item.tag}</Badge>
            </Command.Item>
          ))}
        </Command.List>
      </Command>
    </section>
  );
}

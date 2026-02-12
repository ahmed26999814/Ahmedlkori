"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, MapPin, Files } from "lucide-react";
import { useLang } from "@/components/providers/language-provider";

const items = [
  { href: "/reviews", icon: BookOpen, labelKey: "nav_reviews" },
  { href: "/summaries", icon: Files, labelKey: "nav_summaries" },
  { href: "/places", icon: MapPin, labelKey: "nav_places" }
];

export function QuickLinks() {
  const { t } = useLang();

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass">
      <div className="mb-4 text-sm text-white/70">
        {t("quick_links")}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <span className="flex items-center gap-2">
                <Icon size={18} />
                {t(item.labelKey as any)}
              </span>
              <ArrowUpRight size={16} className="opacity-70 transition group-hover:opacity-100" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

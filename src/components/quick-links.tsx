"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, MapPin, Files } from "lucide-react";
import { useLang } from "@/components/providers/language-provider";

const items = [
  {
    href: "/reviews",
    icon: BookOpen,
    labelKey: "nav_reviews",
    descKey: "quick_reviews_desc"
  },
  {
    href: "/summaries",
    icon: Files,
    labelKey: "nav_summaries",
    descKey: "quick_summaries_desc"
  },
  {
    href: "/places",
    icon: MapPin,
    labelKey: "nav_places",
    descKey: "quick_places_desc"
  }
];

export function QuickLinks() {
  const { t } = useLang();

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass">
      <div className="mb-5 text-sm text-white/70">{t("quick_links")}</div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 text-white shadow-soft transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-glow"
            >
              <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-accent-400/20 blur-2xl transition group-hover:scale-110" />
              <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-sunrise/20 blur-2xl transition group-hover:scale-110" />
              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-base font-semibold">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                    <Icon size={18} />
                  </span>
                  {t(item.labelKey as any)}
                </span>
                <ArrowUpRight
                  size={18}
                  className="opacity-70 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </div>
              <p className="relative mt-3 text-sm text-white/70">
                {t(item.descKey as any)}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { BookOpen, Files, Landmark } from "lucide-react";
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
    icon: Landmark,
    labelKey: "nav_places",
    descKey: "quick_places_desc"
  }
];

export function QuickLinks() {
  const { t } = useLang();
  const accentGradients = [
    "from-accent-500/30 via-transparent to-transparent",
    "from-sunrise/30 via-transparent to-transparent",
    "from-emerald-500/30 via-transparent to-transparent"
  ];
  const iconAccents = [
    "bg-accent-500/20 text-accent-100",
    "bg-sunrise/20 text-sunrise",
    "bg-emerald-500/20 text-emerald-100"
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass">
      <div className="mb-5 text-sm text-white/70">{t("quick_links")}</div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon;
          const accent = accentGradients[index % accentGradients.length];
          const iconAccent = iconAccents[index % iconAccents.length];
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 text-white shadow-soft transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-glow"
            >
              <div className={`absolute -left-10 -top-10 h-24 w-24 rounded-full bg-accent-400/20 blur-2xl transition group-hover:scale-110`} />
              <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-sunrise/20 blur-2xl transition group-hover:scale-110" />
              <div
                className={`absolute left-0 top-0 h-16 w-40 -translate-x-8 -translate-y-6 rotate-6 bg-gradient-to-r ${accent} opacity-80`}
              />
              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-base font-semibold">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 ${iconAccent}`}
                  >
                    <Icon size={18} />
                  </span>
                  {t(item.labelKey as any)}
                </span>
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

"use client";

import React from "react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/spotlight-card";
import { useContent } from "@/components/providers/content-provider";
import { useLang } from "@/components/providers/language-provider";

export default function SummariesPage() {
  const { summaries } = useContent();
  const { t, lang } = useLang();

  const grouped = React.useMemo(() => {
    const map = new Map<string, typeof summaries>();
    summaries.forEach((item) => {
      if (!map.has(item.subject)) {
        map.set(item.subject, []);
      }
      map.get(item.subject)?.push(item);
    });
    return Array.from(map.entries()).map(([subject, items]) => ({
      subject,
      items: items.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    }));
  }, [summaries]);

  return (
    <div className="space-y-8">
      <PageHeader title={t("summaries_title")} description={t("summaries_desc")} />

      {grouped.length ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {grouped.map((group) => (
            <SpotlightCard key={group.subject} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {group.subject}
                </h3>
                <p className="text-sm text-white/60">
                  {lang === "fr" ? "Liens des fichiers" : "روابط الملفات"}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) =>
                  item.url ? (
                    <Button key={item.title} asChild variant="secondary" size="sm">
                      <a href={item.url} target="_blank" rel="noreferrer">
                        {item.title}
                      </a>
                    </Button>
                  ) : (
                    <Button key={item.title} variant="outline" size="sm" disabled>
                      {lang === "fr" ? "Bientôt" : "قريبًا"}
                    </Button>
                  )
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/60">
          {lang === "fr"
            ? "Aucun fichier disponible pour le moment."
            : "لا توجد ملفات متاحة حاليًا."}
        </div>
      )}
    </div>
  );
}

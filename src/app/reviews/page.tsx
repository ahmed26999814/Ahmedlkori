"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/spotlight-card";
import { useContent } from "@/components/providers/content-provider";
import { useLang } from "@/components/providers/language-provider";

export default function ReviewsPage() {
  const { telegramReviews, whatsappGroups } = useContent();
  const { t, lang } = useLang();
  const [semester, setSemester] = React.useState<"S1" | "S2">("S1");

  const grouped = React.useMemo(() => {
    const items = telegramReviews.filter(
      (item) => item.level === "L1" && item.semester === semester
    );
    const map = new Map<string, typeof items>();
    items.forEach((item) => {
      if (!map.has(item.subject)) {
        map.set(item.subject, []);
      }
      map.get(item.subject)?.push(item);
    });
    return Array.from(map.entries()).map(([subject, links]) => ({
      subject,
      links: links.sort((a, b) => a.yearLabel.localeCompare(b.yearLabel))
    }));
  }, [telegramReviews, semester]);

  return (
    <div className="space-y-8">
      <PageHeader title={t("reviews_title")} description={t("reviews_desc")} />

      <div className="flex flex-wrap items-center gap-3">
        <Badge tone="accent">{t("reviews_level")}</Badge>
        <div className="flex gap-2">
          <button
            onClick={() => setSemester("S1")}
            className={`rounded-full px-5 py-2 text-sm transition ${
              semester === "S1"
                ? "bg-accent-500 text-white"
                : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            {t("reviews_semester_s1")}
          </button>
          <button
            onClick={() => setSemester("S2")}
            className={`rounded-full px-5 py-2 text-sm transition ${
              semester === "S2"
                ? "bg-accent-500 text-white"
                : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            {t("reviews_semester_s2")}
          </button>
        </div>
      </div>

      {grouped.length ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {grouped.map((group) => (
            <SpotlightCard key={group.subject} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {group.subject}
                </h3>
                <p className="text-sm text-white/60">
                  {lang === "fr" ? "Liens par année" : "روابط حسب السنة"}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.links.map((item) =>
                  item.url ? (
                    <Button key={item.title} asChild variant="secondary" size="sm">
                      <a href={item.url}>
                        {item.yearLabel} <ExternalLink size={14} />
                      </a>
                    </Button>
                  ) : (
                    <Button key={item.title} variant="outline" size="sm" disabled>
                      {t("reviews_coming")}
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
            ? "Aucun lien disponible pour le moment."
            : "لا توجد روابط متاحة حاليًا."}
        </div>
      )}

      {whatsappGroups.length ? (
        <section className="space-y-3">
          <h3 className="text-lg font-semibold text-white">
            {t("reviews_whatsapp_title")}
          </h3>
          <SpotlightCard className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <div className="text-white">{whatsappGroups[0].title}</div>
              <div className="text-sm text-white/60">
                {t("reviews_whatsapp_desc")}
              </div>
            </div>
            <Button asChild variant="secondary">
              <a href={whatsappGroups[0].url}>
                {t("reviews_open")}
              </a>
            </Button>
          </SpotlightCard>
        </section>
      ) : null}
    </div>
  );
}

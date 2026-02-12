"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/spotlight-card";
import { useContent } from "@/components/providers/content-provider";
import { useLang } from "@/components/providers/language-provider";

export default function SummariesPage() {
  const { summaries } = useContent();
  const { t, lang } = useLang();
  const openLink = React.useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  const groupedByTerm = React.useMemo(() => {
    const terms = ["الأول", "الثاني"];
    return terms.map((term) => {
      const items = summaries.filter((item) => item.term === term);
      const map = new Map<string, typeof items>();
      items.forEach((item) => {
        if (!map.has(item.subject)) {
          map.set(item.subject, []);
        }
        map.get(item.subject)?.push(item);
      });
      return {
        term,
        subjects: Array.from(map.entries()).map(([subject, files]) => ({
          subject,
          files: files.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
        }))
      };
    });
  }, [summaries]);

  return (
    <div className="space-y-8">
      <PageHeader title={t("summaries_title")} description={t("summaries_desc")} />

      {groupedByTerm.some((term) => term.subjects.length) ? (
        <div className="space-y-8">
          {groupedByTerm.map((termGroup) =>
            termGroup.subjects.length ? (
              <section key={termGroup.term} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/70">
                    {termGroup.term === "الأول"
                      ? lang === "fr"
                        ? "Semestre S1"
                        : "الفصل S1"
                      : lang === "fr"
                      ? "Semestre S2"
                      : "الفصل S2"}
                  </span>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {termGroup.subjects.map((group) => (
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
                        {group.files.map((item) =>
                          item.url ? (
                            <Button
                              key={item.title}
                              variant="secondary"
                              size="sm"
                              onClick={() => openLink(item.url)}
                            >
                              {item.title} <ExternalLink size={14} />
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
              </section>
            ) : null
          )}
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

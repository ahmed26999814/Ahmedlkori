"use client";

import React from "react";
import { ReviewCard } from "@/components/review-card";
import { PageHeader } from "@/components/page-header";
import { FilterBar } from "@/components/filters";
import { SkeletonGrid } from "@/components/skeleton-grid";
import { useContent } from "@/components/providers/content-provider";
import { uniqueValues } from "@/lib/utils";

export default function ReviewsPage() {
  const { telegramReviews, whatsappGroups } = useContent();
  const [tab, setTab] = React.useState<"telegram" | "whatsapp">("telegram");
  const [query, setQuery] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  const subjects = uniqueValues(
    (tab === "telegram" ? telegramReviews : whatsappGroups).map(
      (item) => item.subject
    )
  );

  const telegramFiltered = React.useMemo(() => {
    const q = query.toLowerCase();
    return telegramReviews.filter(
      (item) =>
        (!subject || item.subject === subject) &&
        (item.title.toLowerCase().includes(q) ||
          item.subject.toLowerCase().includes(q))
    );
  }, [telegramReviews, query, subject]);

  const whatsappFiltered = React.useMemo(() => {
    const q = query.toLowerCase();
    return whatsappGroups.filter(
      (item) =>
        (!subject || item.subject === subject) &&
        (item.title.toLowerCase().includes(q) ||
          item.subject.toLowerCase().includes(q))
    );
  }, [whatsappGroups, query, subject]);

  return (
    <div className="space-y-8">
      <PageHeader
        title="?????????"
        description="????? ??????? Telegram ???????? WhatsApp ????? ?? ??? ???? ????."
      />

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setTab("telegram")}
          className={`rounded-full px-5 py-2 text-sm transition ${
            tab === "telegram"
              ? "bg-accent-500 text-white"
              : "bg-white/5 text-white/60 hover:bg-white/10"
          }`}
        >
          Telegram
        </button>
        <button
          onClick={() => setTab("whatsapp")}
          className={`rounded-full px-5 py-2 text-sm transition ${
            tab === "whatsapp"
              ? "bg-mint text-black"
              : "bg-white/5 text-white/60 hover:bg-white/10"
          }`}
        >
          WhatsApp
        </button>
      </div>

      <FilterBar
        query={query}
        onQueryChange={setQuery}
        filters={[
          {
            id: "subject",
            label: "??????",
            options: subjects,
            value: subject
          }
        ]}
        onFilterChange={(id, value) => {
          if (id === "subject") setSubject(value);
        }}
      />

      {loading ? (
        <SkeletonGrid count={6} />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tab === "telegram"
            ? telegramFiltered.map((item) => (
                <ReviewCard key={item.title} {...item} type="Telegram" />
              ))
            : whatsappFiltered.map((item) => (
                <ReviewCard
                  key={item.title}
                  title={item.title}
                  subject={item.subject}
                  url={item.url}
                  tags={[item.membersHint]}
                  type="WhatsApp"
                />
              ))}
        </div>
      )}
    </div>
  );
}

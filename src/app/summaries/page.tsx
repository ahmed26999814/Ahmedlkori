"use client";

import React from "react";
import { List, LayoutGrid } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { FilterBar } from "@/components/filters";
import { SummaryCard } from "@/components/summary-card";
import { FeaturedCarousel } from "@/components/featured-carousel";
import { SkeletonGrid } from "@/components/skeleton-grid";
import { useContent } from "@/components/providers/content-provider";
import { uniqueValues, sortByUpdatedAt } from "@/lib/utils";

export default function SummariesPage() {
  const { summaries } = useContent();
  const [query, setQuery] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [year, setYear] = React.useState("");
  const [term, setTerm] = React.useState("");
  const [type, setType] = React.useState("");
  const [view, setView] = React.useState<"grid" | "list">("grid");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  const subjects = uniqueValues(summaries.map((item) => item.subject));
  const years = uniqueValues(summaries.map((item) => String(item.year)));
  const terms = uniqueValues(summaries.map((item) => item.term));
  const types = uniqueValues(summaries.map((item) => item.type.toUpperCase()));

  const filtered = React.useMemo(() => {
    const q = query.toLowerCase();
    return summaries.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase().includes(q) ||
        item.subject.toLowerCase().includes(q);
      const matchesSubject = !subject || item.subject === subject;
      const matchesYear = !year || String(item.year) === year;
      const matchesTerm = !term || item.term === term;
      const matchesType = !type || item.type.toUpperCase() === type;
      return (
        matchesQuery &&
        matchesSubject &&
        matchesYear &&
        matchesTerm &&
        matchesType
      );
    });
  }, [summaries, query, subject, year, term, type]);

  const featured = summaries.filter((item) => item.featured).slice(0, 6);

  return (
    <div className="space-y-8">
      <PageHeader
        title="???????? ????????"
        description="?????? PDF ?Word ???? ?? ?????? ?????? ???? ?????? ????."
      />

      {featured.length ? <FeaturedCarousel items={featured} /> : null}

      <FilterBar
        query={query}
        onQueryChange={setQuery}
        filters={[
          { id: "subject", label: "??????", options: subjects, value: subject },
          { id: "year", label: "?????", options: years, value: year },
          { id: "term", label: "?????", options: terms, value: term },
          { id: "type", label: "?????", options: types, value: type }
        ]}
        onFilterChange={(id, value) => {
          if (id === "subject") setSubject(value);
          if (id === "year") setYear(value);
          if (id === "term") setTerm(value);
          if (id === "type") setType(value);
        }}
      />

      <div className="flex items-center justify-between">
        <div className="text-sm text-white/60">
          ??? {filtered.length} ???
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setView("grid")}
            className={`rounded-full px-4 py-2 text-xs transition ${
              view === "grid"
                ? "bg-white/15 text-white"
                : "bg-white/5 text-white/60"
            }`}
          >
            <LayoutGrid size={14} />
          </button>
          <button
            onClick={() => setView("list")}
            className={`rounded-full px-4 py-2 text-xs transition ${
              view === "list"
                ? "bg-white/15 text-white"
                : "bg-white/5 text-white/60"
            }`}
          >
            <List size={14} />
          </button>
        </div>
      </div>

      {loading ? (
        <SkeletonGrid count={6} />
      ) : (
        <div
          className={
            view === "grid"
              ? "grid gap-4 md:grid-cols-2 lg:grid-cols-3"
              : "grid gap-4"
          }
        >
          {sortByUpdatedAt(filtered).map((item) => (
            <SummaryCard key={item.title} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}

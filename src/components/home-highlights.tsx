"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useContent } from "@/components/providers/content-provider";
import { ReviewCard } from "@/components/review-card";
import { SummaryCard } from "@/components/summary-card";
import { Button } from "@/components/ui/button";
import { sortByUpdatedAt } from "@/lib/utils";

export function HomeHighlights() {
  const { telegramReviews, summaries } = useContent();

  const latestReviews = sortByUpdatedAt(telegramReviews).slice(0, 3);
  const latestSummaries = sortByUpdatedAt(summaries).slice(0, 3);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">آخر المراجعات</h3>
          <Button asChild variant="ghost" size="sm">
            <Link href="/reviews">
              عرض الكل <ArrowLeft size={14} />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4">
          {latestReviews.map((item) => (
            <ReviewCard key={item.title} {...item} type="Telegram" />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">أحدث الملخصات</h3>
          <Button asChild variant="ghost" size="sm">
            <Link href="/summaries">
              عرض الكل <ArrowLeft size={14} />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4">
          {latestSummaries.map((item) => (
            <SummaryCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

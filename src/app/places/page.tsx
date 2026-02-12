"use client";

import dynamic from "next/dynamic";
import { PageHeader } from "@/components/page-header";
import { PlaceCard } from "@/components/place-card";
import { useContent } from "@/components/providers/content-provider";
import { Skeleton } from "@/components/ui/skeleton";

const PlacesMap = dynamic(() => import("@/components/places-map").then((mod) => mod.PlacesMap), {
  ssr: false,
  loading: () => (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <Skeleton className="h-[320px] w-full" />
    </div>
  )
});

export default function PlacesPage() {
  const { places } = useContent();

  return (
    <div className="space-y-8">
      <PageHeader
        title="أماكن الدراسة"
        description="اختر المكان المناسب لمذاكرتك أو تواصل عبر تطبيق جامعتك."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {places.map((place) => (
          <PlaceCard key={place.name} {...place} />
        ))}
      </div>

      <PlacesMap places={places} />
    </div>
  );
}

"use client";

import { PageHeader } from "@/components/page-header";
import { PlaceCard } from "@/components/place-card";
import { useContent } from "@/components/providers/content-provider";

export default function PlacesPage() {
  const { places } = useContent();

  return (
    <div className="space-y-8">
      <PageHeader
        title="أماكن الدراسة والتطبيقات"
        description="حمّل تطبيق جامعتك أو اختر مكانًا مناسبًا للمذاكرة."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {places.map((place) => (
          <PlaceCard key={place.name} {...place} />
        ))}
      </div>
    </div>
  );
}

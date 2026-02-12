"use client";

import { PageHeader } from "@/components/page-header";
import { PlaceCard } from "@/components/place-card";
import { useContent } from "@/components/providers/content-provider";
import { useLang } from "@/components/providers/language-provider";

export default function PlacesPage() {
  const { places } = useContent();
  const { t } = useLang();

  return (
    <div className="space-y-8">
      <PageHeader title={t("places_title")} description={t("places_desc")} />

      <div className="grid gap-4 md:grid-cols-3">
        {places.map((place) => (
          <PlaceCard key={place.name} {...place} />
        ))}
      </div>
    </div>
  );
}

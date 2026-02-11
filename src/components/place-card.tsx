import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/spotlight-card";

export function PlaceCard({
  name,
  desc,
  url,
  locationHint
}: {
  name: string;
  desc: string;
  url: string;
  locationHint: string;
}) {
  return (
    <SpotlightCard className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm text-white/60">{desc}</p>
      </div>
      <div className="flex items-center gap-2 text-xs text-white/60">
        <MapPin size={14} />
        {locationHint}
      </div>
      <Button asChild variant="secondary" size="sm">
        <a href={url} target="_blank" rel="noreferrer">
          ??? ??? ??????? <Navigation size={14} />
        </a>
      </Button>
    </SpotlightCard>
  );
}

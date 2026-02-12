import { Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/spotlight-card";

export function PlaceCard({
  name,
  desc,
  url
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
      <Button asChild variant="secondary" size="sm">
        <a href={url} target="_blank" rel="noreferrer">
          فتح على الخرائط <Navigation size={14} />
        </a>
      </Button>
    </SpotlightCard>
  );
}

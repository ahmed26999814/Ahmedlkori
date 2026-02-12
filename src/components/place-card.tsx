import { Navigation, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/spotlight-card";

export function PlaceCard({
  name,
  desc,
  url,
  appStoreUrl,
  playStoreUrl
}: {
  name: string;
  desc: string;
  url?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  locationHint?: string;
}) {
  const hasStores = Boolean(appStoreUrl || playStoreUrl);

  return (
    <SpotlightCard className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm text-white/60">{desc}</p>
      </div>
      {hasStores ? (
        <div className="flex flex-wrap gap-2">
          {appStoreUrl ? (
            <Button asChild variant="secondary" size="sm">
              <a href={appStoreUrl} target="_blank" rel="noreferrer">
                App Store <Smartphone size={14} />
              </a>
            </Button>
          ) : null}
          {playStoreUrl ? (
            <Button asChild variant="secondary" size="sm">
              <a href={playStoreUrl} target="_blank" rel="noreferrer">
                Google Play <Smartphone size={14} />
              </a>
            </Button>
          ) : null}
        </div>
      ) : url ? (
        <Button asChild variant="secondary" size="sm">
          <a href={url} target="_blank" rel="noreferrer">
            فتح على الخرائط <Navigation size={14} />
          </a>
        </Button>
      ) : null}
    </SpotlightCard>
  );
}

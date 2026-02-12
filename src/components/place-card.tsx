import { Navigation, Phone, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/spotlight-card";

export function PlaceCard({
  name,
  desc,
  url,
  appStoreUrl,
  playStoreUrl,
  phones
}: {
  name: string;
  desc: string;
  url?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  phones?: string[];
  locationHint?: string;
}) {
  const hasStores = Boolean(appStoreUrl || playStoreUrl);
  const hasPhones = Boolean(phones?.length);

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
              <a href={appStoreUrl}>
                App Store <Smartphone size={14} />
              </a>
            </Button>
          ) : null}
          {playStoreUrl ? (
            <Button asChild variant="secondary" size="sm">
              <a href={playStoreUrl}>
                Google Play <Smartphone size={14} />
              </a>
            </Button>
          ) : null}
        </div>
      ) : hasPhones ? (
        <div className="flex flex-wrap gap-2">
          {phones?.map((phone) => (
            <Button key={phone} asChild variant="secondary" size="sm">
              <a href={`tel:${phone}`}>
                {phone} <Phone size={14} />
              </a>
            </Button>
          ))}
        </div>
      ) : url ? (
        <Button asChild variant="secondary" size="sm">
          <a href={url}>
            فتح على الخرائط <Navigation size={14} />
          </a>
        </Button>
      ) : null}
    </SpotlightCard>
  );
}

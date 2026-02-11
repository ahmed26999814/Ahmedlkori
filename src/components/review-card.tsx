"use client";

import React from "react";
import { Copy, ExternalLink, QrCode } from "lucide-react";
import { toast } from "sonner";
import { QRCodeCanvas } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/spotlight-card";

export function ReviewCard({
  title,
  subject,
  url,
  tags,
  type
}: {
  title: string;
  subject: string;
  url: string;
  tags?: string[];
  type: "Telegram" | "WhatsApp";
}) {
  const [showQR, setShowQR] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    toast.success("?? ??? ??????");
  };

  return (
    <SpotlightCard className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-white/60">{subject}</p>
        </div>
        <Badge tone={type === "Telegram" ? "accent" : "success"}>{type}</Badge>
      </div>
      {tags ? (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} tone="muted">
              {tag}
            </Badge>
          ))}
        </div>
      ) : null}
      <div className="flex flex-wrap items-center gap-2">
        <Button asChild variant="secondary" size="sm">
          <a href={url} target="_blank" rel="noreferrer">
            ??? ?????? <ExternalLink size={14} />
          </a>
        </Button>
        <Button variant="ghost" size="sm" onClick={copy}>
          ??? <Copy size={14} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowQR((prev) => !prev)}
        >
          QR <QrCode size={14} />
        </Button>
      </div>
      {showQR ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <QRCodeCanvas value={url} size={120} bgColor="#0b0c10" fgColor="#ffffff" />
        </div>
      ) : null}
    </SpotlightCard>
  );
}

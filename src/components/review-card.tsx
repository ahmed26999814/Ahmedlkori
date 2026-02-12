"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
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
      <Button asChild variant="secondary" size="sm">
        <a href={url} target="_blank" rel="noreferrer">
          فتح الرابط <ExternalLink size={14} />
        </a>
      </Button>
    </SpotlightCard>
  );
}

"use client";

import React from "react";
import { Download, Eye, FileText, ImageIcon, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/spotlight-card";
import { FilePreviewModal } from "@/components/file-preview-modal";
import { formatDate } from "@/lib/utils";

export function SummaryCard({
  title,
  subject,
  type,
  url,
  size,
  year,
  term,
  tags,
  featured,
  updatedAt
}: {
  title: string;
  subject: string;
  type: "pdf" | "doc" | "img";
  url: string;
  size: string;
  year: number;
  term: string;
  tags: string[];
  featured?: boolean;
  updatedAt: string;
}) {
  const [open, setOpen] = React.useState(false);
  const icon = type === "img" ? ImageIcon : FileText;

  return (
    <>
      <SpotlightCard className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-white/60">{subject}</p>
          </div>
          {featured ? (
            <Badge tone="accent">
              <Sparkles size={12} /> ????
            </Badge>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-white/60">
          <Badge tone="muted">{type.toUpperCase()}</Badge>
          <Badge tone="muted">{year}</Badge>
          <Badge tone="muted">????? {term}</Badge>
          <Badge tone="muted">{size}</Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} tone="muted">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="text-xs text-white/50">
          ??? ?????: {formatDate(updatedAt)}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>
            ?????? <Eye size={14} />
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href={url} target="_blank" rel="noreferrer" download>
              ????? <Download size={14} />
            </a>
          </Button>
          <div className="ml-auto flex items-center gap-2 text-xs text-white/60">
            {React.createElement(icon, { size: 14 })}
            {type === "img" ? "???" : "?????"}
          </div>
        </div>
      </SpotlightCard>
      <FilePreviewModal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        url={url}
        type={type}
      />
    </>
  );
}

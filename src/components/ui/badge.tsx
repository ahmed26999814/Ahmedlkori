import * as React from "react";

import { cn } from "@/lib/utils";

type BadgeTone = "accent" | "muted" | "success" | "danger";
type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

const toneClasses: Record<BadgeTone, string> = {
  accent: "border-accent-400/40 bg-accent-500/15 text-accent-50",
  muted: "border-white/10 bg-white/5 text-white/70",
  success: "border-emerald-400/30 bg-emerald-500/15 text-emerald-100",
  danger: "border-rose-400/30 bg-rose-500/15 text-rose-100"
};

const variantClasses: Record<BadgeVariant, string> = {
  default: toneClasses.accent,
  secondary: toneClasses.muted,
  destructive: toneClasses.danger,
  outline: "border-white/20 text-white"
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: BadgeTone;
  variant?: BadgeVariant;
}

function Badge({ className, tone, variant, ...props }: BadgeProps) {
  const applied =
    variant !== undefined
      ? variantClasses[variant]
      : tone
      ? toneClasses[tone]
      : toneClasses.muted;

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition",
        applied,
        className
      )}
      {...props}
    />
  );
}

export { Badge };

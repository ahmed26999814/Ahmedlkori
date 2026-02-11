import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "accent" | "muted" | "success";
}) {
  const tones: Record<string, string> = {
    default: "bg-white/10 text-white/80 border-white/10",
    accent: "bg-accent-500/15 text-accent-200 border-accent-500/30",
    muted: "bg-white/5 text-white/60 border-white/10",
    success: "bg-mint/15 text-mint border-mint/30"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}

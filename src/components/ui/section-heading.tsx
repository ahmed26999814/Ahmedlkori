import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/70">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-2xl font-semibold text-white md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm text-white/70 md:text-base">{description}</p>
      ) : null}
    </div>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <Skeleton className="mb-3 h-4 w-2/3" />
          <Skeleton className="mb-6 h-3 w-1/3" />
          <Skeleton className="h-24 w-full" />
        </div>
      ))}
    </div>
  );
}

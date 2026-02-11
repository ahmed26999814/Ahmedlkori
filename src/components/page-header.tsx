import { SectionHeading } from "@/components/ui/section-heading";

export function PageHeader({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
      <SectionHeading title={title} description={description} />
    </div>
  );
}

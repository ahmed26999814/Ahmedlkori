import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="نبذة عن أحمد"
        description="مصمم تجربة دراسة بتركيز عالي وجودة فاخرة."
      />
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/70">
        <Badge tone="accent">المهمة</Badge>
        <p className="mt-3 leading-7">
          هدفي بناء مركز مراجعات وملخصات يختصر الطريق على الطلاب، ويرتب المحتوى
          بشكل احترافي مع أدوات بحث وفلترة ومشاركة سهلة. المنصة تتطور باستمرار
          لتضيف أحدث المراجعات والملفات بجودة عالية.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            تجربة مستخدم واضحة + جميلة
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            تنظيم ذكي للملفات والروابط
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            تحديثات أسبوعية للمحتوى
          </div>
        </div>
      </div>
    </div>
  );
}

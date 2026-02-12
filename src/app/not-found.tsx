import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <div>
        <h1 className="text-3xl font-semibold text-white">الصفحة غير موجودة</h1>
        <p className="mt-2 text-sm text-white/60">ربما تم نقل الصفحة أو حذفها.</p>
      </div>
      <Button asChild variant="secondary">
        <Link href="/">العودة للرئيسية</Link>
      </Button>
    </div>
  );
}

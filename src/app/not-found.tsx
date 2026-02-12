"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/providers/language-provider";

export default function NotFound() {
  const { t } = useLang();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <div>
        <h1 className="text-3xl font-semibold text-white">{t("not_found_title")}</h1>
        <p className="mt-2 text-sm text-white/60">{t("not_found_desc")}</p>
      </div>
      <Button asChild variant="secondary">
        <Link href="/">{t("not_found_cta")}</Link>
      </Button>
    </div>
  );
}

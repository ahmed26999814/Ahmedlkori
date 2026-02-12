"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/providers/language-provider";

export function HomeContact() {
  const { t } = useLang();

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{t("home_contact_title")}</h3>
          <p className="text-sm text-white/60">{t("home_contact_desc")}</p>
        </div>
        <Button asChild variant="glow" size="lg">
          <a href="https://wa.me/44141294">
            {t("home_contact_cta")} <MessageCircle size={18} />
          </a>
        </Button>
      </div>
    </section>
  );
}

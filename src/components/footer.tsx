"use client";

import { MessageCircle } from "lucide-react";
import { useLang } from "@/components/providers/language-provider";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/10 bg-black/40 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">
            {t("brand_name")}
          </h3>
          <p className="text-sm text-white/70">{t("footer_tagline")}</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:text-white"
            href="https://wa.me/44141294"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

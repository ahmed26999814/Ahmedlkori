"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useLang } from "@/components/providers/language-provider";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/10 bg-black/40 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">
            مراجعات أحمد الكوري | Ahmed Study Hub
          </h3>
          <p className="text-sm text-white/70">{t("footer_tagline")}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-white/70">
          <Link href="/reviews" className="hover:text-white">
            {t("nav_reviews")}
          </Link>
          <Link href="/summaries" className="hover:text-white">
            {t("nav_summaries")}
          </Link>
          <Link href="/places" className="hover:text-white">
            {t("nav_places")}
          </Link>
          <Link href="/about" className="hover:text-white">
            {t("nav_about")}
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <a
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:text-white"
            href="https://wa.me/44141294"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

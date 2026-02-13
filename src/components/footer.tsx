"use client";

import { useLang } from "@/components/providers/language-provider";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/10 bg-black/40 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">{t("brand_name")}</h3>
          <p className="text-sm text-white/70">{t("footer_tagline")}</p>
          <Separator className="bg-white/10" />
          <div className="text-xs text-white/60 leading-6">
            {t("footer_extra")}
          </div>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.facebook.com/profile.php?id=100026213213446"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M13.5 9.5V7.6c0-.9.6-1.1 1-1.1h2V4h-2.8C11.2 4 10 5.4 10 7.5v2H8v2.7h2V20h3.5v-7.8h2.3l.3-2.7h-2.6z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@kori.ahmed44?_r=1&_t=ZS-93qlIq0ru5a"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M16.7 4c.5 1.5 1.6 2.6 3.1 3.1v3.1c-1.4 0-2.7-.4-3.9-1.1v5.4c0 3-2.5 5.5-5.5 5.5S5 17.6 5 14.6s2.5-5.5 5.5-5.5c.4 0 .8 0 1.1.1v3.2c-.3-.1-.7-.2-1.1-.2-1.3 0-2.4 1.1-2.4 2.4S9.2 17 10.5 17s2.4-1.1 2.4-2.4V4h3.8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

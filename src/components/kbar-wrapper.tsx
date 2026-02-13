"use client";

import React from "react";
import { KBarProvider, type Action } from "kbar";
import { useRouter } from "next/navigation";
import { navLinks } from "@/lib/constants";
import { useLang } from "@/components/providers/language-provider";
import { KBarPalette } from "@/components/kbar-palette";

export function KBarWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { t, lang } = useLang();

  const actions = React.useMemo<Action[]>(
    () => [
      ...navLinks.map((link) => ({
        id: link.href,
        name: t(link.key),
        keywords: "navigation",
        shortcut: [],
        perform: () => router.push(link.href)
      })),
      {
        id: "reviews-whatsapp",
        name: lang === "fr" ? "WhatsApp direct" : "WhatsApp مباشر",
        keywords: "whatsapp contact",
        shortcut: ["w"],
        perform: () => window.open("https://wa.me/44141294", "_blank")
      }
    ],
    [lang, router, t]
  );

  return (
    <KBarProvider actions={actions}>
      {children}
      <KBarPalette />
    </KBarProvider>
  );
}

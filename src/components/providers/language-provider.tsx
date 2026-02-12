"use client";

import React from "react";
import { defaultLocale, type Locale, resolveTranslation, type TranslationKey } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Locale;
  setLang: (lang: Locale) => void;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "ash-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Locale>(defaultLocale);

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored) setLangState(stored);
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = React.useCallback((value: Locale) => {
    setLangState(value);
    window.localStorage.setItem(STORAGE_KEY, value);
  }, []);

  const toggleLang = React.useCallback(() => {
    setLangState((prev) => {
      const next = prev === "ar" ? "fr" : "ar";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const t = React.useCallback((key: TranslationKey) => resolveTranslation(lang, key), [lang]);

  const value = React.useMemo(() => ({ lang, setLang, toggleLang, t }), [lang, setLang, toggleLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

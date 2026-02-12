"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/providers/language-provider";

export function LanguageToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <Button variant="outline" size="sm" onClick={toggleLang} aria-label="تبديل اللغة">
      <Languages size={16} />
      {lang === "ar" ? "FR" : "AR"}
    </Button>
  );
}

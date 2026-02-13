"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useLang } from "@/components/providers/language-provider";

export function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" aria-label="تبديل اللغة">
          <Languages size={16} />
          {lang === "ar" ? "AR" : "FR"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border border-white/10 bg-white/10 text-white backdrop-blur"
      >
        <DropdownMenuItem onClick={() => setLang("ar")}>العربية</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("fr")}>Français</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

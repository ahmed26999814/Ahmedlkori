"use client";

import React from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ContentProvider } from "@/components/providers/content-provider";
import { LanguageProvider } from "@/components/providers/language-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ContentProvider>{children}</ContentProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

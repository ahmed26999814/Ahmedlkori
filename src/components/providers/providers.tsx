"use client";

import React from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ContentProvider } from "@/components/providers/content-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ContentProvider>{children}</ContentProvider>
    </ThemeProvider>
  );
}

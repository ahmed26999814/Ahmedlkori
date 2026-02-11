"use client";

import React from "react";
import {
  telegramReviews as baseTelegram,
  whatsappGroups as baseWhatsApp,
  summaries as baseSummaries,
  places as basePlaces,
  type TelegramReview,
  type WhatsAppGroup,
  type SummaryFile,
  type Place
} from "@/data/content";

type ContentState = {
  telegramReviews: TelegramReview[];
  whatsappGroups: WhatsAppGroup[];
  summaries: SummaryFile[];
  places: Place[];
};

type ContentContextValue = ContentState & {
  updateContent: (next: ContentState) => void;
  resetContent: () => void;
};

const baseContent: ContentState = {
  telegramReviews: baseTelegram,
  whatsappGroups: baseWhatsApp,
  summaries: baseSummaries,
  places: basePlaces
};

const STORAGE_KEY = "ash-content";

const ContentContext = React.createContext<ContentContextValue | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = React.useState<ContentState>(baseContent);

  React.useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as ContentState;
      setContent(parsed);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const updateContent = React.useCallback((next: ContentState) => {
    setContent(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  const resetContent = React.useCallback(() => {
    setContent(baseContent);
    window.localStorage.removeItem(STORAGE_KEY);
  }, []);

  const value = React.useMemo(
    () => ({ ...content, updateContent, resetContent }),
    [content, updateContent, resetContent]
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const ctx = React.useContext(ContentContext);
  if (!ctx) {
    throw new Error("useContent must be used within ContentProvider");
  }
  return ctx;
}

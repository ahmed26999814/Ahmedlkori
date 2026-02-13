"use client";

import * as React from "react";
import {
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
  useKBar
} from "kbar";

export function KBarPalette() {
  const { results } = useMatches();
  const { query } = useKBar();

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        query.toggle();
      }
    };
    const onOpen = () => query.toggle();
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, [query]);

  return (
    <KBarPortal>
      <KBarPositioner className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 backdrop-blur">
        <KBarAnimator className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-glass backdrop-blur">
          <div className="border-b border-white/10 px-4 py-3">
            <KBarSearch
              className="w-full bg-transparent text-sm text-white/80 outline-none placeholder:text-white/40"
              placeholder="ابحث عن قسم أو اختصار..."
            />
          </div>
          <KBarResults
            items={results}
            onRender={({ item, active }) =>
              typeof item === "string" ? (
                <div className="px-4 py-2 text-xs text-white/40">{item}</div>
              ) : (
                <div
                  className={`flex cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-sm ${
                    active ? "bg-white/10 text-white" : "text-white/70"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.shortcut?.length ? (
                    <span className="text-[11px] text-white/40">
                      {item.shortcut.join(" + ")}
                    </span>
                  ) : null}
                </div>
              )
            }
          />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
}

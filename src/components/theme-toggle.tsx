"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="تبديل الثيم"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative flex h-11 w-20 items-center rounded-full border border-white/15 bg-white/10 px-1 transition",
        className
      )}
    >
      <motion.span
        className="absolute right-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-900"
        animate={{ x: isDark ? -36 : 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
      >
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </motion.span>
      <span className="mr-auto flex items-center gap-1 text-xs text-white/70">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}

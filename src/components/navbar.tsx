"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";
import React from "react";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLang } from "@/components/providers/language-provider";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const { t } = useLang();

  const openPalette = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-command-palette"));
    }
  };

  return (
    <header className="sticky top-0 z-40">
      <div className="relative border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-xs font-semibold text-white shadow-soft">
              AK
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-accent-400 shadow-glow" />
            </span>
            <span className="relative text-lg font-semibold md:text-xl">
              <span className="absolute -inset-x-2 -inset-y-2 rounded-full bg-accent-500/20 blur-2xl opacity-0 transition group-hover:opacity-100" />
              <span className="relative bg-gradient-to-r from-white via-accent-100 to-sunrise bg-clip-text text-transparent">
                {t("brand_name")}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition ${
                  pathname === link.href
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={openPalette}
              className="hidden md:inline-flex"
            >
              <Search size={16} />
              {t("nav_search")}
            </Button>
            <ThemeToggle />
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setOpen(true)}
              aria-label={t("menu_open")}
            >
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

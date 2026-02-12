"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";
import React from "react";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import { ScrollProgress } from "@/components/scroll-progress";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const openPalette = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-command-palette"));
    }
  };

  return (
    <header className="sticky top-0 z-40">
      <div className="relative border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold text-white">
              مراجعات أحمد
            </span>
            <span className="hidden text-xs text-white/50 md:inline">
              Ahmed Study Hub
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
                {link.label}
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
              بحث سريع
            </Button>
            <ThemeToggle className="hidden md:flex" />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setOpen(true)}
              aria-label="فتح القائمة"
            >
              <Menu size={20} />
            </Button>
          </div>
        </div>
        <ScrollProgress />
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

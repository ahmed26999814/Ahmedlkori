"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";
import { useLang } from "@/components/providers/language-provider";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function MobileMenu({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const { t } = useLang();

  return (
    <Sheet open={open} onOpenChange={(value) => !value && onClose()}>
      <SheetContent
        side="right"
        className="border-white/10 bg-[#0b0c10] text-white"
      >
        <SheetHeader className="text-right">
          <SheetTitle className="text-white">{t("brand_name")}</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`rounded-2xl px-4 py-3 text-sm transition ${
                pathname === link.href
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

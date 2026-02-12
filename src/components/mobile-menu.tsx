"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/providers/language-provider";

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
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-[80%] max-w-sm border-r border-white/10 bg-[#0b0c10] p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 140, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-white">
                Ahmed Study Hub
              </span>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X size={20} />
              </Button>
            </div>
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
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

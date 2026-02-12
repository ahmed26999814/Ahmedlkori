"use client";

import { motion } from "framer-motion";
import { BookOpen, FolderOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";
import { useLang } from "@/components/providers/language-provider";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur md:p-12">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="space-y-6"
      >
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-soft">
            <Image
              src="/Logo.jpg"
              alt="شعار مراجعات أحمد الكوري"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            {t("hero_title")}
          </h1>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto rounded-2xl bg-gradient-to-r from-accent-500 via-sunrise to-rose text-white shadow-[0_12px_30px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 hover:brightness-110"
          >
            <Link href="/reviews">
              {t("hero_cta_reviews")} <BookOpen size={18} />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto rounded-2xl border border-white/20 bg-white/5 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <Link href="/summaries">
              {t("hero_cta_summaries")} <FolderOpen size={18} />
            </Link>
          </Button>
        </div>
      </motion.div>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-400/20 blur-[70px]" />
      <div className="absolute -bottom-16 left-10 h-52 w-52 rounded-full bg-rose/20 blur-[90px]" />
    </section>
  );
}

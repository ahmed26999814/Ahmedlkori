"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, DownloadCloud } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";
import { useLang } from "@/components/providers/language-provider";

export function Hero() {
  const { t } = useLang();
  const router = useRouter();

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur md:p-12">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
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
            variant="glow"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => router.push("/reviews")}
          >
            {t("hero_cta_reviews")} <ArrowUpRight size={18} />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => router.push("/summaries")}
          >
            {t("hero_cta_summaries")} <DownloadCloud size={18} />
          </Button>
        </div>
      </motion.div>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-400/20 blur-[70px]" />
      <div className="absolute -bottom-16 left-10 h-52 w-52 rounded-full bg-rose/20 blur-[90px]" />
    </section>
  );
}

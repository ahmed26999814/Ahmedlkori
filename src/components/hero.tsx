"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, DownloadCloud, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeUp } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur md:p-12">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="space-y-6"
      >
        <Badge tone="accent">???? 2026 ?</Badge>
        <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
          ??????? ???? | Ahmed Study Hub
        </h1>
        <p className="max-w-2xl text-sm text-white/70 md:text-base">
          ???? ??? ????????? ????????? ?????? ??????? ?? ??? ????? ?????
          ??????? ?????? ?????? ????? ?????? ???? ?????? ??????.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="glow" size="lg">
            <Link href="/reviews">
              ???? ?????????? <ArrowUpRight size={18} />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/summaries">
              ???? ???????? <DownloadCloud size={18} />
            </Link>
          </Button>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <Sparkles size={14} />
            ??? ???? + Command Palette (Ctrl + K)
          </div>
          <div>????? ??? ?????? + ????? + ????? + ?????</div>
        </div>
      </motion.div>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-400/20 blur-[70px]" />
      <div className="absolute -bottom-16 left-10 h-52 w-52 rounded-full bg-rose/20 blur-[90px]" />
    </section>
  );
}

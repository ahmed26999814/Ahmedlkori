"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-accent-400 via-rose to-mint"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

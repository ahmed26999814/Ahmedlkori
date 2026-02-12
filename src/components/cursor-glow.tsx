"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React from "react";

export function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 120, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 25 });
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    const update = () => setEnabled(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
    } else {
      media.addListener(update);
    }
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", update);
      } else {
        media.removeListener(update);
      }
    };
  }, []);

  React.useEffect(() => {
    if (!enabled) return;
    const handler = (event: MouseEvent) => {
      x.set(event.clientX - 120);
      y.set(event.clientY - 120);
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, [x, y, enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-0 h-60 w-60 rounded-full bg-accent-500/20 blur-[120px]"
      style={{ translateX: smoothX, translateY: smoothY }}
    />
  );
}

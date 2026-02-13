"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function AnimatedBackground() {
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    let active = true;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (active) setReady(true);
    });
    return () => {
      active = false;
    };
  }, []);

      const options = React.useMemo(
        () => ({
          background: { color: { value: "transparent" } },
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
        color: { value: ["#1f8f39", "#9bbd41"] },
        links: {
          enable: true,
          color: "#1f8f39",
          opacity: 0.25,
          distance: 120
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          outModes: { default: "out" }
        },
        number: { value: 42, density: { enable: true, area: 900 } },
        opacity: { value: 0.4 },
        size: { value: { min: 1, max: 3 } }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: { enable: true }
        },
        modes: {
          repulse: { distance: 90, duration: 0.4 }
        }
      },
      detectRetina: true
    }),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <motion.div
        className="absolute inset-0 bg-hero-gradient bg-[length:200%_200%] opacity-70"
        animate={
          reduceMotion
            ? { backgroundPosition: "0% 50%" }
            : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 22, repeat: Infinity, ease: "linear" }
        }
      />
      {ready && !reduceMotion ? (
        <Particles className="absolute inset-0" options={options as any} />
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(31,143,57,0.12),transparent_55%)]" />
      <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-accent-500/20 blur-[90px]" />
      <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-rose/20 blur-[90px]" />
    </div>
  );
}

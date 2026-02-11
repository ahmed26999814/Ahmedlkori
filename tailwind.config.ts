import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0c10",
        haze: "#0f1116",
        glass: "rgba(255, 255, 255, 0.08)",
        stroke: "rgba(255, 255, 255, 0.18)",
        accent: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        },
        sunrise: "#f59e0b",
        mint: "#10b981",
        rose: "#f43f5e"
      },
      fontFamily: {
        display: ["var(--font-cairo)", "system-ui", "sans-serif"],
        body: ["var(--font-plex)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.25)",
        glass: "0 12px 48px rgba(15, 23, 42, 0.25)",
        soft: "0 10px 30px rgba(15, 23, 42, 0.2)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(1200px circle at 90% 10%, rgba(56, 189, 248, 0.18), transparent 55%), radial-gradient(900px circle at 10% 20%, rgba(129, 140, 248, 0.22), transparent 50%), linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(2, 6, 23, 0.95))",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
        "card-noise": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.2s linear infinite",
        glow: "glow 4s ease-in-out infinite",
        gradient: "gradient 15s ease infinite"
      }
    }
  },
  plugins: []
};

export default config;

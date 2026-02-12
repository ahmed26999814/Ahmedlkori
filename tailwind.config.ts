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
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12"
        },
        sunrise: "#f59e0b",
        mint: "#22c55e",
        rose: "#0ea5e9"
      },
      fontFamily: {
        display: [
          "var(--font-cairo)",
          "Cairo",
          "IBM Plex Sans Arabic",
          "Noto Sans Arabic",
          "Segoe UI",
          "Tahoma",
          "Arial",
          "sans-serif"
        ],
        body: [
          "var(--font-plex)",
          "IBM Plex Sans Arabic",
          "Cairo",
          "Noto Sans Arabic",
          "Segoe UI",
          "Tahoma",
          "Arial",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 0 40px rgba(249,115,22,0.3)",
        glass: "0 12px 48px rgba(15, 23, 42, 0.25)",
        soft: "0 10px 30px rgba(15, 23, 42, 0.2)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(1200px circle at 85% 15%, rgba(249, 115, 22, 0.22), transparent 55%), radial-gradient(900px circle at 12% 25%, rgba(14, 165, 233, 0.16), transparent 50%), linear-gradient(135deg, rgba(10, 12, 20, 0.9), rgba(6, 8, 14, 0.98))",
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

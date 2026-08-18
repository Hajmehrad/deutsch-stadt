import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F5F6F4",
          dark: "#101317",
        },
        ink: {
          DEFAULT: "#171A1E",
          soft: "#4B4F57",
          dark: "#EDEFF2",
        },
        signal: {
          blue: "#1E4B8C",
          "blue-deep": "#123561",
          amber: "#F2B705",
          brick: "#C1391F",
          green: "#2E7D4F",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#171A1E",
          border: "#E3E5E1",
          "border-dark": "#262B31",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        sign: "6px",
        card: "20px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(23,26,30,0.04), 0 12px 32px rgba(23,26,30,0.06)",
        lifted: "0 8px 24px rgba(23,26,30,0.10), 0 24px 56px rgba(23,26,30,0.08)",
        sign: "0 3px 0 rgba(0,0,0,0.18)",
      },
      letterSpacing: {
        signage: "0.06em",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        drift: {
          "0%": { transform: "translateX(-6%)" },
          "100%": { transform: "translateX(106%)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        drift: "drift 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

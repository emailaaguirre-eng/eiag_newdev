import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // EIAG Brand Colors
        primary: {
          DEFAULT: "#00427E", // Dark Blue
          dark: "#003366",
          light: "#0059A3",
        },
        accent: {
          DEFAULT: "#2DBCEE", // Cyan
          light: "#5DD4F5",
          dark: "#1A9BC4",
        },
        success: {
          DEFAULT: "#68BD47", // Green
          light: "#8FD66B",
          dark: "#4A9A2F",
        },
        successAlt: {
          DEFAULT: "#299E6D", // Green Alt
          light: "#3FC18F",
          dark: "#1E7A55",
        },
        neutral: {
          50: "#F5F7FA",
          100: "#E4E7EB",
          200: "#CBD2D9",
          300: "#9AA5B1",
          400: "#7B8794",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
        display: ["var(--font-lato-black)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-1": ["4.5rem", { lineHeight: "1.1", fontWeight: "900" }],
        "display-2": ["3.5rem", { lineHeight: "1.1", fontWeight: "900" }],
        "display-3": ["2.5rem", { lineHeight: "1.2", fontWeight: "900" }],
      },
      spacing: {
        "section": "5rem",
        "section-lg": "7.5rem",
      },
      boxShadow: {
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;


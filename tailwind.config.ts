import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./lib/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Airbnb-inspired palette adapted for a corporate-events brand
        brand: {
          DEFAULT: "#0F4C5C", // deep teal — calm, considered, premium
          50: "#EAF3F5",
          100: "#CFE0E4",
          500: "#0F4C5C",
          600: "#0B3D4A",
          700: "#082E37",
        },
        accent: {
          DEFAULT: "#FF385C", // Airbnb rausch — used very sparingly
          soft: "#E61E4D",
        },
        ink: {
          DEFAULT: "#222222",
          muted: "#717171",
          light: "#B0B0B0",
        },
        cream: "#FFF8F1",
        line: "#EBEBEB",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      fontSize: {
        // Airbnb-like scale
        "display-xl": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        card: "0 6px 16px rgba(0,0,0,0.06)",
        cardHover: "0 12px 28px rgba(0,0,0,0.12)",
        nav: "0 1px 0 rgba(0,0,0,0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        page: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;

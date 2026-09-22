/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      colors: {
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 10px 30px -18px rgba(15,23,42,0.25)",
        card: "0 1px 2px rgba(15,23,42,0.04), 0 18px 45px -24px rgba(15,23,42,0.30)",
        lift: "0 2px 6px rgba(15,23,42,0.05), 0 34px 70px -28px rgba(15,23,42,0.35)",
        glow: "0 22px 60px -26px rgba(8,145,178,0.75)",
        "inner-top": "inset 0 1px 0 0 rgba(255,255,255,0.08)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.045) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-22px,0) scale(1.04)" },
        },
        "float-slower": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1.03)" },
          "50%": { transform: "translate3d(18px,16px,0) scale(0.97)" },
        },
        marquee: {
          from: { transform: "translate3d(0,0,0)" },
          to: { transform: "translate3d(-50%,0,0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.35)", opacity: "0" },
          "100%": { transform: "scale(1.35)", opacity: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translate3d(0,14px,0)" },
          to: { opacity: "1", transform: "translate3d(0,0,0)" },
        },
      },
      animation: {
        "float-slow": "float-slow 13s ease-in-out infinite",
        "float-slower": "float-slower 17s ease-in-out infinite",
        marquee: "marquee 34s linear infinite",
        shimmer: "shimmer 2.4s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.6s cubic-bezier(0.24,0.6,0.35,1) infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

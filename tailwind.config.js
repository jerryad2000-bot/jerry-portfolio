/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#735c00",
        "primary-container": "#d4af37",
        "on-primary": "#ffffff",
        surface: "#f9f9f9",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f3f3",
        "surface-container-high": "#e8e8e8",
        "surface-container-highest": "#e2e2e2",
        "on-surface": "#1a1c1c",
        secondary: "#5f5e5e",
        "outline-variant": "#d0c5af",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "monospace",
        ],
      },
      boxShadow: {
        ambient: "0 12px 40px rgba(26, 28, 28, 0.06)",
        glow: "0 0 40px rgba(212, 175, 55, 0.15)",
      },
    },
  },
  plugins: [],
};

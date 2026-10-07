import type { Config } from "tailwindcss";

/**
 * Loaded explicitly from `src/styles/globals.css` via `@config`, which is how
 * Tailwind v4 picks up a JS/TS config file.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          orange: "#F7941E",
          "orange-deep": "#E8750A",
          gold: "#FDB913",
          charcoal: "#3D3D3D",
          "charcoal-deep": "#262626",
        },
      },
      spacing: {
        '14': '3.5rem', // 56px for intermediate tablet size
      },
    },
  },
} satisfies Config;

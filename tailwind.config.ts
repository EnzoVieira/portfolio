import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "translate-header":
          "translate-header 1.25s var(--primary-curve) .2s forwards",
      },

      keyframes: {
        "translate-header": {
          "0%": { transform: "translate3d(0, -100%, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

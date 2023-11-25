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
          "translate-header 1.25s var(--primary-curve) .8s forwards",
        "reveal-image": "reveal-image 2.25s var(--primary-curve) .8s forwards",
      },

      keyframes: {
        "translate-header": {
          "0%": { transform: "translate3d(0, -100%, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },

        "reveal-image": {
          "0%": {
            "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            transform: "scale3d(1.3,1.3,1.3)",
            "transform-origin": "25% 0",
          },
          "100%": { "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

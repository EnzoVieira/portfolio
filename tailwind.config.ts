import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "300px",
      },

      animation: {
        "translate-header":
          "translate-header 1.25s var(--primary-curve) .8s forwards",
        "reveal-image": "reveal-image 2.25s var(--primary-curve) .8s forwards",
        "divider-scale": "divider-scale .8s var(--primary-curve) .5s forwards",
        "fade-in": "fade-in .8s var(--primary-curve) .8s forwards",
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

        "divider-scale": {
          "0%": { transform: "scale3d(0, 1, 1)" },
          "100%": { transform: "scale3d(1,1,1)" },
        },

        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

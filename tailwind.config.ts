import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        yellow: "#FFC559",
        gray: "#777777",
      },
      fontFamily: {
        cofo: ["cofo-sans-mono", "monospace"],
        geminis: ["bd-geminis", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

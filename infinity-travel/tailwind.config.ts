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
        orange: "#ffcc16",
        purple: "#7a4094",
        blue: "#21b0b7",
        darkPurple: "#210d2f",
      },
      fontSize: {
        32: "2rem",
        26: "1.625rem",
        24: "1.5rem",
        20: "1.25rem",
        18: "1.125rem",
        16: "1rem",
        11: "0.688rem",
      },
    },
  },
  plugins: [],
};
export default config;

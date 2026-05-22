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
        bg: "#050816",
        sky: "#0ea5e9",
        violet: "#9333ea",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-nexvora": "linear-gradient(135deg, #0ea5e9, #9333ea)",
      },
    },
  },
  plugins: [],
};
export default config;

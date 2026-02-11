import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        guard: {
          bg: "#0a1428",
          text: "#e0e0e0",
          accent: "#00d4ff",
          warning: "#ff6b6b",
        },
      },
      fontFamily: {
        mono: ["'Courier New'", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

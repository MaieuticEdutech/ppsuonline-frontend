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
        orange: {
          DEFAULT: "#F15A29",
          dark: "#d44a1c",
        },
        red: {
          brand: "#B71C1C",
          "brand-light": "#D32F2F",
        },
        dark: {
          DEFAULT: "#111827",
          2: "#1f2937",
          3: "#0f172a",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        "card-lg": "20px",
      },
      boxShadow: {
        sm: "0 2px 8px rgba(0,0,0,.06)",
        md: "0 8px 24px rgba(0,0,0,.10)",
        lg: "0 20px 60px rgba(0,0,0,.15)",
        orange: "0 8px 24px rgba(241,90,41,.25)",
      },
    },
  },
  plugins: [],
};

export default config;

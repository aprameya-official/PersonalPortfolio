import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1024px",
        "2xl": "1024px",
      },
    },
    fontFamily: {
      primary: "var(--font-fira-code)",
    },
    extend: {
      screens: {
        xs: "500px",
      },
      colors: {
        primary: {
          DEFAULT: "#f7f8fa",
          dark: "#102a27",
        },
        secondary: {
          DEFAULT: "#e3e6f3",
          dark: "#1a3a36",
        },
        gray: {
          DEFAULT: "#5A6273",
          dark: "#e6e6e6",
        },
        accent: {
          DEFAULT: "#FFD600",
          hover: "#FFB300",
          gradient1: "#FFD600",
          gradient2: "#FFB300",
          dark: "#FFD600",
        },
      },
    },
  },
  plugins: [],
};
export default config;

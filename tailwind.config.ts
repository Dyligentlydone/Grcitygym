import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#000000",
          800: "#0a0a0a",
          700: "#111111",
          600: "#1a1a1a",
          500: "#262626",
        },
        bone: "#f5f3ef",
        accent: {
          DEFAULT: "#e11d2e", // city red
          hover: "#ff2a3c",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;

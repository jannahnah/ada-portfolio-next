import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2A43",
          50: "#EEF2F6",
          100: "#D6E0EA",
          600: "#1C3F5C",
          700: "#15324A",
          800: "#0F2A43",
          900: "#0A1E31",
        },
        emerald: {
          DEFAULT: "#0E8A6B",
          50: "#E7F5F0",
          400: "#1FB089",
          500: "#0E8A6B",
          600: "#0B6E55",
        },
        beige: {
          DEFAULT: "#F7F4EE",
          100: "#FBF9F5",
          200: "#EFEAE0",
        },
        mist: {
          DEFAULT: "#F4F6F8",
          200: "#E7ECF1",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(15, 42, 67, 0.08), 0 8px 24px -6px rgba(15, 42, 67, 0.10)",
        lift: "0 8px 30px -6px rgba(15, 42, 67, 0.14), 0 18px 50px -12px rgba(15, 42, 67, 0.18)",
        glow: "0 0 0 1px rgba(14, 138, 107, 0.18), 0 12px 40px -10px rgba(14, 138, 107, 0.28)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

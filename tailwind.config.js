/** @type {import('tailwindcss').Config} */
import { keyframes, m } from "framer-motion";
import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin";
import { transform } from "typescript";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          cyberBlack: "#0A0F1D",
          neonCyan: "#0FF0FC",
          neonPurple: "#D400FF",
          neonGreen: "#00FF00",
          neonBlue: "#007BFF",
          neonRed: "#FF3131",
          neonPink: "#FF10F0",
          neonOrange: "#FF8800",
          neonYellow: "#F9FF00",
          neonTeal: "#00FFD1",
          neonMagenta: "#FF00A6",
          neonViolet: "#9400FF",
          neonWhite: "#FFFFFF",
          neonGold: "#FFD700",
          neonDeepBlue: "#003BFF",
          terminalBlack: "#080F0F",
          terminalHeader: "#101617",
          footerBlack: "#0a0f1df2",
        },
      },
      boxShadow: {
          "tv": "inset 0 0 20px rgba(0, 255, 255, 0.3), 0 0 10px rgba(0, 255, 255, 0.4)",
      },
      textShadow: {
        warning: "0 0 10px #FF0000",
      },
      fontFamily: {
        mono: ["var(--font-mono)", ...fontFamily.sans],
        orbit: "var(--font-orbit)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      animation: {
        starEffect: "starEffect 10s infinite ease-in-out forwards",
        tvGlitch: "vhsStyle 1.5s infinite steps(5), signalLoss 10s infinite",
      },
      keyframes: {
        starEffect: {
          "0%": {opacity: "0.1"},
          "50%": {opacity: "0"},
          "100%": {opacity: "0.1"},
        },
        vhsStyle: {
          "0%": { transform: "transform: translate(0, 0)", opacity: "1" },
          "25%": { transform: "transform: translate(-1px, 1px)", opacity: "0.9" },
          "50%": { transform: "transform: translate(1px, -1px)", opacity: "1" },
          "75%": { transform: "transform: translate(-0.5px, 0.5px)", opacity: "0.85" },
          "100%": { transform: "transform: translate(0, 0)", opacity: "1" },
        },
        signalLoss: {
          "0%, 95%": { opacity: "1", filter: "none" },
          "96%": { opacity: "0.3", filter: "blur(2px) contrast(1.5)", transform: "scaleY(1.1)" },
          "97%": { opacity: "0.6", filter: "blur(1px) contrast(1.2)", transform: "scaleY(0.9)" },
          "98%": { opacity: "0.2", filter: "blur(3px) contrast(1.8)", transform: "scaleX(1.1)" },
          "99%": { opacity: "0.8", filter: "blur(0.5px)" },
          "100%": { opacity: "1", filter: "none" },
        },

      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
      });
      addUtilities({
        ".text-shadow": {
          "text-shadow": "0 0 5px rgba(0, 255, 255, 0.6)",
        },
      });
    }),
  ],
}
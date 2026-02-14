import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F7F2", // Warmer Cream for a cleaner look
        foreground: "#2A2A2A", // Soft Charcoal
        primary: {
          DEFAULT: "#2D5A47", // Deep Forest Green - Professional & Organic
          foreground: "#F9F7F2",
        },
        secondary: {
          DEFAULT: "#D4C4A8", // Sand/Beige - Elegant & Neutral
          foreground: "#2D5A47",
        },
        accent: {
          DEFAULT: "#C8A165", // Muted Gold - For "floating" aesthetic elements
          foreground: "#2A2A2A",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#2A2A2A",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair-display)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "24px",
        md: "16px",
        sm: "8px",
      },
    },
  },
  plugins: [],
} satisfies Config;

import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        navy: {
          light: "hsl(230 33% 82%)",
          DEFAULT: "hsl(240, 33%, 28%)",
          dark: "hsl(240, 33%, 26%)",
          darker: "hsl(240, 33%, 16%)",
        },
        charcoal: {
          800: "hsl(240 33% 20%)",
          900: "hsl(240, 33%, 12%)",
          950: "hsl(240, 33%, 8%)",
        },
        indigo: {
          1000: "hsl(240, 23%, 36%)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

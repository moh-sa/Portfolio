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
          300: "hsl(230, 33%, 82%)",
          400: "hsl(240, 33%, 36%)",
          500: "hsl(240, 33%, 28%)",
          600: "hsl(240, 33%, 26%)",
          700: "hsl(240, 33%, 20%)",
          800: "hsl(240, 33%, 16%)",
          900: "hsl(240, 33%, 12%)",
          950: "hsl(240, 33%, 08%)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

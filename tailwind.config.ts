import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        meslo: ["var(--font-meslo)"],
      },
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      spotify: "#1DB954",
      primary: {
        50: "#00564c",
        100: "#004c42",
        200: "#006056",
        300: "#007c6a",
        400: "#00987e",
        500: "#00a68b",
        600: "#00b497",
        700: "#00c2a5",
        800: "#00d0b3",
        900: "#00dfe1",
      },
      secondary: "#0C63E7",
      info: "#618cb0",
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: {
        50: "#FAFAFC",
        100: "#E9E9EC",
        200: "#C6C8CD",
        300: "#ACAEB6",
        400: "#92959F",
        500: "#777C87",
        600: "#5D6370",
        700: "#434959",
        800: "#293041",
        900: "#0f172a",
      },
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    }),
  },
  plugins: [],
} satisfies Config;

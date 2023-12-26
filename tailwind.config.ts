import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // md: '1rem',
        xs: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        'pattern-l': "url('/img/bg-left.png')", // bg-[url('/img/hero-pattern.svg')]
        'pattern-b': "url('/img/bg-bottom.png')",
        'pattern-bl': "url('/img/bottom-left.png')",
      },
      colors: {
        default: "#98CEFA",
        primary: "#ffcc00",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
}
export default config

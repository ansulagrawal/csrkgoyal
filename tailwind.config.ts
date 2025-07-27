import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "oklch(0.97 0.013 238.72)",
          100: "oklch(0.929 0.026 240.01)",
          200: "oklch(0.858 0.051 241.28)",
          300: "oklch(0.764 0.084 242.33)",
          400: "oklch(0.651 0.108 243.83)",
          500: "oklch(0.549 0.130 244.75)",
          600: "oklch(0.451 0.130 245.75)",
          700: "oklch(0.369 0.108 247.89)",
          800: "oklch(0.298 0.086 251.59)",
          900: "oklch(0.258 0.067 256.85)",
          950: "oklch(0.171 0.045 260.75)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        slate: {
          50: "oklch(0.984 0.003 247.858)",
          100: "oklch(0.961 0.013 252.096)",
          200: "oklch(0.918 0.027 255.331)",
          300: "oklch(0.859 0.040 254.139)",
          400: "oklch(0.710 0.044 256.788)",
          500: "oklch(0.556 0.046 257.417)",
          600: "oklch(0.431 0.046 257.793)",
          700: "oklch(0.347 0.043 258.338)",
          800: "oklch(0.267 0.040 260.194)",
          900: "oklch(0.156 0.032 258.338)",
          950: "oklch(0.078 0.021 264.722)",
        },
        amber: {
          50: "oklch(0.985 0.024 102.212)",
          100: "oklch(0.957 0.058 99.567)",
          200: "oklch(0.910 0.116 96.018)",
          300: "oklch(0.852 0.182 91.934)",
          400: "oklch(0.808 0.239 87.896)",
          500: "oklch(0.754 0.267 83.333)",
          600: "oklch(0.682 0.267 78.148)",
          700: "oklch(0.567 0.216 75.849)",
          800: "oklch(0.469 0.171 75.849)",
          900: "oklch(0.395 0.139 78.148)",
          950: "oklch(0.223 0.078 83.333)",
        },
        persianBlue: {
          50: "oklch(0.9027 0.0432 300.2797)",
          100: "oklch(0.8048 0.0853 297.4614)",
          200: "oklch(0.7059 0.1290 294.7699)",
          300: "oklch(0.6095 0.1697 289.9523)",
          400: "oklch(0.5129 0.2063 281.7604)",
          500: "oklch(0.4153 0.2440 265.6298)",
          600: "oklch(0.3695 0.2031 269.2430)",
          700: "oklch(0.3229 0.1626 273.3124)",
          800: "oklch(0.2770 0.1229 278.3789)",
          900: "oklch(0.2309 0.0818 285.1394)",
          950: "oklch(0.1800 0.0482 296.6516)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

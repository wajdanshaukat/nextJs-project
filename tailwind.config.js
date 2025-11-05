/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-200": "#7dd3fc",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      blur: {
        "3xl": "40px",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        almarai: ["var(--font-almarai)", "sans-serif"],
      },
      screens: {
        xs: "425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1620px",
      },
    },
  },
  plugins: [],
};

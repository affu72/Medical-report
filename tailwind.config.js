/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1600px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1025px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "820px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "400px" },
    },

    extend: {},
  },
  plugins: [],
};

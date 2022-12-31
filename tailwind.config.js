/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        profilePicture: "url('/assets/pfp1.png')",
      },
      colors: {
        "primary-white": "#D4D4D4",
        "secondary-white": "#BCBCBC",
        "primary-gray": "#545353",
        "primary-gray-highlighted": "#777777",
        "secondary-gray": "",
        divider: "#2D2A2A",
      },
      fontSize: {
        "nav-primary-heading": "1.68rem",
        "nav-primary-list": "1.1rem",
        "hero-primary-para": "1.05rem",
      },
      letterSpacing: {
        wide: "0.02em",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};

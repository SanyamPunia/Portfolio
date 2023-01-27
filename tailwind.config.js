/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        profilePicture: "url('/assets/pfp.png')",
        project_skillup: "url('/assets/project-preview/skillup-preview.png')",
        project_gymlanding:
          "url('/assets/project-preview/gymlanding-preview.png')",
        project_suparadio:
          "url('/assets/project-preview/suparadio-preview.png')",
        project_nextblog: "url('/assets/project-preview/nextblog-preview.png')",
      },
      colors: {
        "primary-white": "#D4D4D4",
        "secondary-white": "#BCBCBC",
        "primary-gray": "#545353",
        "primary-gray-highlighted": "#777777",
        "secondary-gray": "#6A6767",
        "primary-black": "#111111",
        "secondary-black": "#131313",
        divider: "#2D2A2A",
        "primary-card-border": "#222222",
        "hover-card-border": "#303030",
      },
      fontSize: {
        "nav-primary-heading": "1.68rem",
        "nav-primary-list": "1.1rem",
        "hero-primary-para": "1.05rem",
      },
      letterSpacing: {
        wide: "0.02em",
      },
    },
  },
  plugins: [],
};

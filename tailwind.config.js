module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      'bgBlack': '#272727',
      'mainPurple': '#A96CF8',
      'divider': '#3B3B3B',
      'mainGreen': '#4ECCA3',
      'mainWhite': '#EEEEEE',
      'lightBg': '#F5F5DC',
      'cardBg': '#303030',
      'hoverGray': '#9A9A9A',
      'gradientBlue': '#4E91CC',
      'lightCardHover': '#E6E6E6',
      'lightLinkHover': '#D9D9D9',
      'gray': 'rgb(17 24 39)',
      'blogDescriptionGray': '#ABABAB',
      'blogDate': '#727272',
      'blogViews': '#8E8E8E',
    },
    fontFamily: {
      'mulish': 'Mulish',
      'source_code_pro': 'Source Code Pro',
    },
    fontWeight: {
      bold: '700',
      extrabold: '900',
      extrablack: '1000',
    },
    borderWidth: {
      '1': '1px'
    },
    lineHeight: {
      'extra-loose': '2.5',
      '12': '3rem',
      '14': '3.4rem',
    },
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1179px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
    }
  },
  plugins: [],
}
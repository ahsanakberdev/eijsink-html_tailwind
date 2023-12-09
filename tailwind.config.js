/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Maven': ['Maven Pro'],
      'Lato': ['Lato'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '0rem',
      },
    },
    extend: {
      colors: {
        'secondary' : "#EB8903",
        'secondary2' : '#F08A00',
        'dark' : '#262626',
        'grey' : '#A5A5A5',
        'green' : '#72CC72',
        'light' : '#F5F5F5',
        'light2' : '#C4C4C4',
        'light3' : '#FCFCFC',
        'lightBorder' : '#707070',
      },
      backgroundImage: {
        'banner': "url('../src/img/banner.png')",
        'banner-layer': "url('../src/img/sunrise-shade.svg')",
        'other': "url('../src/img/others2.png')",
      }
    },
  },
  plugins: [],
}


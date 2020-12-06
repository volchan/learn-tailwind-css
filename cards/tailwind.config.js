module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          '100': '#f5fafa',
          '200': '#d0e7e7',
          '300': '#aed6d6',
          '400': '#88c3c3',
          '500': '#66b2b2',
          '600': '#4b9595',
          '700': '#376d6d',
          '800': '#244747',
          '900': '#112222',
        },
      },
      spacing: {
        '2/3': '66.666667%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

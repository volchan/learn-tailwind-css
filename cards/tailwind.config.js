module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          '100': '#f0ffff',
          '200': '#94ffff',
          '300': '#38ffff',
          '400': '#00dbdb',
          '500': '#008080',
          '600': '#006b6b',
          '700': '#005c5c',
          '800': '#004747',
          '900': '#003333',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

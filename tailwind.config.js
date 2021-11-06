module.exports = {
  purge: [
    './src/**/*.tsx',
    './index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'gilroy-light': ['Gilroy-Light', 'sans-serif'],
        'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif']
      },
      colors: {
        primary: '#205AE3',
        secondary: '#457B9D',
        tertiary: '#A8DADC',
        warning: '#E63946'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

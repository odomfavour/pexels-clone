module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       colors: {
      primary: "#232a34",
      white: "#ffffff",
      lightGrey: "rgba(255,255,255,.95);",
      myTransparent: "transparent",
      lightGreen: "#05a081",
      lightPurple: "#0064f9",
    },
    maxHeight: {
       '500': '500px',
       '650': '650px',
       '550': '550px',
      },
      maxWidth: {
       '650': '650px',
       '90': '90%',
      },
      boxShadow: {
        'small': '0 1px 3px 0 rgb(0 0 0 / 8%);',
      },
      backgroundImage: theme => ({
         'hero-bg': "url('/hero-bg.jpeg')",
        })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        "9/10": '110vh',
       },
      colors: {
        cogAi: {
          "bg":"#12235B",
          "bg-dark":"#0C184B",
          "blue":"#1D57D2",
          "line-red":"#DC4035",
          "line-gray":"#547CD3",
          "gray":"#828282",
          "red":"#EB5757",
        },
        custom:{
          "0":"#FF8300",
          "1":"#00FF00",
          "2":"#FF0000"
        }
      },
      gridTemplateColumns: {
        '2/1': '2fr 1fr',
        '1/4': '1fr 4fr'

      },
      gridTemplateRows: {
        '1/4': '1fr 7fr',
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

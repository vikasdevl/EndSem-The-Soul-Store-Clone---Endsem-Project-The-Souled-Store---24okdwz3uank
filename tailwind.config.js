/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '410': '410px',
        '546':'546px',
        '263':'263px'
      },
      height: {
        '355': '355px',
        '473':'473px',
        '485':'493px'
        
      },
      colors: {
        customColor: "#117A7A",
        subbtncol: "#ED2D2F",
        fontclr:"#58595B"
      },
      // gap:{
      //   '1px':'1px'
      // }
    },
  },
  plugins: [],
};

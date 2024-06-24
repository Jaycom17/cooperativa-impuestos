/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors:{
        primary:'#18273E',
        background:'#1f324e',
        'unicoop':{
          DEFAULT: "#f9f9f9",
          'blue': '#4da9c5',
          'green': '#8db844',
          'white': '#fff',
          'yellow': '#ccd443',
          'black': '#18273e',
          'deep-blue': '#385075'
        },
        'buttons':{
          DEFAULT:'#fff',
          'warning-yellow': '#ffd518',
          'closing-red': '#FF4E4E',
          'list-blue': '#628dce',
          'login': '#404142'
        },
      },
      keyframes:{
        'spin-once': {to: {transform: 'rotate(90deg)'}}
      },
      animation:{
        'spin-once': 'spin-once 0.2s linear'
      },
    },
  },
  plugins: [],
}


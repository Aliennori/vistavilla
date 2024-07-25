/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./public/index.html"],
  theme: {
    extend: {
      colors : {
        primary: 'rgb(30,30,30)',
        secondary: '#009ECE',
        accent: {
          one: '#ffffff',
          two: 'rgb(0,158,206)',
          three: '#f8f9fa',
          four: 'rgb(250,250,250)',

        }        
    },
    backgroundImage: {
      slide1:"url('images/prop1.jfif')",
      slide2:"url('images/prop2.jfif')",
      contbg: "url('images/contact-bg.jpg')",
    }
  }
},
  plugins: [],
}
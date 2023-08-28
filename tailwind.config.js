/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        
      },
      theme:{
        BoxShadow:{aboutLogoShadowBlue:
        "0px 0px 14px 7px rgba(55, 124, 236, .5), 0 2px 4px -1px rgba(35, 63, 146, 0.8)",
        }
      },
      fontFamily:{
        'Mulish':'Mulish',
        'Rubik':'Rubik',
        'Poppins':'Poppins'
      }
    },
  },
  plugins: [],
}


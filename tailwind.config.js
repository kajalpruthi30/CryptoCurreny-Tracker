/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      boxShadow: {
        'button': '5px 5px 10px rgba(58, 128, 233, 0.6)',
      },

      colors: {
        white: '#fff',
        black: '#111',
        blue: '#3a80e9',
        grey: '#888',
        darkgrey: '#1b1b1b',
        green: '#61c96f',
        red: '#f94141',
      },
      spacing: {
        // Define your spacing values in rem units
        '0': '0',
        '0.8': '0.8rem',
        '0.5': '0.5rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '2.5': '2.5rem',
        '3': '3rem',
        '3.5': '3.5rem',
        '4': '4rem',
        '4.5': '4.5rem',
        '5': '5rem',
        '5.5': '5.5rem',
        '6': '6rem',
        '6.5': '6.5rem',
        '7': '7rem',
        '7.5': '7.5rem',
        '8': '8rem',
        '8.5': '8.5rem',
        '9': '9rem',
        '9.5': '9.5rem',
        '10': '10rem',
        '10.5': '10.5rem',
        '11': '11rem'
      },
      screens: { 
        'sm': {'min': '200px', 'max': '660px'},     
        'md': {'min': '661px', 'max': '836px'},    
        'lg': {'min': '836px', 'max': '1251px'},   
        'xl': {'min': '1251px', 'max': '1535px'},   
        '2xl': {'min': '1535px'},                  
      },
    },
  },

  plugins: [],
}


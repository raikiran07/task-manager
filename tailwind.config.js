/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        customShadow:'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
      },
      backgroundColor:{
        inputBg:'#F8F9FA',      
      },
      fontSize:{
        xxs:"0.6rem"
      },
      keyframes:{
        fadeIn: {
          from: {
            opacity: "0",
            
            
          },
          to: {
            
            opacity: "1",
          },
          },
          borderPulse: {
            '0%, 100%': { borderColor: 'transparent' },
            '50%': { borderColor: '#4F46E5' }, // Purple border color
          },
          borderMove: {
            '0%': { borderColor: 'orange' },
            '25%': { borderColor: 'purple' },
            '50%': { borderColor: 'blue' },
            '75%': { borderColor: 'green' },
            '100%': { borderColor: 'red' },
          },
          borderMoveWidth: {
            '0%': { borderWidth: '2px' },
            '50%': { borderWidth: '4px' },
            '100%': { borderWidth: '2px' },
          },
          
      },
      animation:{
        fadeIn: "fadeIn 1s ease",
        borderPulse: 'borderPulse 2s infinite',
        borderMove: 'borderMove 4s linear infinite',
        borderMoveWidth: 'borderMoveWidth 4s linear infinite',
      }
    },
  },
  plugins: [],
}
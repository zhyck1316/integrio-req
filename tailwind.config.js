/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      screens:{
        'xs':'320'
      },
      animation: {
        "loop-scroll":"loop-scroll 50s linear infinite",
      },
      keyframes:{
        "loop-scroll":{
          from: { transform:"translateX(0)"},
          to: { transform:"translateX(-100%)"},
        }

      },
      colors: {
        'integrio': '#2C2832',
        'integrio-orange':'#FF5621',
        'integrio-orange-50':'#ffeee9',
        'integrio-orange-100':'#ffddd3',
        'integrio-orange-200':'#ffccbc',
        'integrio-orange-300':'#ffab90',
        'integrio-orange-400':'#ff9a7a',
        'integrio-orange-400':'#ff8964',
        'integrio-orange-400':'#ff784d',
        'integrio-orange-400':'#ff6737',
        
      },
      fontsize:{
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '4.052rem',
        '7xl': ['5.052rem', '32px'],
      }
    },
  },
  plugins: [],
}


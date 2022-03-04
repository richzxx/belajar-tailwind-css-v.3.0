module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      darkMode: 'class',
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        'inter': ['Inter'],
        'Alegreya': ['Alegreya Sans SC']
      },
      colors: {
        'richzxx': '#c0ffee',
        'richz_2': '#bada55'
      },
      // Bikin Animasi Sendiri
      keyframes: {
        goyang: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        }
      },
      animation: {
        'spin-slow': 'bounce 1s ease-in-out infinite',
        'goyang': 'goyang 1s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}
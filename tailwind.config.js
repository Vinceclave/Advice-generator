/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
	'./*.html',
  ],
  theme: {
    extend: {
      colors: {
        'light-cyan': '#cee3e9',
        'neon-green': '#52ffa8',
        'grayish-blue': '#4e5d73',
        'dark-grayish-blue': 	'#323a49;',
        'dark-blue': '#1f2632',
      },
      fontFamily: {
        'manrope': '\'Manrope\', sans-serif',
      },
      screens: {
        'hover-hover': {'raw': '(hover: hover)'},
    },
    boxShadow: {
      'neon-shadow': '0px 0px 10px 7px rgba(82,255,168,0.98)',
    },
  },
  plugins: ['@tailwindcss/ui'],
}
}
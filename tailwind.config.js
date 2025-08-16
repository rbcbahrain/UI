module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        solarized: {
          lightbg: '#fdf6e3',
          lighttext: '#657b83',
          darkbg: '#073642',
          darktext: '#eee8d5',
        },
        yellow: {
          100: '#fef3c7',
          200: '#fde68a',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          200: '#fbbf24',
        }
      },
    },
  },
  plugins: [],
};

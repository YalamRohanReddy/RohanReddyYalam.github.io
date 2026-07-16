module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#0EA5E9',
        accent: '#06B6D4',
        surface: 'rgba(15, 23, 42, 0.72)',
        bg: '#060b1e',
        panel: 'rgba(15, 23, 42, 0.88)',
      },
      boxShadow: {
        glass: '0 25px 80px rgba(15, 23, 42, 0.25)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top left, rgba(14, 165, 233, 0.24), transparent 30%), radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.18), transparent 28%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

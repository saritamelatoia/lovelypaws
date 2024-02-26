// Cambia la importación de 'tailwindcss' a 'tailwindcss/postcss7-compat'
const tailwindcss = require('tailwindcss/postcss7-compat');

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

/** @type {import('tailwindcss/types').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/app.vue',
    './src/assets/**/*.scss',
    './src/assets/**/*.css',
    './src/App.vue',
    './app.vue',
    'node_modules/@vucod/ui/src/components/**/*.{js,vue,ts}',
  ],
  safelist: [
  ],
  theme: {
    colors: {
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}

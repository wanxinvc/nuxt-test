/**
 * config override for tailwindcss, see:
 *  - https://tailwindcss.nuxtjs.org/tailwind/config
 *  - https://tailwindcss.com/docs/configuration
 */
module.exports = {
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
  },
  variants: {
    extend: {}
  },
  plugins: []
}

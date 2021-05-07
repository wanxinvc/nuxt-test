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
    fontSize: {
      // [font-size, line-height]
      xs: ['12px', '18px'],
      sm: ['13px', '22px'],
      base: ['15px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '30px'],
      '2xl': ['28px', '36px']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

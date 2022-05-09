const postcssPresetEnv = require('postcss-preset-env')
const postcssJitProps = require('postcss-jit-props')
const OpenProps = require('open-props')

module.exports = {
  plugins: [
    postcssJitProps(OpenProps),
    postcssPresetEnv({
      stage: 0,
      autoprefixer: false,
      features: {
        'logical-properties-and-values': false, 
        'prefers-color-scheme-query': false, 
        'gap-properties': false,
        'custom-properties': false,
        'place-properties': false,
        'not-pseudo-class': false,
        'focus-visible-pseudo-class': false,
        'focus-within-pseudo-class': false,
        'color-functional-notation': false
      }
    }),
  ]
}

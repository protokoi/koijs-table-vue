// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'ts/no-empty-object-type': 'off',
    'vue/custom-event-name-casing': 'off',
  },
  vue: true,
  typescript: true,
})

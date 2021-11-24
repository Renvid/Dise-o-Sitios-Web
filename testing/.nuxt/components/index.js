export { default as AppSearchInput } from '../..\\components\\global\\AppSearchInput.vue'
export { default as PrevNextBatallas } from '../..\\components\\global\\PrevNextBatallas.vue'
export { default as PrevNextCasas } from '../..\\components\\global\\PrevNextCasas.vue'
export { default as PrevNextPersonajes } from '../..\\components\\global\\PrevNextPersonajes.vue'
export { default as PrevNextRegiones } from '../..\\components\\global\\PrevNextRegiones.vue'
export { default as PrevNextReyes } from '../..\\components\\global\\PrevNextReyes.vue'
export { default as Header } from '../..\\components\\Header.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

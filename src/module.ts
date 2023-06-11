import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@josango/nuxt3-build-banner',
    configKey: 'nuxt3-build-banner',
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.css.push(resolve('./runtime/assets/css/typography.css'))
        
    addComponent({
      name: 'BuildInfoBanner', // name of the component to be used in vue templates
      filePath: resolve('runtime/components/BuildInfoBanner.vue')
    })
  }
})

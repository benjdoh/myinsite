import { transformerDirectives, transformerVariantGroup, transformerCompileClass } from 'unocss'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@ant-design-vue/nuxt', '@unocss/nuxt'],
  css: ['ant-design-vue/dist/reset.css'],
  unocss: {
    transformers: [transformerDirectives(), transformerVariantGroup(), transformerCompileClass()],
  },
})

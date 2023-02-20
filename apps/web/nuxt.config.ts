// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles/main.pcss'],
  components: {
    dirs: ['~/components', '../../packages/ui/components'],
  },
  modules: ['@nuxtjs/tailwindcss','@nuxt/devtools','@vue-macros/nuxt'],
  tailwindcss: {
    configPath: '~/packages/ui/tailwind.config.js',
  }
})

const authExcludeRoutes: string[] = ['/signup', '/debug']

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  runtimeConfig: {},
  compatibilityDate: '2024-11-01',
  nitro: {
    openAPI: {
      meta: {
        title: 'Test API',
        description: 'Test API description',
        version: '1.0.0',
      },
    },
    experimental: {
      openAPI: true,
    },
  },
  eslint: {
    config: {
      stylistic: true, // <---
    },
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: authExcludeRoutes,
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vue-instantsearch', 'algoliasearch'],
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
  prefix: '/api',
  admin: '/admin',
  version: 'v5',
  cookie: {},
  cookieName: 'strapi_jwt'
  },
  devtools: { enabled: true },
  head: {
  link: [
    {
      rel: 'stylesheet',
      href: 'https://vjs.zencdn.net/7.15.4/video-js.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', // Optional: Font Awesome for additional icons
    },
  ],
},
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/algolia', '@nuxtjs/strapi', ], //'@sidebase/nuxt-auth'
   css: [
         '~/assets/css/tailwind.css', // Asegúrate de que la ruta sea correcta
       ],
})
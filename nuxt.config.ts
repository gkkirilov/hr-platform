// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/supabase',
    'nuxt-headlessui',
    // '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    "@nuxt/fonts"
  ],

  headlessui: {
    prefix: ''
  },
  supabase: {
    url: 'https://uydbqicvxagoaqhzjkop.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5ZGJxaWN2eGFnb2FxaHpqa29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0OTQzMzgsImV4cCI6MjA0MjA3MDMzOH0.HuNoblKZ7YaN1mvXbtOJglJdKEmyEzz6Cv3KWi3M0NY',
    redirect: false,
    // redirectOptions: {
    //   login: '/',
    //   callback: '/confirm',
    //   include: ['/admin(/*)?']
    // }
  },
  tailwindcss: {
  }
})
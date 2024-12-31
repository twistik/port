// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  unocss: {
    nuxtLayers: false,
  },
  
  app: {
    head: {
      title: 'Personal Portfolio',
    }
  },
  features: {
    inlineStyles: true
  },
  css: ['@/assets/css/globals.scss', '@/assets/css/main.scss'],
  
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ogImage: { enabled: false },
  modules: ['vuetify-nuxt-module', 'nuxt-resend', '@vee-validate/nuxt', '@nuxtjs/seo', '@unocss/nuxt'],
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'unocss-mdi'
      },
      theme: {
        defaultTheme: 'dark',
        themes: {
          dark: {
            colors: {
              background: '#0d1116',
    surface: '#0d1116',
    'surface-bright': '#0d1116',
    'surface-light': '#FFFFFF',
    'surface-variant': '#0A0E12',
    'on-surface-variant': '#FFFFFF',
    primary: '#1867C0',
    'primary-darken-1': '#1F5592',
    secondary: '#48A9A6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'divider-timeline': '#FFFFFF',
    oposite: '#b4b6b9'
            },
          },
          myCustomTheme: {
            colors: {
              'divider-timeline': '#E4E4E6',
              'surface-light': '#FFFFFF',
              'on-surface-light': '#0000',
              'surface-variant': '#FFFFFF',
              'on-surface-variant': '#0d1116',
              'on-surface': '#0d1116',
              'on-background': '#0d1116',
              'on-border-color' : '#272822',
              surface: '#FFFFFF',
              primary: '#1E88E5',
              secondary: '#26A69A',
              accent: '#9C27B0',
              error: '#E53935',
              info: '#1E88E5',
              success: '#43A047',
              warning: '#FB8C00',
              background: '#FFFFFF',
              oposite:'#a5a4a4'
            },
          },
        }
      }
       
    },
    
    moduleOptions: {
      
      disableVuetifyStyles: true,
    },
  }
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  // SPA keeps Vuetify theme + parallax simple on Netlify; meta still set for crawlers that execute JS
  ssr: false,

  modules: [
    'vuetify-nuxt-module',
    'nuxt-resend',
    '@vee-validate/nuxt',
    '@nuxt/image',
  ],

  runtimeConfig: {
    resendApiKey: '', // NUXT_RESEND_API_KEY
    public: {
      siteUrl: 'https://vlad-nn.netlify.app',
    },
  },

  app: {
    head: {
      title: 'Vladyslav Novak — Frontend Engineer',
      meta: [
        {
          name: 'description',
          content: 'Frontend engineer portfolio — Vue, Nuxt, and modern web UI.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/globals.scss', '~/assets/css/main.scss'],

  features: {
    inlineStyles: true,
  },

  image: {
    quality: 80,
    format: ['webp', 'png'],
    presets: {
      cover: {
        modifiers: {
          fit: 'cover',
          format: 'webp',
          quality: 80,
        },
      },
      avatar: {
        modifiers: {
          fit: 'cover',
          format: 'webp',
          quality: 85,
          width: 150,
          height: 150,
        },
      },
    },
  },

  compatibilityDate: '2025-07-13',
  devtools: { enabled: true },

  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi',
      },
      theme: {
        defaultTheme: 'dark',
        themes: {
          dark: {
            colors: {
              background: '#0d1116',
              surface: '#0d1116',
              'link-color': '#FFFFFF',
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
              opposite: '#b4b6b9',
              'timeline-dot': '#651FFF',
              'timeline-dot-ring': '#FFFFFF',
              'on-timeline-dot': '#FFFFFF',
            },
          },
          myCustomTheme: {
            colors: {
              'link-color': '#0d1116',
              'divider-timeline': '#E4E4E6',
              'surface-light': '#FFFFFF',
              'on-surface-light': '#000000',
              'surface-variant': '#FFFFFF',
              'on-surface-variant': '#0d1116',
              'on-surface': '#0d1116',
              'on-background': '#0d1116',
              'on-border-color': '#272822',
              surface: '#FFFFFF',
              primary: '#1E88E5',
              secondary: '#26A69A',
              accent: '#9C27B0',
              error: '#E53935',
              info: '#1E88E5',
              success: '#43A047',
              warning: '#FB8C00',
              background: '#FFFFFF',
              opposite: '#a5a4a4',
              'timeline-dot': '#651FFF',
              'timeline-dot-ring': '#0d1116',
              'on-timeline-dot': '#FFFFFF',
            },
          },
        },
      },
    },
    moduleOptions: {
      disableVuetifyStyles: true,
    },
  },
})

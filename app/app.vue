<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
})

useSeoMeta({
  title: 'Vladyslav Novak — Frontend Engineer',
  description: 'Frontend engineer portfolio — Vue, Nuxt, and modern web UI.',
  ogTitle: 'Vladyslav Novak — Frontend Engineer',
  ogDescription: 'Frontend engineer portfolio — Vue, Nuxt, and modern web UI.',
  ogType: 'website',
  ogUrl: 'https://vlad-nn.netlify.app',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Vladyslav Novak — Frontend Engineer',
  twitterDescription: 'Frontend engineer portfolio — Vue, Nuxt, and modern web UI.',
})
</script>

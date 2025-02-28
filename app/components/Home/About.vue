<template>
  <v-container class="ma-0 pa-0 mb-10 mt-16 " no-gutters style="min-width: 100% !important;">
    <v-parallax :src="imageSrc" height="700" alt="background" class="d-flex justify-center align-center bg-surface-variant">
      <v-row class="justify-start align-center" style="padding-left: 15%; padding-right:15%;">
        <NuxtImg src="/myPhoto.jpg" placeholder width="150" height="150" alt="My Avatar" :modifiers="{ grayscale: true }" loading="lazy" class="rounded-circle mr-10 mb-sm-10 mb-10"/>
          <v-row>
            <div class="d-flex flex-column justify-start align-start">
              <div>
                <nuxt-link aria-label="Link to github" to="https://github.com/twistik" target="_blank" >
                <v-icon size="x-large" class="i-mdi:github bg-link-color"></v-icon></nuxt-link>
                <nuxt-link aria-label="Link to linkedin" to="https://www.linkedin.com/in/vladyslav-novak-6782ab180/" target="_blank">
                <v-icon size="x-large" class="i-mdi:linkedin bg-link-color"></v-icon></nuxt-link>
                <h1 class="text-h1 font-weight-thin">Vladyslav Novak</h1>
                <h2 class="text-h5">Frontend Engineer</h2>
              </div>
            </div>
          </v-row>
      </v-row>
    </v-parallax>
  </v-container>
</template>

<script setup>
import bgDark from '/bg-dark.png'
import bgLight from '/bg-light.png'
import { useTheme } from 'vuetify'

const theme = useTheme()

const imageSrc = computed(() => {
  return theme.global.current.value.dark ? bgDark : bgLight
})
</script>
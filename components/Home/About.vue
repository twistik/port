<template>
  <v-container class="ma-0 pa-0 mb-10 mt-16 " no-gutters style="min-width: 100% !important;">
    <v-parallax :src="imageSrc" height="700" class="d-flex justify-center align-center bg-surface-variant">
      <v-row class="justify-start align-center" style="padding-left: 15%; padding-right:15%;">
        <v-avatar image="~/assets/img/myPhoto.jpg" size="150" class="mr-10 mb-sm-10 mb-10"></v-avatar>
          <v-row>
            <div class="d-flex flex-column justify-start align-start">
              <div>
                <v-icon size="x-large" class="i-mdi:github"></v-icon>
                <v-icon size="x-large" class="i-mdi:linkedin"></v-icon>
              </div>
              <h1 class="text-h1 font-weight-thin">Vladyslav Novak</h1>
              <h4 class="text-h5">Frontend Engineer</h4>
            </div>
          </v-row>
      </v-row>
    </v-parallax>
  </v-container>
</template>

<script setup>
import bgDark from '@/assets/img/bg-dark.png'
import bgLight from '@/assets/img/bg-light.png'
import { useTheme } from 'vuetify'

const theme = useTheme()

const imageSrc = computed(() => {
  return theme.global.current.value.dark ? bgDark : bgLight
})
</script>
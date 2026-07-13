<template>
  <v-container class="ma-0 pa-0 mb-10 mt-16 hero-section" no-gutters>
    <div class="hero-stage bg-surface-variant">
      <div
        class="hero-stage__bg"
        :class="{ 'is-active': isDark }"
        :style="{ backgroundImage: `url(${bgDark})` }"
        aria-hidden="true"
      />
      <div
        class="hero-stage__bg"
        :class="{ 'is-active': !isDark }"
        :style="{ backgroundImage: `url(${bgLight})` }"
        aria-hidden="true"
      />
      <div class="hero-stage__scrim" aria-hidden="true" />

      <v-row class="justify-start align-center hero-content hero-stage__content">
        <NuxtImg
          src="/myPhoto.jpg"
          preset="avatar"
          placeholder
          width="150"
          height="150"
          alt="Vladyslav Novak"
          :modifiers="{ grayscale: true }"
          loading="eager"
          class="rounded-circle mr-10 mb-sm-10 mb-10 hero-avatar"
        />
        <v-row>
          <div class="d-flex flex-column justify-start align-start hero-intro">
            <div>
              <NuxtLink
                aria-label="Link to github"
                to="https://github.com/twistik"
                target="_blank"
                external
              >
                <v-icon size="x-large" icon="mdi-github" class="text-link-color social-icon" />
              </NuxtLink>
              <NuxtLink
                aria-label="Link to linkedin"
                to="https://www.linkedin.com/in/vladyslav-novak-6782ab180/"
                target="_blank"
                external
              >
                <v-icon size="x-large" icon="mdi-linkedin" class="text-link-color social-icon" />
              </NuxtLink>
              <h1 class="text-h1 font-weight-thin">Vladyslav Novak</h1>
              <h2 class="text-h5">Frontend Engineer</h2>
            </div>
          </div>
        </v-row>
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang="ts">
const { isDark } = useThemeTransition()

const bgDark = '/bg-dark.png'
const bgLight = '/bg-light.png'
</script>

<template>
  <v-app-bar :elevation="5" class="app-bar-themed">
    <v-app-bar-nav-icon
      v-if="display.smAndDown.value"
      variant="text"
      aria-label="Toggle menu"
      @click="toggleDrawer"
    />
    <v-app-bar-title
      class="d-flex"
      :class="{ 'justify-end': display.smAndDown.value }"
    >
      <v-btn
        class="theme-toggle-btn"
        :class="{ 'theme-toggle-btn--animating': isAnimating }"
        value="recent"
        aria-label="Toggle theme"
        :disabled="isAnimating"
        @click="toggleTheme"
      >
        <v-icon
          :icon="isDark ? 'mdi-weather-night' : 'mdi-white-balance-sunny'"
          class="theme-toggle-icon"
        />
      </v-btn>
    </v-app-bar-title>

    <template v-if="display.mdAndUp.value">
      <v-btn
        v-for="button in buttons"
        :key="button.value"
        :value="button.value"
        :aria-label="button.text"
        :prepend-icon="button.icon"
        @click="button.action"
      >
        <span class="text-h6">{{ button.text }}</span>
      </v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list aria-label="mobile menu">
      <v-list-item
        v-for="button in buttons"
        :key="button.value"
        :aria-label="button.text"
        :prepend-icon="button.icon"
        @click="button.action"
      >
        <v-list-item-title>{{ button.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useDisplay, useGoTo } from 'vuetify'

interface NavButton {
  value: string
  icon: string
  text: string
  action: () => void
}

const goTo = useGoTo()
const display = useDisplay()
const { isDark, isAnimating, toggleTheme } = useThemeTransition()

const drawer = ref(false)

const scrollOptions = {
  duration: 450,
  easing: 'easeInOutCubic',
  offset: -50,
} as const

const goToSection = (section: string) => {
  goTo(section, scrollOptions)
  drawer.value = false
}

const buttons: NavButton[] = [
  { value: 'Expertise', icon: 'mdi-atom', text: 'Expertise', action: () => goToSection('#skills') },
  { value: 'History', icon: 'mdi-history', text: 'History', action: () => goToSection('#experience') },
  { value: 'Projects', icon: 'mdi-briefcase', text: 'Projects', action: () => goToSection('#projects') },
  { value: 'Contacts', icon: 'mdi-contacts', text: 'Contacts', action: () => goToSection('#contact') },
]

const toggleDrawer = () => {
  drawer.value = !drawer.value
}
</script>

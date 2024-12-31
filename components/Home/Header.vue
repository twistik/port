<template>
  <v-app-bar :elevation="5">
    <v-app-bar-nav-icon variant="text" @click="toggleDrawer" v-if="$vuetify.display.smAndDown"></v-app-bar-nav-icon>
    <v-app-bar-title
      class="d-flex"
      :class="{ 'justify-end': $vuetify.display.smAndDown }">
      <v-btn value="recent" @click="toggleTheme">
        <v-icon class="i-mdi-lightbulb"></v-icon>
      </v-btn>
    </v-app-bar-title>

  <template v-if="$vuetify.display.mdAndUp">
    <v-btn v-for="button in buttons" :key="button.value" :value="button.value" @click="button.action" :aria-label="button.text">
      <v-icon>{{ button.icon }}</v-icon>
      <span class="text-h6">{{ button.text }}</span>
    </v-btn>
  </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item v-for="button in buttons" :key="button.value" @click="button.action">
        <v-icon>{{ button.icon }}</v-icon>
        <v-list-item-title>{{ button.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTheme, useDisplay } from 'vuetify'
import { useGoTo } from 'vuetify'

const theme = useTheme()
const goTo = useGoTo()

const drawer = ref(false)
const buttons = [
  { value: 'Expertise', icon: 'i-mdi-atom', text: 'Expertise', action: () => goToSection('#skills') },
  { value: 'History', icon: 'i-mdi-history', text: 'History', action: () => goToSection('#experience') },
  { value: 'Projects', icon: 'i-mdi-briefcase', text: 'Projects', action: () => goToSection('#projects') },
  { value: 'Contacts', icon: 'i-mdi-contacts', text: 'Contacts', action: () => goToSection('#contact') }
]

const options = computed(() => ({
  duration: 300,
  easing: 'easeInOutCubic',
  offset: -50,
}))

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'myCustomTheme' : 'dark'
}

const toggleDrawer = () => {
  drawer.value = !drawer.value
}

const goToSection = (section) => {
  goTo(section, options.value)
  drawer.value = false
}
</script>
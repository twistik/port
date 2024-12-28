<template>
  <v-app-bar :elevation="5">
    <v-app-bar-nav-icon variant="text" @click="toggleDrawer" v-if="$vuetify.display.smAndDown"></v-app-bar-nav-icon>
    <v-app-bar-title
      class="d-flex"
      :class="{ 'justify-end': $vuetify.display.smAndDown }">
      <v-btn value="recent" @click="toggleTheme">
        <v-icon>mdi-lightbulb</v-icon>
      </v-btn>
    </v-app-bar-title>

  <template v-if="$vuetify.display.mdAndUp">
    <v-btn v-for="button in buttons" :key="button.value" :value="button.value" @click="button.action">
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

<script>
  import { useTheme } from 'vuetify'
  import { useGoTo } from 'vuetify'
  export default {
    setup () {
      const goTo = useGoTo()
      const theme = useTheme()
      return { goTo, theme }
    },
    data() {
    return {
      drawer: false,
      buttons: [
        { value: 'Expertise', icon: 'mdi-atom', text: 'Expertise', action: this.goToSkills },
        { value: 'History', icon: 'mdi-history', text: 'History', action: this.goToExperience },
        { value: 'Projects', icon: 'mdi-briefcase', text: 'Projects', action: this.goToProjects },
        { value: 'Contacts', icon: 'mdi-contacts', text: 'Contacts', action: this.goToContact }
      ],
      group: null,
      offset: -50,
      duration: 300,
      number: 500,
      easing: 'easeInOutCubic',
    };
  },
    computed: {
      options () {
        return {
          duration: this.duration,
          easing: this.easing,
          offset: this.offset,
        }
      },
    },
    methods: {
      toggleTheme () {
        this.theme.global.name.value = this.theme.global.current.value.dark ? 'myCustomTheme' : 'dark'
      },
        toggleDrawer() {
        this.drawer = !this.drawer;},  
        goToSkills () {
        this.goTo('#skills', this.options)
        this.drawer = false
        },
        goToExperience () {
        this.goTo('#experience', this.options)
        this.drawer = false
        },
        goToProjects () {
        this.goTo('#projects', this.options)
        this.drawer = false
        },
        goToContact () {
        this.goTo('#contact', this.options)
        this.drawer = false
        },
    },

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
  
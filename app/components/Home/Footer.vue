<template>
  <v-footer>
    <v-container>
      <v-row justify="center" no-gutters>
        <v-col cols="12" md="12" class="text-center">
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
        </v-col>
        <v-col cols="12" md="12" class="text-center mt-4">
          <p>A portfolio built by Vladyslav Novak with 💜</p>
        </v-col>
        <v-col cols="12" md="12" class="text-center mt-4">
          <p>Design Yugi Sato</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

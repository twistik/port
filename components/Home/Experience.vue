<template>
  <v-container class="skills-p mt-10" id="experience">
    <v-row>
      <h1 class="text-h4 mx-6 mb-10 mt-10 font-weight-bold">Career History</h1>
    </v-row>
    <v-timeline
      align="center"
      line-thickness="4"
      line-color="divider-timeline"
      min-height="900"
      style="height: 800px;"
      class="ml-3 mr-3"
      :class="{ 'justify-lg-start': $vuetify.display.smAndDown }"
    >
      <v-timeline-item
        class="bg-white"
        gap-40
        dot-color="deep-purple-accent-4"
        icon="mdi-briefcase"
        max-width="100%"
      >
        <v-card>
          <v-card-item class="text-h5 bg-white font-weight-bold pt-6">
            <p>Frontend Development</p>
            <p class="text-h6 font-weight-bold">Kyiv, UKR</p>
          </v-card-item>
          <v-card-text class="bg-white text--primary pb-6">
            <p class="text-body-1">Frontend Development, API Development</p>
            <p class="d-lg-none text-oposite pt-3">2023 - 2024</p>
          </v-card-text>
        </v-card>
        <template v-slot:opposite>
          <p class="text-oposite d-none d-lg-block pt-3">2023 - 2024</p>
        </template>
      </v-timeline-item>

      <v-timeline-item
        class="bg-white"
        dot-color="deep-purple-accent-4"
        icon="mdi-briefcase"
        max-width="100%"
      >
        <template v-slot:opposite>
          <v-card class="d-lg-none">
            <v-card-item class="text-h5 bg-white font-weight-bold pt-6">
              <p>Frontend Development</p>
              <p class="text-h6 font-weight-bold">Kyiv, UKR</p>
            </v-card-item>
            <v-card-text class="bg-white text--primary pb-6">
              <p class="text-body-1">Frontend Development, API Development</p>
              <p class="d-lg-none text-oposite pt-3">2023 - 2024</p>
            </v-card-text>
          </v-card>
          <p class="d-none d-lg-block text-oposite">2021 - 2023</p>
        </template>
        <v-card class="d-none d-lg-block">
          <v-card-item class="text-h5 bg-white font-weight-bold">
            Frontend Development
          </v-card-item>
          <v-card-text class="bg-white text-h6 font-weight-bold text--primary opacity-1">
            <p>Kyiv, UKR</p>
          </v-card-text>
          <v-card-text class="bg-white text--primary">
            <p class="text-body-1">Frontend Development, API Development</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        class="bg-white"
        dot-color="deep-purple-accent-4"
        icon="mdi-briefcase"
        max-width="100%"
      >
        <template v-slot:opposite>
          <p class="d-none d-lg-block text-oposite pt-3">2021 - 2021</p>
        </template>
        <v-card>
          <v-card-item class="text-h5 bg-white font-weight-bold pt-6">
            <p>Frontend Development</p>
            <p class="text-h6 font-weight-bold">Kyiv, UKR</p>
          </v-card-item>
          <v-card-text class="bg-white text--primary pb-6">
            <p class="text-body-1">Frontend Development, API Development</p>
            <p class="d-lg-none text-oposite pt-3">2023 - 2024</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
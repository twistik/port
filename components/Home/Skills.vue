<template>
  <v-container class="mt-10 skills-p" id="skills">
    <div class="rows">
      <v-row>
        <h1 class="text-h4 mx-6 mb-1 mt-10 font-weight-bold">Expertise</h1>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-item class="text-h5">
              <div class="mb-5">
                <v-icon size="53" class="i-mdi-vuejs"></v-icon>
              </div>
              Full Stack Web Development
            </v-card-item>
            <v-card-text class="text-h6">
              I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.
            </v-card-text>
            <v-card-text>
              <v-chip-group column variant="flat">
                <v-chip variant="text" class="bg-surface-light">Vue</v-chip>
                <v-chip class="bg-surface-light">Nuxt</v-chip>
                <v-chip class="bg-surface-light">JavaScript</v-chip>
                <v-chip class="bg-surface-light">HTML5</v-chip>
                <v-chip class="bg-surface-light">CSS3</v-chip>
                <v-chip class="bg-surface-light">SASS</v-chip>
                <v-chip class="bg-surface-light">LESS</v-chip>
                <v-chip class="bg-surface-light">TypeScript</v-chip>
                <v-chip class="bg-surface-light">React</v-chip>
                <v-chip class="bg-surface-light">Vuetify</v-chip>
                <v-chip class="bg-surface-light">Tailwind</v-chip>
                <v-chip class="bg-surface-light">Bootstrap</v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card>
            <v-card-item class="text-h5">
              <div class="mb-5">
                <v-icon size="53" class="i-mdi-layers-outline"></v-icon>
              </div>
              Graphic Design Skills
            </v-card-item>
            <v-card-text class="text-h6">
              I am a developer, not a designer, but I have strong knowledge for working with layouts
            </v-card-text>
            <v-card-text>
              <v-chip-group column variant="flat">
                <v-chip class="bg-surface-light">Figma</v-chip>
                <v-chip class="bg-surface-light">Photoshop</v-chip>
                <v-chip class="bg-surface-light">Illustrator</v-chip>
                <v-chip class="bg-surface-light">Indesign</v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card>
            <v-card-item class="text-h5">
              <div class="mb-5">
                <v-icon size="53" class="i-mdi-license">mdi-license</v-icon>
              </div>
              Computer Science
            </v-card-item>
            <v-card-text class="text-h6">
              I have a Master’s in software engineering with honours. I worked really hard to get to this point, too. So, forgive me for bragging about it a little bit.
            </v-card-text>
            <v-card-text>
              <v-chip-group column variant="flat">
                <v-chip class="bg-surface-light">Cloud and GRID technologies</v-chip>
                <v-chip class="bg-surface-light">Functional and logic programming</v-chip>
                <v-chip class="bg-surface-light">Information systems design technologies</v-chip>
                <v-chip class="bg-surface-light">Web resources security technologies</v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
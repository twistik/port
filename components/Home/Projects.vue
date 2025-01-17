<template>
  <v-container class="skills-p mt-10 projects-container" id="projects">
    <v-row>
      <h1 class="text-h4 mx-6 mb-3 mt-10 font-weight-bold">Personal Projects</h1>
    </v-row>
    <v-row class="projects-grid">
      <v-col cols="12" md="6" v-for="project in projects" :key="project.id">
        <v-card style="overflow:visible;">
          <nuxt-link :to="project.link" aria-label="Link to project" target="_blank">
            <v-hover v-slot:default="{ isHovering }">
              <v-img
                :aspect-ratio="16/9"
                :src="project.image"
                cover
                :class="{ 'on-hover': isHovering }"
                style="margin: 0.625rem 1rem;"
                alt="Project Image"
              ></v-img>
            </v-hover>
          </nuxt-link>
          <v-card-title class="text-h5 font-weight-bold mt-4 mb-4">
            <nuxt-link class="text-decoration-none" :to="project.git" aria-label="Link to project" target="_blank">
              {{ project.title }}
            </nuxt-link>
          </v-card-title>
          <v-card-text class="text-h6">
            {{ project.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import project_2 from '@/assets/img/fastrace.png'
import project_1 from '@/assets/img/ecom.png'
import project_3 from '@/assets/img/crypto.png'
import project_4 from '@/assets/img/emails.png'

const projects = ref([
  {
    id: 1,
    title: 'Project 1',
    description: 'I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.',
    image: project_1,
    link: 'https://sage-starship-f483c5.netlify.app/',
    git: 'https://github.com/twistik/ecom'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.',
    image: project_2,
    link: 'https://sparkling-arithmetic-880c4e.netlify.app/',
    git: 'https://github.com/twistik/jekyll-azure-static'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.',
    image: project_3,
    link: 'https://stellar-sprinkles-59afea.netlify.app/',
    git: 'https://stellar-sprinkles-59afea.netlify.app/'
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.',
    image: project_4,
    link: 'https://melodic-moonbeam-87a240.netlify.app/',
    git: 'https://github.com/twistik/emails'
  }
])
</script>
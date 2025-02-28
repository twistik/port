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
              <div class="v-responsive v-img--booting v-img" style="margin: 0.625rem 1rem;">
                <div class="v-responsive__sizer" style="padding-bottom: 56.25%;"></div>
                <NuxtImg placeholder class="v-img__img" preset="cover" :src="project.image" alt="Project Image" :class="{ 'on-hover': isHovering }" loading="lazy"></NuxtImg>
              </div>
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
import project_2 from '/fastrace.png'
import project_1 from '/ecom.png'
import project_3 from '/crypto.png'
import project_4 from '/emails.png'

const projects = ref([
  {
    id: 1,
    title: 'Project 1',
    description: 'Developed demo E-Commerce App from scratch with Features: Product Listing, Product Details, Shopping Cart, Checkout Category, Filtering, Search Functionality, Routing, State Management, UI Framework using Vue.js, Pinia, Vue Routing, Vuetify, REST API (fake-store-api), Javascript, etc.',
    image: project_1,
    link: 'https://sage-starship-f483c5.netlify.app/',
    git: 'https://github.com/twistik/ecom'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Designed and developed a beautiful static site with multipage features: Each page serves a distinct purpose and is accessible via its own URL, Fast Loading Times, SEO-Friendly, Security, Scalability, etc. ',
    image: project_2,
    link: 'https://sparkling-arithmetic-880c4e.netlify.app/',
    git: 'https://github.com/twistik/jekyll-azure-static'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Responsive Landing Page, just clean HTML CSS and JS.',
    image: project_3,
    link: 'https://stellar-sprinkles-59afea.netlify.app/',
    git: 'https://stellar-sprinkles-59afea.netlify.app/'
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'This is an HTML email example, Im creating tons of emails like this, it is best email practice, fully tested, and easily can be integrated to service Salesforce, Veeva Vault, Mailchimp, etc.',
    image: project_4,
    link: 'https://melodic-moonbeam-87a240.netlify.app/',
    git: 'https://github.com/twistik/emails'
  }
])
</script>
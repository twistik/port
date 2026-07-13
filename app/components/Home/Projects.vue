<template>
  <div
    ref="el"
    class="reveal-section"
    :class="{ 'is-visible': isVisible }"
  >
    <v-container id="projects" class="skills-p mt-10 projects-container">
      <v-row>
        <h1 class="text-h4 mx-6 mb-3 mt-10 font-weight-bold">Personal Projects</h1>
      </v-row>
      <v-row class="projects-grid">
        <v-col
          v-for="(project, index) in projects"
          :key="project.id"
          cols="12"
          md="6"
          class="reveal-item"
          :style="{ '--reveal-delay': `${index * 90}ms` }"
        >
          <v-card class="project-card">
            <NuxtLink
              :to="project.link"
              aria-label="Open live project"
              target="_blank"
              external
              class="project-image-link"
            >
              <v-hover v-slot="{ isHovering, props }">
                <div v-bind="props" class="project-image-wrap">
                  <NuxtImg
                    :src="project.image"
                    :alt="`${project.title} preview`"
                    preset="cover"
                    placeholder
                    loading="lazy"
                    width="800"
                    height="450"
                    class="project-image"
                    :class="{ 'on-hover': isHovering }"
                  />
                </div>
              </v-hover>
            </NuxtLink>
            <v-card-title class="text-h5 font-weight-bold mt-4 mb-4">
              <NuxtLink
                class="text-decoration-none"
                :to="project.git"
                aria-label="Open project repository"
                target="_blank"
                external
              >
                {{ project.title }}
              </NuxtLink>
            </v-card-title>
            <v-card-text class="text-h6">
              {{ project.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const { el, isVisible } = useRevealOnScroll()
</script>

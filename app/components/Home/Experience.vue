<template>
  <section
    id="experience"
    ref="el"
    class="experience-section reveal-section"
    :class="{ 'is-visible': isVisible }"
  >
    <v-container class="skills-p mt-10">
      <v-row>
        <div class="experience-heading mx-6 mb-10 mt-10">
          <h1 class="text-h4 font-weight-bold mb-0">Career History</h1>
        </div>
      </v-row>

      <v-timeline
        align="center"
        justify="center"
        line-thickness="2"
        line-color="divider-timeline"
        class="experience-timeline"
      >
        <v-timeline-item
          v-for="(item, index) in experienceItems"
          :key="item.title + item.period"
          size="default"
          fill-dot
          dot-color="timeline-dot"
          icon="mdi-briefcase"
          icon-color="on-timeline-dot"
          class="experience-item"
          :style="{ '--item-index': index }"
        >
          <template #opposite>
            <div class="experience-date-wrap d-none d-lg-flex">
              <span class="experience-date text-opposite">{{ item.period }}</span>
            </div>
          </template>

          <v-card class="experience-card" elevation="0" rounded="0">
            <div class="experience-card__accent" aria-hidden="true" />
            <v-card-item class="experience-card__header">
              <v-card-title class="experience-card__title pa-0">
                {{ item.title }}
              </v-card-title>
              <v-card-subtitle class="experience-card__location pa-0 mt-2">
                <v-icon icon="mdi-map-marker-outline" size="small" class="me-1" />
                {{ item.location }}
              </v-card-subtitle>
            </v-card-item>
            <v-card-text class="experience-card__body">
              <p class="experience-card__description mb-4">{{ item.description }}</p>
              <div class="experience-card__tags">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="experience-tag"
                >
                  {{ tag }}
                </span>
              </div>
              <p class="experience-date d-lg-none mt-4 mb-0">{{ item.period }}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { el, isVisible } = useRevealOnScroll({ threshold: 0.08 })
</script>

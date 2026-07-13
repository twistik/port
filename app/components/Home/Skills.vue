<template>
  <div
    ref="el"
    class="reveal-section"
    :class="{ 'is-visible': isVisible }"
  >
    <v-container id="skills" class="mt-10 skills-p">
      <div class="rows">
        <v-row>
          <h1 class="text-h4 mx-6 mb-1 mt-10 font-weight-bold">Expertise</h1>
        </v-row>
        <v-row>
          <v-col
            v-for="(card, index) in skillCards"
            :key="card.title"
            cols="12"
            md="4"
            class="reveal-item"
            :style="{ '--reveal-delay': `${index * 80}ms` }"
          >
            <v-card class="skill-card h-100">
              <v-card-item class="text-h5">
                <div class="mb-5">
                  <v-icon size="53" :icon="card.icon" />
                </div>
                {{ card.title }}
              </v-card-item>
              <v-card-text class="text-h6">
                {{ card.description }}
              </v-card-text>
              <v-card-text>
                <v-chip-group column variant="flat">
                  <v-chip
                    v-for="skill in card.skills"
                    :key="skill"
                    class="bg-surface-light"
                    :variant="skill === 'Vue' ? 'text' : undefined"
                  >
                    {{ skill }}
                  </v-chip>
                </v-chip-group>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const { el, isVisible } = useRevealOnScroll()
</script>

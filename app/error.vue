<template>
  <v-app>
    <v-main>
      <v-container class="fill-height text-center">
        <v-row justify="center" align="center">
          <v-col cols="12" md="6">
            <h1 class="text-h3 mb-4">{{ error?.statusCode || 500 }}</h1>
            <p class="text-h6 mb-8">{{ error?.statusMessage || 'Something went wrong.' }}</p>
            <v-btn color="primary" @click="handleError">Back home</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

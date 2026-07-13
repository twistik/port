<template>
  <div
    ref="el"
    class="reveal-section"
    :class="{ 'is-visible': isVisible }"
  >
    <v-container id="contact" class="skills-p mt-10 text-dark">
      <v-row>
        <h1 class="text-h4 mx-6 mb-10 mt-10 font-weight-bold">Contact Me</h1>
      </v-row>
      <v-row class="mt-0">
        <p class="text-h6 mx-6 mb-10">
          Got a work waiting to be realized? Let's collaborate and make it happen!
        </p>
      </v-row>

      <v-alert
        v-if="submitStatus === 'success'"
        type="success"
        variant="tonal"
        class="mb-4 mx-4"
        closable
        @click:close="submitStatus = 'idle'"
      >
        Thanks! Your message was sent successfully.
      </v-alert>
      <v-alert
        v-else-if="submitStatus === 'error'"
        type="error"
        variant="tonal"
        class="mb-4 mx-4"
        closable
        @click:close="submitStatus = 'idle'"
      >
        {{ submitError || 'Failed to send your message. Please try again.' }}
      </v-alert>

      <v-form class="ml-4 mr-4 section-reveal-target" @submit.prevent="onSubmit">
        <v-row>
          <v-col cols="12" md="6" class="mobile-contact-utils-pb">
            <v-text-field
              v-model="name.value.value"
              :counter="10"
              :error-messages="name.errorMessage.value"
              label="Name"
              name="name"
              autocomplete="name"
            />
          </v-col>
          <v-col cols="12" md="6" class="mobile-contact-utils-pt">
            <v-text-field
              v-model="phone.value.value"
              :counter="7"
              :error-messages="phone.errorMessage.value"
              label="Phone Number"
              name="phone"
              autocomplete="tel"
            />
          </v-col>
        </v-row>
        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="E-mail"
          name="email"
          type="email"
          autocomplete="email"
        />
        <v-textarea
          v-model="body.value.value"
          :error-messages="body.errorMessage.value"
          label="Message"
          name="message"
          autocomplete="off"
        />
        <v-btn class="me-4" type="submit" :loading="isSubmitting" :disabled="isSubmitting">
          Submit
        </v-btn>
        <v-btn type="button" :disabled="isSubmitting" @click="handleReset">
          Clear
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

type SubmitStatus = 'idle' | 'success' | 'error'

const { el, isVisible } = useRevealOnScroll()

const isSubmitting = ref(false)
const submitStatus = ref<SubmitStatus>('idle')
const submitError = ref('')

const { handleSubmit, handleReset } = useForm({
  validationSchema: yup.object({
    name: yup.string().min(2, 'Name needs to be at least 2 characters.').required(),
    phone: yup
      .string()
      .matches(/^[0-9-]{7,}$/, 'Phone number needs to be at least 7 digits.')
      .required(),
    email: yup.string().email('Must be a valid e-mail.').required(),
    body: yup.string().min(2, 'Message needs to be at least 2 characters.').required(),
  }),
})

const name = useField<string>('name')
const phone = useField<string>('phone')
const email = useField<string>('email')
const body = useField<string>('body')

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true
  submitStatus.value = 'idle'
  submitError.value = ''

  try {
    await $fetch('/api/send', {
      method: 'POST',
      body: {
        name: values.name,
        mail: values.email,
        message: `${values.phone} ${values.body}`,
      },
    })

    submitStatus.value = 'success'
    handleReset()
  }
  catch (error: unknown) {
    submitStatus.value = 'error'
    submitError.value =
      error && typeof error === 'object' && 'data' in error
        ? String((error as { data?: { statusMessage?: string } }).data?.statusMessage || '')
        : ''
  }
  finally {
    isSubmitting.value = false
  }
})
</script>

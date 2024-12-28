<template>
  <v-container class="skills-p mt-10 text-dark" id="contact">
    <v-row>
      <h1 class="text-h4 mx-6 mb-10 mt-10 font-weight-bold">Contact Me</h1>
    </v-row>
    <v-row class="mt-0">
      <p class="text-h6 mx-6 mb-10">Got a work waiting to be realized? Let's collaborate and make it happen!</p>
    </v-row>
    <v-form @submit.prevent="toggleSendMail" class="ml-4 mr-4">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            label="Name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="phone.value.value"
            :counter="7"
            :error-messages="phone.errorMessage.value"
            label="Phone Number"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>
      <v-textarea
        v-model="body.value.value"
        :error-messages="body.errorMessage.value"
        label="Message"
      ></v-textarea>
      <v-btn class="me-4" type="submit">
        Submit
      </v-btn>
      <v-btn @click="handleReset">
        Clear
      </v-btn>
    </v-form>
  </v-container>
</template>

    
  
<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate';

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
      name (value) {
        if (value?.length >= 2) return true

        return 'Name needs to be at least 2 characters.'
      },
      phone (value) {
        if (/^[0-9-]{7,}$/.test(value)) return true

        return 'Phone number needs to be at least 7 digits.'
      },
      email (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
      },
      body (value) {
        if (value?.length >= 2) return true

        return 'Message needs to be at least 2 characters.'
      },
    },
});

const name = useField('name');
const phone = useField('phone');
const email = useField('email');
const body = useField('body');
const items = ref([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ])

const toggleSendMail = handleSubmit(async (values) => {
  const mail = useMail();
  try {
    // Send mail
    await mail.send({
      from: "A Strong Man doesn't need to",
      subject: "Portfolio site message",
      text: `\nName Sender:${JSON.stringify(values.name, null, 2)}\n\nEmail Sender:${JSON.stringify(values.email, null, 2)}\n \nPhone Sender:${JSON.stringify(values.phone, null, 2)}\n \nMessege:${JSON.stringify(values.body, null, 2)}`,
    });

    handleReset();
  } catch (error) {
    console.error('Failed to send mail:', error)
  }
});
</script>

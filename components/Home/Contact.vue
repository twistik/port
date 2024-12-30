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
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup'

const { handleSubmit, handleReset } = useForm({
  validationSchema: yup.object({
    name: yup.string().min(2, 'Name needs to be at least 2 characters.').required(),
    phone: yup.string().matches(/^[0-9-]{7,}$/, 'Phone number needs to be at least 7 digits.').required(),
    email: yup.string().email('Must be a valid e-mail.').required(),
    body: yup.string().min(2, 'Message needs to be at least 2 characters.').required(),
  }),
})

const name = useField('name');
const phone = useField('phone');
const email = useField('email');
const body = useField('body');

const toggleSendMail = handleSubmit((values) => {
  
  const mail = useMail();
  
    // Send mail
     mail.send({
      from: "A Strong Man doesn't need to",
      subject: "Portfolio site message",
      text: `\nName Sender:${JSON.stringify(values.name, null, 2)}\n\nEmail Sender:${JSON.stringify(values.email, null, 2)}\n \nPhone Sender:${JSON.stringify(values.phone, null, 2)}\n \nMessege:${JSON.stringify(values.body, null, 2)}`,
    });

    handleReset();

});
</script>

import { Resend } from 'resend';

const resend = new Resend(process.env.NUXT_RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, mail, message } = body;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['vladyha165@gmail.com'],
      subject: `Portfolio site message from ${name}`,
      html: `<p><strong>Name Sender:</strong> ${name}</p><p><strong>Email Sender:</strong> ${mail}</p><p><strong>Message:</strong> ${message}</p> `,
    });

    return data;
  } catch (error) {
    return { error };
  }
});
import { createError, defineEventHandler, readBody } from 'h3'
import { Resend } from 'resend'

interface ContactBody {
  name?: string
  mail?: string
  message?: string
}

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const apiKey = config.resendApiKey || process.env.NUXT_RESEND_API_KEY

  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Email service is not configured.',
    })
  }

  const body = await readBody<ContactBody>(event)
  const name = body?.name?.trim() ?? ''
  const mail = body?.mail?.trim() ?? ''
  const message = body?.message?.trim() ?? ''

  if (name.length < 2 || name.length > 100 || !isValidEmail(mail) || message.length < 2 || message.length > 5000) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid contact form payload.',
    })
  }

  const resend = new Resend(apiKey)

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['vladyha165@gmail.com'],
      replyTo: mail,
      subject: `Portfolio site message from ${name}`,
      html: `
        <p><strong>Name Sender:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email Sender:</strong> ${escapeHtml(mail)}</p>
        <p><strong>Message:</strong> ${escapeHtml(message)}</p>
      `,
    })

    if (data.error) {
      throw createError({
        statusCode: 502,
        statusMessage: data.error.message || 'Failed to send email.',
      })
    }

    return { success: true, id: data.data?.id }
  }
  catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email.',
    })
  }
})

export interface PortfolioProject {
  id: number
  title: string
  description: string
  image: string
  link: string
  git: string
}

export const projects: PortfolioProject[] = [
    {
    id: 1,
    title: 'Project 1',
    description:
      'Demo Board is a production-style workspace for small teams: multi-board kanban, drag-and-drop workflows, comments, attachments, and real-time updates across devices. It includes admin controls, design-board pricing/payments, i18n (EN/RU/UA), and a Telegram bot for creating tasks and getting assignee alerts — end to end from auth to deploy. Stack: Vue 3 · TypeScript · Pinia · Express · PostgreSQL · JWT · Telegram Bot API',
    image: '/portfolio-cover-card.png',
    link: 'https://demoapp-production-da12.up.railway.app/',
    git: 'https://demoapp-production-da12.up.railway.app/',
  },
        {
    id: 2,
    title: 'Project 2',
    description:
      'Medium AURUM is a modern Vue 3 e-commerce experience styled as a quiet-luxury brand. Shoppers can browse by category, search the catalog, pick apparel sizes, manage quantities, and check out through a validated flow. Cart state persists across sessions. Architecture uses Pinia stores, composables, lazy routes, and reusable UI components — built to show product thinking, UI craft, and solid Vue frontend structure. Stack: Vue 3 · Vite · Pinia · Vue Router · Vuetify · Axios · Fake Store API',
    image: '/aurum-portfolio-cover.png',
    link: 'https://sage-starship-f483c5.netlify.app/',
    git: 'https://demoapp-production-da12.up.railway.app/',
  },
          {
    id: 3,
    title: 'Project 3',
    description:
      'Responsive dark/gold lead-capture landing page for the Korean market. Includes urgency countdown, dual registration forms, FAQ, testimonials, and intl-tel-input with visible country dial code (+82). Vanilla JS + custom CSS',
    image: '/hero-desktop-capital.png',
    link: 'https://magical-hummingbird-ed8f19.netlify.app/',
    git: 'https://magical-hummingbird-ed8f19.netlify.app/',
  },
  {
    id: 4,
    title: 'Project 4',
    description:
      'Designed and developed a beautiful static site with multipage features: Each page serves a distinct purpose and is accessible via its own URL, Fast Loading Times, SEO-Friendly, Security, Scalability, etc. ',
    image: '/fastrace.png',
    link: 'https://sparkling-arithmetic-880c4e.netlify.app/',
    git: 'https://github.com/twistik/jekyll-azure-static',
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Responsive Landing Page, just clean HTML CSS and JS.',
    image: '/crypto.png',
    link: 'https://stellar-sprinkles-59afea.netlify.app/',
    git: 'https://stellar-sprinkles-59afea.netlify.app/',
  },
  {
    id: 6,
    title: 'Project 6',
    description:
      'This is an HTML email example, Im creating tons of emails like this, it is best email practice, fully tested, and easily can be integrated to service Salesforce, Veeva Vault, Mailchimp, etc.',
    image: '/emails.png',
    link: 'https://melodic-moonbeam-87a240.netlify.app/',
    git: 'https://github.com/twistik/emails',
  },
]

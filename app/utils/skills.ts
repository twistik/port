export interface SkillCard {
  title: string
  description: string
  icon: string
  skills: string[]
}

export const skillCards: SkillCard[] = [
  {
    title: 'Front end Web Development',
    description:
      'I have built a diverse array of web applications from scratch using modern technologies such as Vue and Nuxt, building tons of web user interfaces. I have a strong proficiency in the SDLC process and frontend development.',
    icon: 'mdi-vuejs',
    skills: [
      'Vue',
      'Nuxt',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SASS',
      'LESS',
      'TypeScript',
      'React',
      'Vuetify',
      'Tailwind',
      'Bootstrap',
    ],
  },
  {
    title: 'Graphic Design Skills',
    description:
      'I am a developer, not a designer, but I have strong knowledge for working with layouts. I have a good understanding of the principles of design and how to apply them to web development.',
    icon: 'mdi-layers-outline',
    skills: ['Figma', 'Photoshop', 'Illustrator', 'Indesign'],
  },
  {
    title: 'Computer Science',
    description:
      'I have a Master’s in software engineering with honours. I worked really hard to get to this point, too. So, forgive me for bragging about it a little bit.',
    icon: 'mdi-license',
    skills: [
      'Cloud and GRID technologies',
      'Functional and logic programming',
      'Information systems design technologies',
      'Web resources security technologies',
    ],
  },
]

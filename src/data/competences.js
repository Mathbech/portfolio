export const skills = [
  { name: 'Symfony', levels: ['maitrise', 'perfectionnement'], homeLabel: 'Symfony' },
  { name: 'AWS (Lightsail, S3, CloudFront)', levels: ['perfectionnement'], homeLabel: 'AWS' },
  { name: 'Flutter', levels: ['maitrise', 'perfectionnement'], homeLabel: 'Flutter' },
  { name: 'Git / GitHub', levels: ['maitrise'], homeLabel: 'Git' },
  { name: 'JavaScript', levels: ['perfectionnement'] },
  { name: 'API Platform', levels: ['maitrise'], homeLabel: 'API Platform' },
  { name: 'Docker', levels: ['maitrise'], homeLabel: 'Docker' },
  { name: 'MySQL', levels: ['perfectionnement'], homeLabel: 'MySQL/MariaDB' },
  { name: 'Node.js (API REST)', levels: ['perfectionnement'], homeLabel: 'Node.js' },
  { name: 'Discord.js', levels: ['maitrise', 'perfectionnement'], homeLabel: 'Discord.js' },
  { name: 'Vue 3 / Vite', levels: ['apprentissage'] },
  { name: 'TypeScript', levels: ['apprentissage'] },
  { name: 'Apache', levels: ['maitrise'], homeLabel: 'Apache' },
]

export const homeSkills = skills
  .filter((s) => s.homeLabel)
  .map((s) => ({ label: s.homeLabel }))

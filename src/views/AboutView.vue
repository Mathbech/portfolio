<script setup>
import AboutHero from '@/components/about/AboutHero.vue'
import SkillsList from '@/components/about/SkillsList.vue'
import Timeline from '@/components/about/TimeLine.vue'

const skills = [
  'Symfony / API Platform',
  'Vue.js / Flutter',
  'Node.js / Discord.js',
  'AWS (Lightsail, S3, CloudFront)',
  'MySQL / MariaDB'
]

const YEAR_2024_TO_PRESENT = '2024-aujourd\'hui'
const events = [
  { year: '2025', title: 'FilamentGestion', desc: 'App de gestion de stocks 3D' },
  { year: '2024', title: 'Beaup’orientation', desc: 'Courses d’orientation (Symfony + Flutter)' },
  { year: YEAR_2024_TO_PRESENT, title: 'i‑Topo', desc: 'Évolution back-office & admin' },
]
</script>

<template>
  <AboutHero
    title="À propos de moi"
    subtitle="Développeur full‑stack — j’aime les stacks propres, la perf et l’automatisation."
  />

  <SkillsList :items="skills" />

  <Timeline :items="events" />
</template>

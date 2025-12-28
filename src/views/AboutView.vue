<script setup lang="ts">
import AboutHero from '@/components/about/AboutHero.vue'
import SkillsList from '@/components/about/SkillsList.vue'
import Timeline from '@/components/about/TimeLine.vue'

import { timelineItems } from '@/data/timelineData.js'
import { sortTimeline } from '@/utils/timeline'
import { skills } from '@/data/competences.js'

const events = sortTimeline(timelineItems, 'desc')
</script>

<template>
  <AboutHero
    title="À propos de moi"
    :subtitle="`Développeur web & mobile, j’aime concevoir des applications propres, performantes et maintenables.
    Je mise sur l’automatisation (tests, CI/CD, déploiements) pour livrer vite, bien, et sans surprise.
    Des outils fiables, clairs et utiles : c’est ça que je vise.`"
  />

  <SkillsList :items="skills" />

  <Timeline :items="events" />
</template>

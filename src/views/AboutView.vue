<script setup lang="ts">
import AboutHero from '@/components/about/AboutHero.vue'
import SkillsList from '@/components/about/SkillsList.vue'
import Timeline from '@/components/about/TimeLine.vue'

import { timelineItems } from '@/data/timelineData.js'
import { sortTimeline } from '@/utils/timeline'

import { skills } from '@/data/competences.js'

const events = sortTimeline(timelineItems, 'desc'); // plus récent en haut

</script>

<template>
  <AboutHero
    title="À propos de moi"
    subtitle="Développeur full-stack — j’aime les stacks propres, la perf et l’automatisation."
  />

  <SkillsList :items="skills" />

  <Timeline :items="events" />
</template>

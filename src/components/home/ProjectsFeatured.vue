<script setup>
import { featuredProjects } from '@/data/projects'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <div>
    <div class="head">
      <h2>Projets mis en avant</h2>
      <a href="/projects" class="seeall">Tous les projets →</a>
    </div>
    <div class="grid">
      <ProjectCard
        v-for="p in featuredProjects"
        :key="p.slug"
        :title="p.title"
        :description="p.description"
        :context="p.context"
        :cover="p.cover"
        :tech="p.tech"
      />
    </div>
  </div>
</template>

<style scoped>
.head { display:flex; justify-content:space-between; align-items:center; gap:.5rem; margin-bottom: .75rem; }
.seeall { text-decoration:none; font-size:.95rem; }
.grid { display: grid; gap: 1rem; }
</style>

<script setup>
import { featuredProjects } from '@/data/projects'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <div class="block surface-card">
    <div class="head">
      <div>
        <p class="eyebrow">Projets</p>
        <h2>Projets mis en avant</h2>
      </div>
      <RouterLink to="/projects" class="seeall">Tous les projets →</RouterLink>
    </div>
    <div class="grid">
      <ProjectCard
        v-for="p in featuredProjects"
        :key="p.slug"
        :slug="p.slug"
        :title="p.title"
        :description="p.description"
        :context="p.context"
        :cover="p.cover"
        :tech="p.tech"
      />
    </div>
  </div>
</template>

<style scoped src="./ProjectsFeatured.css"></style>

<script setup>
import { featuredProjects } from '@/data/projects'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <div class="block">
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

<style scoped>
.block {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #e5e7eb;
  border-radius: 1.1rem;
  padding: 1.4rem 1.6rem;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.06);
}

.head { display:flex; justify-content:space-between; align-items:flex-end; gap:.5rem; margin-bottom: .9rem; flex-wrap: wrap; }
.seeall { text-decoration:none; font-size:.95rem; font-weight: 700; color: #1d4ed8; }
.seeall:hover { text-decoration: underline; }
.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.78rem;
  color: #0ea5e9;
  font-weight: 700;
  margin: 0 0 0.2rem;
}
.grid { display: grid; gap: 1.1rem; }

@media (prefers-color-scheme: dark) {
  .block {
    background: rgba(15, 23, 42, 0.85);
    border-color: #1f2937;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
  }

  .seeall {
    color: #60a5fa;
  }
}
</style>

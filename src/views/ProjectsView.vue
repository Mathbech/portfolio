<template>
  <section class="projects">
    <h1>Mes projets</h1>
    <p>Voici une sélection de projets professionnels, scolaires et personnels.</p>

    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <div class="thumb">
          <img :src="project.image" :alt="project.title" />
        </div>
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <ul class="stack">
          <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
        </ul>
        <a :href="project.link" target="_blank" rel="noopener">Voir plus</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '@/data/allProjects.js'
</script>

<template>
  <section class="projects">
    <h1>Projets réalisés</h1>
    <p>Voici une sélection de projets réalisés dans les milieux professionnels, scolaires et personnels.</p>

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

        <div v-if="project.details" class="actions">
          <router-link :to="{ name: 'project-details', params: { slug: project.details } }">Voir les
            détails</router-link>
        </div>
        <div v-if="project.link" class="actions">
          <a :href="project.link" target="_blank" rel="noopener noreferrer"
            :aria-label="project.link.includes('github') ? 'Ouvrir le dépôt GitHub' : 'Ouvrir le site'">
            {{ project.link.includes('github') ? 'Voir le repo' : 'Voir le site' }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '@/data/allProjects.js'
</script>

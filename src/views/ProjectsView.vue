<template>
  <section class="projects">
    <div class="projects-shell">
      <header class="projects-hero">
        <p class="eyebrow">Projets</p>
        <div>
          <h1>Projets réalisés</h1>
          <p class="intro">
            Sélection de projets réalisés en contexte professionnel, scolaire et personnel.
          </p>
        </div>
      </header>

      <div class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :slug="project.details"
          :title="project.title"
          :description="project.description"
          :context="project.context"
          :cover="project.image"
          :tech="project.stack"
          :link="project.link"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '@/data/allProjects.js'
import ProjectCard from '@/components/home/ProjectCard.vue'
</script>

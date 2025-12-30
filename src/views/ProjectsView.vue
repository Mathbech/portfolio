<template>
  <section class="projects">
    <div class="projects-shell">
      <header class="projects-hero">
        <p class="eyebrow">Projets</p>
        <div>
          <h1>Projets réalisés</h1>
          <p class="intro">Sélection de projets réalisés en contexte professionnel, scolaire et personnel.</p>
        </div>
      </header>

      <div class="projects-grid">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-card"
          :class="{ clickable: project.details }"
          :tabindex="project.details ? 0 : undefined"
          :role="project.details ? 'link' : undefined"
          @click="project.details && goToDetails(project.details)"
          @keydown.enter="project.details && goToDetails(project.details)"
          @keydown.space.prevent="project.details && goToDetails(project.details)"
        >
          <div class="thumb">
            <img :src="project.image" :alt="project.title" loading="lazy" />
          </div>

          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>

          <ul class="stack">
            <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
          </ul>

          <div
            v-if="project.details"
            class="actions"
            @click.stop
            @keydown.enter.stop
            @keydown.space.stop
          >
            <router-link :to="{ name: 'project-details', params: { slug: project.details } }">
              Voir les détails
            </router-link>
          </div>
          <div
            v-if="project.link"
            class="actions"
            @click.stop
            @keydown.enter.stop
            @keydown.space.stop
          >
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="project.link.includes('github') ? 'Ouvrir le dépôt GitHub' : 'Ouvrir le site'"
            >
              {{ project.link.includes('github') ? 'Voir le repo' : 'Voir le site' }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { projects } from '@/data/allProjects.js'

const router = useRouter()

const goToDetails = (slug) => {
  router.push({ name: 'project-details', params: { slug } })
}
</script>

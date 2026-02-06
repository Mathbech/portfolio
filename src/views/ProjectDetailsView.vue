<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projectsDetails } from '@/data/projectsDetails'

const route = useRoute()
const slug = computed(() => route.params.slug)

const project = computed(() => projectsDetails[slug.value])
</script>

<template>
  <section v-if="project" class="project">
    <header class="hero">
      <div class="heroTop">
        <h1 class="title">{{ project.title }}</h1>
        <span class="status" :data-level="project.status.level">
          {{ project.status.label }}
        </span>
      </div>

      <p class="subtitle">{{ project.subtitle }}</p>
    </header>

    <div class="layout">
      <!-- Colonne principale -->
      <main class="main">
        <section v-for="s in project.sections" :key="s.title" class="section surface-card">
          <h2 class="sectionTitle">{{ s.title }}</h2>

          <p v-if="s.content" class="sectionText">
            {{ s.content }}
          </p>

          <ul v-if="s.list" class="sectionList">
            <li v-for="item in s.list" :key="item">{{ item }}</li>
          </ul>

          <!-- Optionnel plus tard : images par section -->
          <div v-if="s.images?.length" class="images">
            <figure v-for="img in s.images" :key="img.src" class="figure">
              <img :src="img.src" :alt="img.alt || ''" loading="lazy" />
              <figcaption v-if="img.caption">{{ img.caption }}</figcaption>
            </figure>
          </div>
        </section>
      </main>

      <!-- Sidebar / Fiche -->
      <aside class="side">
        <div class="sideBlock surface-card">
          <h2 class="sideTitle">Fiche projet</h2>

          <div class="metaRow">
            <span class="metaLabel">Statut</span>
            <span class="metaValue">{{ project.status.label }}</span>
          </div>

          <div class="metaRow">
            <span class="metaLabel">Stack</span>
            <div class="chips">
              <span v-for="t in project.stack" :key="t" class="chip">{{ t }}</span>
            </div>
          </div>

          <div v-if="project.links?.length" class="metaRow">
            <span class="metaLabel">Liens</span>
            <ul class="links">
              <li v-for="l in project.links" :key="l.url">
                <a :href="l.url" target="_blank" rel="noreferrer">{{ l.label }}</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Optionnel : galerie globale -->
        <div v-if="project.gallery?.length" class="sideBlock surface-card">
          <h2 class="sideTitle">Aperçus</h2>
          <div class="gallery">
            <img
              v-for="g in project.gallery"
              :key="g.src"
              :src="g.src"
              :alt="g.alt || ''"
              loading="lazy"
            />
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped src="./ProjectDetailsView.css"></style>

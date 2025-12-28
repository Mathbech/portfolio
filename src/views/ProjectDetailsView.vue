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
        <section
          v-for="s in project.sections"
          :key="s.title"
          class="section"
        >
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
        <div class="sideBlock">
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
        <div v-if="project.gallery?.length" class="sideBlock">
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

<style scoped>
  .project {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 20px 80px;
}

.hero {
  text-align: center;
  margin-bottom: 40px;
}

.heroTop {
  display: inline-flex;
  align-items: baseline;
  gap: 12px;
  justify-content: center;
}

.title {
  font-size: 42px;
  letter-spacing: -0.02em;
  margin: 0;
}

.subtitle {
  margin: 10px 0 0;
  opacity: 0.8;
  font-size: 16px;
}

.status {
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.18);
  opacity: 0.9;
}

/* petit code couleur très léger (pas de fonds) */
.status[data-level="prod"] { border-color: rgba(0,255,170,0.25); }
.status[data-level="wip"] { border-color: rgba(255,210,120,0.25); }
.status[data-level="paused"] { border-color: rgba(255,255,255,0.18); }
.status[data-level="done"] { border-color: rgba(160,190,255,0.25); }

.layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 42px;
  align-items: start;
}

.main {
  min-width: 0;
}

/* sections “éditoriales” : pas de fond, juste espace + trait discret */
.section {
  padding: 18px 0 26px;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.section:first-child {
  border-top: none;
  padding-top: 0;
}

.sectionTitle {
  margin: 0 0 10px;
  font-size: 18px;
  letter-spacing: -0.01em;
}

.sectionText {
  margin: 0;
  line-height: 1.7;
  opacity: 0.9;
}

.sectionList {
  margin: 10px 0 0;
  padding-left: 18px;
  line-height: 1.7;
  opacity: 0.9;
}

.images {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.figure img {
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.10);
  display: block;
}

.figure figcaption {
  margin-top: 6px;
  font-size: 12px;
  opacity: 0.7;
}

.side {
  position: sticky;
  top: 90px; /* si tu as une navbar */
}

.sideBlock {
  border-top: 1px solid rgba(255,255,255,0.10);
  padding-top: 18px;
  margin-bottom: 26px;
}

.sideTitle {
  margin: 0 0 12px;
  font-size: 16px;
  opacity: 0.9;
}

.metaRow {
  margin-top: 12px;
}

.metaLabel {
  display: block;
  font-size: 12px;
  opacity: 0.6;
  margin-bottom: 6px;
}

.metaValue {
  opacity: 0.9;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.12);
  opacity: 0.9;
}

.links {
  margin: 0;
  padding-left: 16px;
}

.links a {
  opacity: 0.9;
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.18);
}

.links a:hover {
  border-bottom-color: rgba(255,255,255,0.45);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.gallery img {
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.10);
  display: block;
}

@media (max-width: 980px) {
  .layout {
    grid-template-columns: 1fr;
  }
  .side {
    position: static;
  }
}
</style>

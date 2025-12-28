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
  display: grid;
  gap: 28px;
}

.hero {
  background: linear-gradient(135deg, #ecfeff, #eef2ff);
  border: 1px solid #e5e7eb;
  border-radius: 1.2rem;
  padding: 1.3rem 1.4rem;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);
}

.heroTop {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.title {
  font-size: clamp(2rem, 2.8vw, 2.4rem);
  letter-spacing: -0.02em;
  margin: 0;
}

.subtitle {
  margin: 10px 0 0;
  opacity: 0.85;
  font-size: 1rem;
  color: #475569;
}

.status {
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid #bfdbfe;
  color: #1d4ed8;
  background: rgba(29, 78, 216, 0.1);
  font-weight: 700;
}

.status[data-level="prod"] { border-color: #22c55e; color: #166534; background: rgba(34, 197, 94, 0.14); }
.status[data-level="wip"] { border-color: #facc15; color: #854d0e; background: rgba(250, 204, 21, 0.16); }
.status[data-level="paused"] { border-color: #cbd5e1; color: #475569; background: rgba(226, 232, 240, 0.4); }
.status[data-level="done"] { border-color: #60a5fa; color: #1d4ed8; background: rgba(96, 165, 250, 0.16); }

.layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 24px;
  align-items: start;
}

.main {
  min-width: 0;
  display: grid;
  gap: 12px;
}

.section {
  padding: 1rem 1.05rem;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);
}

.sectionTitle {
  margin: 0 0 10px;
  font-size: 1.1rem;
  letter-spacing: -0.01em;
}

.sectionText {
  margin: 0;
  line-height: 1.7;
  opacity: 0.95;
  color: #475569;
}

.sectionList {
  margin: 10px 0 0;
  padding-left: 18px;
  line-height: 1.7;
  opacity: 0.95;
  color: #475569;
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
  border: 1px solid #e5e7eb;
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
  display: grid;
  gap: 16px;
}

.sideBlock {
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1rem 1.05rem;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);
}

.sideTitle {
  margin: 0 0 12px;
  font-size: 1rem;
  font-weight: 700;
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
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  font-weight: 700;
  color: #0f172a;
}

.links {
  margin: 0;
  padding-left: 16px;
  display: grid;
  gap: 0.3rem;
}

.links a {
  text-decoration: none;
  border-bottom: 1px solid rgba(15, 23, 42, 0.2);
  color: #1d4ed8;
}

.links a:hover {
  border-bottom-color: #1d4ed8;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.gallery img {
  width: 100%;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
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

@media (prefers-color-scheme: dark) {
  .hero {
    background: linear-gradient(135deg, rgba(14,165,233,0.12), rgba(37,99,235,0.12));
    border-color: #1f2937;
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.35);
  }

  .subtitle {
    color: #cbd5e1;
  }

  .section,
  .sideBlock {
    background: rgba(15, 23, 42, 0.85);
    border-color: #1f2937;
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
  }

  .sectionText,
  .sectionList {
    color: #e2e8f0;
    opacity: 0.9;
  }

  .chip {
    background: rgba(255, 255, 255, 0.04);
    border-color: #1f2937;
    color: #e2e8f0;
  }

  .links a {
    color: #60a5fa;
    border-bottom-color: rgba(96, 165, 250, 0.35);
  }

  .links a:hover {
    border-bottom-color: #60a5fa;
  }

  .gallery img,
  .figure img {
    border-color: #1f2937;
  }
}
</style>

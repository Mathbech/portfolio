<script setup>
defineProps({
  title: String,
  description: String,
  context: String,
  cover: String,
  tech: { type: Array, default: () => [] }
})
</script>

<template>
  <article class="card">
    <img v-if="cover" :src="cover" :alt="title" class="cover" />
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <p class="context">{{ context }}</p>
      <p class="desc">{{ description }}</p>
      <ul class="tech">
        <li v-for="t in tech" :key="t">{{ t }}</li>
      </ul>
      <!-- <a class="btn" :href="`/projects/${title}`">Voir le projet</a> -->
    </div>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  gap: 0;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
  transition: transform 0.12s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.12);
  border-color: #cbd5e1;
}

.cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 4 / 3;
  background: #e2e8f0;
  border-bottom: 1px solid #e5e7eb;
}

.content {
  padding: 1rem 1.1rem;
  display: grid;
  gap: 0.35rem;
}

.title { margin: 0; font-size: 1.2rem; font-weight: 700; }
.context { font-size: .92rem; opacity: .7; margin: 0; }
.desc { opacity: .9; margin: 0; line-height: 1.55; }
.tech { display:flex; gap:.45rem; list-style:none; padding:0; margin:.45rem 0 .1rem; flex-wrap:wrap; }
.tech li {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: .75rem;
  line-height: 1.1;
  border: 1px solid #d7e3f4;
  border-radius: 999px;
  padding: .12rem .4rem;
  background: #f1f5f9;
  font-weight: 700;
  color: #0f172a;
  box-shadow: 0 3px 8px rgba(15, 23, 42, 0.05);
}

@media (max-width: 860px) { .card { grid-template-columns: 1fr; } }

@media (prefers-color-scheme: dark) {
  .card {
    background: rgba(15, 23, 42, 0.85);
    border-color: #1f2937;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
  }

  .cover {
    border-bottom-color: #1f2937;
  }

  .tech li {
    background: rgba(255, 255, 255, 0.04);
    border-color: #1f2937;
    color: #e2e8f0;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.28);
  }
}
</style>

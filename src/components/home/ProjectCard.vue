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
      <a class="btn" :href="`/projects/${title}`">Voir le projet</a>
    </div>
  </article>
</template>

<style scoped>
.card { border: 1px solid #eee; border-radius: .75rem; overflow: hidden; display: grid; grid-template-columns: 1fr 1.2fr; gap: 0; }
.cover { width: 100%; height: 100%; object-fit: cover; }
.content { padding: 1rem; }
.title { margin: 0 0 .25rem; font-size: 1.25rem; }
.context { font-size: .9rem; opacity: .7; margin-bottom: .4rem; }
.desc { opacity: .9; }
.tech { display:flex; gap:.4rem; list-style:none; padding:0; margin:.6rem 0 .9rem; flex-wrap:wrap; }
.tech li { font-size:.85rem; border:1px solid #ddd; border-radius:.4rem; padding:.2rem .45rem; }
.btn { display:inline-block; padding:.5rem .8rem; background:#111; color:#fff; border-radius:.5rem; text-decoration:none; }
@media (max-width: 860px) { .card { grid-template-columns: 1fr; } }
</style>

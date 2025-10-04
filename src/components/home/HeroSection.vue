<script setup>
const name = 'Mathieu Béchade'
const role = 'Développeur Fullstack Web & Mobile'
const punchline = 'Je conçois des applications web et mobiles modernes et performantes.'
</script>

<template>
  <div class="hero">
    <h1 class="title">{{ name }}</h1>
    <p class="subtitle">{{ role }}</p>
    <p class="tagline">{{ punchline }}</p>
    <div class="actions">
      <RouterLink to="/projects" class="btn">Voir mes projets</RouterLink>
      <RouterLink to="/contact" class="btn btn--ghost">Me contacter</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.hero { text-align: center; }
.title { font-size: 2.25rem; font-weight: 800; }
.subtitle { opacity: 0.9; margin-top: .25rem; }
.tagline { margin-top: .75rem; opacity: .85; }
.actions { margin-top: 1.25rem; display: flex; gap: .75rem; justify-content: center; }
.btn { padding: .6rem 1rem; border-radius: .5rem; background: #111; color: #fff; text-decoration: none; }
.btn--ghost { background: transparent; color: #111; border: 1px solid #111; }
</style>

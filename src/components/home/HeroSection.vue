<script setup>
const name = 'Mathieu Béchade'
const role = 'Développeur Web & Mobile'
const punchline = 'Je conçois des applications fiables, claires et utiles, du concept à la mise en production.'
</script>

<template>
  <div class="hero">
    <h1 class="title">{{ name }}</h1>
    <p class="subtitle">{{ role }}</p>
    <p class="tagline">{{ punchline }}</p>
    <div class="actions">
      <RouterLink to="/projects" class="btn btn--primary">Voir mes projets</RouterLink>
      <RouterLink to="/contact" class="btn btn--ghost">Me contacter</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.hero { text-align: center; }
.title { font-size: 2.25rem; font-weight: 800; }
.subtitle { opacity: 0.9; margin-top: .25rem; font-size: 1.1rem; }
.tagline { margin-top: .75rem; opacity: .9; font-size: 1.05rem; }

.actions {
  margin-top: 1.25rem;
  display: flex;
  gap: .75rem;
  justify-content: center;
}

/* Bouton principal */
.btn {
  padding: .6rem 1rem;
  border-radius: .5rem;
  text-decoration: none;
  transition: background .2s ease, color .2s ease, border-color .2s ease;
}

.btn--primary {
  background: #2563eb;
  color: #fff;
  border: 1px solid #2563eb;
}
.btn--primary:hover {
  background: #3b82f6;
}

/* Bouton secondaire (ghost) corrigé pour dark mode */
.btn--ghost {
  background: transparent;
  color: #2563eb;
  border: 1px solid #2563eb;
}
.btn--ghost:hover {
  background: rgba(37, 99, 235, 0.08);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .btn--primary {
    background: #3b82f6;
    border-color: #3b82f6;
    color: #0b1220;
  }
  .btn--primary:hover {
    background: #60a5fa;
  }

  .btn--ghost {
    color: #60a5fa;
    border-color: #60a5fa;
  }
  .btn--ghost:hover {
    background: rgba(96,165,250,.08);
  }
}
</style>

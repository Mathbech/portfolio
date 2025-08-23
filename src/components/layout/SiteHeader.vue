<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="site-header">
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/about">À propos</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/mentions-legales">Mentions légales</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.site-header { background:#111; padding:1rem; }
nav { display:flex; gap:1rem; }
a { color:#fff; text-decoration:none; }
a.router-link-active { text-decoration:underline; }
</style>

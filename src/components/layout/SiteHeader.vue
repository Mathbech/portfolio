<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="site-header">
    <div class="bar">
      <RouterLink to="/" class="brand" aria-label="Retour à l'accueil">
        <span class="brand-dot" aria-hidden="true"></span>
        <span>Mathieu Béchade</span>
      </RouterLink>

      <nav class="nav" aria-label="Navigation principale">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/about">À propos</RouterLink>
        <RouterLink to="/projects">Projets</RouterLink>
      </nav>

      <RouterLink to="/contact" class="contact-link">Contact</RouterLink>
    </div>
  </header>
</template>

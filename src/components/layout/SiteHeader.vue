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

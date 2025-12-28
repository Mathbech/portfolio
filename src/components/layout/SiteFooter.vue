<script setup>
import { RouterLink } from 'vue-router'
import { links } from '@/data/contact'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-shell">
      <div class="footer-brand">
        <span class="footer-dot" aria-hidden="true"></span>
        <div>
          <p class="footer-name">Mathieu Béchade</p>
          <p class="footer-tagline">Développeur web & mobile</p>
        </div>
      </div>

      <nav class="footer-nav" aria-label="Navigation pied de page">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/about">À propos</RouterLink>
        <RouterLink to="/projects">Projets</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

      <div class="footer-meta">
        <div class="footer-social">
          <a :href="links.github" target="_blank" rel="noopener" aria-label="GitHub (nouvel onglet)">GitHub</a>
          <a :href="links.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn (nouvel onglet)">LinkedIn</a>
        </div>
        <p class="footer-copy">© {{ year }} Bebech</p>
      </div>
    </div>
  </footer>
</template>

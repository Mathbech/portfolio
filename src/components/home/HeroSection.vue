<script setup>
const name = 'Mathieu Béchade'
const punchline =
  'Je conçois des applications fiables, claires et utiles, du concept à la mise en production.'
</script>

<template>
  <div class="hero">
    <div class="hero__content">
      <p class="eyebrow">Développeur web & mobile</p>
      <h1 class="title">{{ name }}</h1>
      <p class="tagline">{{ punchline }}</p>
      <div class="hero__tags">
        <span class="pill">Symfony & API Platform</span>
        <span class="pill">Flutter</span>
        <span class="pill">Apps métier orientées usage</span>
      </div>
      <div class="actions">
        <RouterLink to="/projects" class="btn primary">Voir mes projets</RouterLink>
        <RouterLink to="/contact" class="btn ghost">Me contacter</RouterLink>
      </div>
    </div>

    <div class="hero__panel" aria-label="Infos rapides">
      <div class="panel__item">
        <span class="dot dot--blue" aria-hidden="true"></span>
        <div>
          <p class="panel__label">Stack</p>
          <p class="panel__value">Symfony, Flutter, Node.js</p>
        </div>
      </div>
      <div class="panel__item">
        <span class="dot dot--green" aria-hidden="true"></span>
        <div>
          <p class="panel__label">Approche</p>
          <p class="panel__value">
            Sobriété côté design, pipelines auto pour livrer souvent, produits polis et utiles.
          </p>
        </div>
      </div>
      <div class="panel__item">
        <span class="dot dot--purple" aria-hidden="true"></span>
        <div>
          <p class="panel__label">Contexte</p>
          <p class="panel__value">
            Actuellement focus sur projets perso, pas de freelance en cours.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./HeroSection.css"></style>

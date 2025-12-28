<script setup>
const text = `Passionné par le développement d’applications utiles et bien pensées, je travaille aujourd’hui chez Lije-Technologies sur i-Topo, une solution de gestion de chantiers utilisée par de nombreux professionnels du TP.
J’interviens principalement sur la partie client et contribue à l’évolution de l’interface administrateur pour améliorer l’expérience utilisateur.

Au cours de ma formation, j’ai mené plusieurs projets, dont Beaup’orientation (application de gestion de courses d’orientation, réalisée dans le cadre de mon bachelor) et FilamentGestion, un projet d’études que je fais évoluer dans l’objectif de le commercialiser sous ma propre auto-entreprise.

Mon objectif : concevoir des outils fiables, intuitifs et réellement utiles aux utilisateurs.`;
</script>

<template>
  <div class="about">
    <div class="about-card">
      <p class="eyebrow">Qui je suis</p>
      <h2>À propos</h2>
      <!-- Le style CSS preserve-whitespace gère les \n -->
      <p class="multiline">{{ text }}</p>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  justify-content: center;
}

.about-card {
  width: min(100%, 900px);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #e5e7eb;
  border-radius: 1.1rem;
  padding: 1.4rem 1.6rem;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.06);
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.78rem;
  color: #0ea5e9;
  font-weight: 700;
  margin: 0 0 0.2rem;
}

h2 {
  font-size: 1.55rem;
  margin: 0 0 0.75rem;
}

.multiline {
  white-space: pre-line; /* <= garde les retours à la ligne */
  line-height: 1.75;
  opacity: .95;
  font-size: 1.05rem;
  text-align: justify;
}

@media (prefers-color-scheme: dark) {
  .about-card {
    background: rgba(15, 23, 42, 0.85);
    border-color: #1f2937;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
  }

  .multiline {
    color: #e2e8f0;
    opacity: 0.9;
  }
}
</style>

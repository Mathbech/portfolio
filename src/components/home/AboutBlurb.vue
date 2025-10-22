<script setup>
const text = `Passionné par le développement d’applications utiles et bien pensées, je travaille aujourd’hui chez Lije-Technologies sur i-Topo, une solution de gestion de chantiers utilisée par de nombreux professionnels du TP.
J’interviens principalement sur la partie client et contribue à l’évolution de l’interface administrateur pour améliorer l’expérience utilisateur.

Au cours de ma formation, j’ai mené plusieurs projets, dont Beaup’orientation (application de gestion de courses d’orientation, réalisée dans le cadre de mon bachelor) et FilamentGestion, un projet d’études que je fais évoluer dans l’objectif de le commercialiser sous ma propre auto-entreprise.

Mon objectif : concevoir des outils fiables, intuitifs et réellement utiles aux utilisateurs.`;
</script>

<template>
  <div class="about">
    <h2>À propos</h2>
    <!-- Le style CSS preserve-whitespace gère les \n -->
    <p class="multiline">{{ text }}</p>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  margin-bottom: .75rem;
}

.multiline {
  white-space: pre-line; /* <= garde les retours à la ligne */
  line-height: 1.7;
  opacity: .95;
  font-size: 1.05rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
}
</style>

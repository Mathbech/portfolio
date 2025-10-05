<script setup>
const text = `Je travaille actuellement chez Lije-Technologies, l’entreprise qui développe i-Topo, une application de gestion de chantiers utilisée par de nombreux professionnels du BTP.
J’y participe au développement et à l’évolution de la plateforme, principalement sur la partie client, tout en ayant contribué à l’amélioration de l’interface administrateur.
En parallèle, j’ai réalisé plusieurs projets personnels et scolaires, dont Beaup’orientation (gestion de courses d’orientation) et FilamentGestion (application de gestion de stocks pour l’impression 3D).
Je m’efforce de créer des solutions fiables, claires et adaptées aux besoins réels des utilisateurs.`
</script>

<template>
  <div class="about">
    <h2>À propos</h2>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  margin-bottom: .75rem;
}

p {
  line-height: 1.7;
  opacity: .95;
  font-size: 1.05rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
}
</style>

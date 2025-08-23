<script setup>
const text = `Passionné par le développement, j’ai travaillé sur des projets variés :
i-Topo (pro), Beaup’orientation (scolaire) et FilamentGestion (perso).
Mon objectif : transformer vos idées en solutions concrètes.`
</script>

<template>
  <div class="about">
    <h2>À propos</h2>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
h2 { font-size: 1.5rem; margin-bottom: .75rem; }
p { line-height: 1.6; opacity: .9; }
</style>

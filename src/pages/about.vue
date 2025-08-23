<script setup>
// Ici tu peux charger des données, CV, etc.
const skills = [
  "Symfony / API Platform",
  "Flutter",
  "Node.js / Discord.js",
  "AWS (Lightsail, S3, CloudFront)",
  "MySQL / MariaDB",
];
</script>

<template>
  <section class="about">
    <h1>À propos de moi</h1>
    <p>
      Bonjour ! Je suis Mathieu, développeur full‑stack. Je bosse sur
      FilamentGestion, Beaup’orientation et i‑Topo. J’aime les stacks propres,
      la perf, et l’automatisation.
    </p>

    <h2>Compétences clés</h2>
    <ul>
      <li v-for="s in skills" :key="s">{{ s }}</li>
    </ul>

    <h2>Contact</h2>
    <p>
      Me contacter : <a href="mailto:contact@bebech.fr">contact@bebech.fr</a>
    </p>
  </section>
</template>

<style scoped>
.about { max-width: 800px; margin: 2rem auto; padding: 0 1rem; line-height: 1.6; }
h1 { font-size: 2rem; margin-bottom: .5rem; }
h2 { margin-top: 1.5rem; }
ul { padding-left: 1.25rem; }
a { text-decoration: none; border-bottom: 1px solid currentColor; }
</style>

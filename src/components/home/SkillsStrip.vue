<script setup>
const skills = [
    { label: 'Symfony' },
    { label: 'API Platform' },
    { label: 'Flutter' },
    { label: 'Node.js' },
    { label: 'MySQL/MariaDB' },
    { label: 'Docker' },
    { label: 'AWS' },
    { label: 'Apache' },
    { label: 'Git' },
    { label: 'Discord js' }
]
</script>

<template>
  <div>
    <h2>Compétences</h2>
    <p class="intro">Stack moderne pour créer des solutions robustes et évolutives.</p>
    <ul class="skills">
      <li v-for="s in skills" :key="s.label" class="skill">{{ s.label }}</li>
    </ul>
  </div>
</template>

<style scoped>
h2 { font-size: 1.5rem; margin-bottom: .25rem; }
.intro { margin-bottom: .75rem; opacity: .85; }
.skills { display: flex; flex-wrap: wrap; gap: .5rem; padding: 0; list-style: none; }
.skill { padding: .4rem .6rem; border: 1px solid #ddd; border-radius: .5rem; }
</style>

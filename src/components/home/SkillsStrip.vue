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
  <div class="skills-block surface-card">
    <div class="header">
      <p class="eyebrow">Compétences</p>
      <h2>Stack utilisée</h2>
      <p class="intro">Stack moderne pour créer des solutions robustes et évolutives.</p>
    </div>
    <ul class="skills">
      <li v-for="s in skills" :key="s.label" class="skill">{{ s.label }}</li>
    </ul>
  </div>
</template>

<style scoped src="./SkillsStrip.css"></style>

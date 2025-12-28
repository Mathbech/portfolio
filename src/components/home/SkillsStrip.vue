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
  <div class="skills-block">
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

<style scoped>
.skills-block {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #e5e7eb;
  border-radius: 1.1rem;
  padding: 1.4rem 1.6rem;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.06);
}

.header {
  margin-bottom: 0.85rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.78rem;
  color: #0ea5e9;
  font-weight: 700;
  margin: 0 0 0.2rem;
}

h2 { font-size: 1.5rem; margin: 0 0 .25rem; }
.intro { margin: 0; opacity: .85; }
.skills { display: flex; flex-wrap: wrap; gap: .55rem; padding: 0; list-style: none; margin: 0; }
.skill {
  padding: .45rem .7rem;
  border: 1px solid #e2e8f0;
  border-radius: .65rem;
  background: #f8fafc;
  font-weight: 600;
  color: #0f172a;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.05);
}

@media (prefers-color-scheme: dark) {
  .skills-block {
    background: rgba(15, 23, 42, 0.85);
    border-color: #1f2937;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
  }

  .skill {
    background: rgba(255, 255, 255, 0.04);
    border-color: #1f2937;
    color: #e2e8f0;
  }
}
</style>

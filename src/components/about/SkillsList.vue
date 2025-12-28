<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<template>
  <section class="skills">
    <h2>Compétences</h2>
    <ul>
      <li v-for="s in items" :key="s">{{ s }}</li>
    </ul>
  </section>
</template>

<style scoped>
.skills {
  max-width: 980px;
  margin: 1.5rem auto;
  padding: 1.2rem 1.4rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.06);
}

ul {
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.4rem 0 0;
}

li {
  padding: 0.45rem 0.75rem;
  border-radius: 0.65rem;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  font-weight: 600;
  color: #0f172a;
}

@media (prefers-color-scheme: dark) {
  .skills {
    background: rgba(15, 23, 42, 0.85);
    border-color: #1f2937;
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
  }

  li {
    background: rgba(255, 255, 255, 0.04);
    border-color: #1f2937;
    color: #e2e8f0;
  }
}
</style>

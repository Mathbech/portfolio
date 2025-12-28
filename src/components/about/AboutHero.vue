<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>()
</script>

<template>
  <section class="hero">
    <h1>{{ title }}</h1>
    <p v-if="subtitle">{{ subtitle }}</p>
  </section>
</template>

<style scoped>
.hero {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: .5rem;
}

p {
  color: #555;
  line-height: 1.7;
  white-space: pre-line; /* respecte les retours à la ligne */
}
</style>

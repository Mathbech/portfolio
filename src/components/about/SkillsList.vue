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
.skills { max-width: 900px; margin: 1.5rem auto; padding: 0 1rem; }
ul { padding-left: 1.25rem; }
</style>

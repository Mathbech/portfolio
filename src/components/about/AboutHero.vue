<script setup lang="ts">
defineProps<{
  title: string,
  subtitle?: string
}>()
</script>

<template>
  <section class="hero">
    <h1>{{ title }}</h1>
    <p v-if="subtitle">{{ subtitle }}</p>
  </section>
</template>

<style scoped src="./AboutHero.css"></style>

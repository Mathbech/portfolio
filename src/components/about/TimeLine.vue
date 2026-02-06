<script setup lang="ts">
const props = defineProps<{ items: { year: string; title: string; desc?: string }[] }>()
</script>

<template>
  <section class="timeline surface-card">
    <h2>Parcours</h2>
    <ol>
      <li v-for="(e, i) in props.items" :key="i" class="timeline-item">
        <div class="year">{{ e.year }}</div>
        <div class="content">
          <h3>{{ e.title }}</h3>
          <p v-if="e.desc">{{ e.desc }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped src="./TimeLine.css"></style>

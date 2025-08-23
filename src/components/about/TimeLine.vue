<script setup lang="ts">
type Item = { year: string; title: string; desc?: string }
defineProps<{ items: Item[] }>()
</script>

<template>
  <section class="timeline">
    <h2>Parcours</h2>
    <ol>
      <li v-for="(e, i) in items" :key="i">
        <strong>{{ e.year }}</strong> — {{ e.title }}
        <span v-if="e.desc">: {{ e.desc }}</span>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.timeline { max-width: 900px; margin: 1.5rem auto; padding: 0 1rem; }
ol { list-style: none; padding: 0; }
li { padding: .5rem 0; border-left: 2px solid #eee; margin-left: 1rem; padding-left: 1rem; }
strong { margin-right: .5rem; }
</style>

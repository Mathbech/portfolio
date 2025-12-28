<script setup lang="ts">
const props = defineProps<{ items: { year: string, title: string, desc?: string }[] }>()
</script>

<template>
  <section class="timeline">
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

<style scoped>
.timeline {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
  position: relative;
}

.timeline h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  font-weight: 700;
  color: #bbbbbb;
}

ol {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.timeline-item {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  border-left: 2px solid #ddd;
  padding-left: 1rem;
  margin-left: 1rem;
  margin-bottom: 1.25rem;
  position: relative;
  transition: all 0.2s ease-in-out;
}

.timeline-item:hover {
  border-color: #007bff;
  transform: translateX(2px);
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -6px;
  top: 0.7rem;
  width: 10px;
  height: 10px;
  background: #007bff;
  border-radius: 50%;
  transition: background 0.2s ease-in-out;
}

.timeline-item:hover::before {
  background: #0056b3;
}

.year {
  font-weight: 700;
  color: #007bff;
  min-width: 100px;
  font-size: 1rem;
}

.content {
  flex: 1;
}

.content h3 {
  font-size: 1.1rem;
  margin: 0;
  color: #dadada;
}

.content p {
  margin: 0.3rem 0 0;
  opacity: 0.85;
  line-height: 1.4;
}

@media (max-width: 600px) {
  .timeline-item {
    flex-direction: column;
    margin-left: 0.5rem;
    padding-left: 0.75rem;
  }
  .year {
    min-width: unset;
  }
}
</style>

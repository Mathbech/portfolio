<script setup lang="ts">
type SkillLevel = 'maitrise' | 'perfectionnement' | 'apprentissage'

type SkillItem = {
  name: string
  levels: SkillLevel[]
}

const levelLabels: Record<SkillLevel, string> = {
  maitrise: 'Maîtrisé',
  perfectionnement: 'En perfectionnement',
  apprentissage: 'En apprentissage'
}

defineProps<{ items: SkillItem[] }>()
</script>

<template>
  <section class="skills surface-card">
    <h2>Compétences</h2>
    <ul>
      <li v-for="s in items" :key="s.name">
        <span class="skill-name">{{ s.name }}</span>
        <span class="skill-levels">
          <span
            v-for="lvl in s.levels"
            :key="lvl"
            class="skill-level"
            :class="`level-${lvl}`"
          >
            {{ levelLabels[lvl] }}
          </span>
        </span>
      </li>
    </ul>
  </section>
</template>

<style scoped src="./SkillsList.css"></style>

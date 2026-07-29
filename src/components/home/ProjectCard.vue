<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  title: String,
  description: String,
  context: String,
  cover: String,
  tech: { type: Array, default: () => [] },
  slug: String,
  link: String,
})

const router = useRouter()

const goToDetails = () => {
  if (!props.slug) return
  router.push({ name: 'project-details', params: { slug: props.slug } })
}
</script>

<template>
  <article
    class="card surface-card"
    :class="{ clickable: props.slug }"
    :tabindex="props.slug ? 0 : undefined"
    :role="props.slug ? 'link' : undefined"
    @click="props.slug && goToDetails()"
    @keydown.enter="props.slug && goToDetails()"
    @keydown.space.prevent="props.slug && goToDetails()"
  >
    <img v-if="props.cover" :src="props.cover" :alt="props.title" class="cover" />
    <div class="content">
      <h3 class="title">{{ props.title }}</h3>
      <p class="context">{{ props.context }}</p>
      <p class="desc">{{ props.description }}</p>
      <ul class="tech tag-list">
        <li v-for="t in props.tech" :key="t" class="tag">{{ t }}</li>
      </ul>
      <div v-if="props.link" class="actions" @click.stop @keydown.enter.stop @keydown.space.stop>
        <a
          :href="props.link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="props.link.includes('github') ? 'Ouvrir le dépôt GitHub' : 'Ouvrir le site'"
        >
          {{ props.link.includes('github') ? 'Voir le repo' : 'Voir le site' }}
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped src="./ProjectCard.css"></style>

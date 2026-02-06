<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  title: String,
  description: String,
  context: String,
  cover: String,
  tech: { type: Array, default: () => [] },
  slug: String,
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
      <ul class="tech">
        <li v-for="t in props.tech" :key="t">{{ t }}</li>
      </ul>
    </div>
  </article>
</template>

<style scoped src="./ProjectCard.css"></style>

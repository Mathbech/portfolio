<script setup>
defineProps({
  as: { type: String, default: 'section' }
})
</script>

<template>
  <component :is="as" class="container">
    <slot />
  </component>
</template>

<style scoped>
.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 1rem;
}
</style>

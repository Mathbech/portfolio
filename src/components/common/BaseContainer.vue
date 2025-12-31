<script setup>
defineProps({
  as: { type: String, default: 'section' }
})
</script>

<template>
  <component :is="as" class="container section-shell">
    <slot />
  </component>
</template>

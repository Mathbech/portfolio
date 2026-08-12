<script setup lang="ts">
import { formatDuration } from '@/utils/timeline'

const props = defineProps<{ period: string }>()
</script>

<template>
  <span v-if="formatDuration(props.period)" class="duration-badge"
    >({{ formatDuration(props.period) }})</span
  >
</template>

<style scoped src="./DurationBadge.css"></style>

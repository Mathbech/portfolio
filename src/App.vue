<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
</script>

<template>
  <div id="layout">
    <SiteHeader />
    <main><RouterView /></main>
    <SiteFooter />
  </div>
</template>

<style scoped>
#layout { min-height: 100vh; display: flex; flex-direction: column; }
main { flex: 1; padding: 2rem; }
</style>

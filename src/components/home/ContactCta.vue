<script setup>
const line = 'Vous cherchez un développeur motivé pour vos projets ?'
</script>

<template>
  <div class="cta">
    <h2>{{ line }}</h2>
    <div class="actions">
      <a href="/contact" class="btn">Me contacter</a>
      <a href="https://github.com/Mathbech" target="_blank" rel="noopener" class="btn btn--ghost">GitHub</a>
    </div>
  </div>
</template>

<style scoped>
.cta { text-align:center; border:1px solid #eee; border-radius:.75rem; padding:2rem; }
.actions { margin-top: .75rem; display:flex; gap:.6rem; justify-content:center; flex-wrap:wrap; }
.btn { padding: .6rem 1rem; border-radius: .5rem; background: #111; color: #fff; text-decoration: none; }
.btn--ghost { background: transparent; color: #fff; border: 1px solid #111; }
</style>

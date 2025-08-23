<script setup>
const props = defineProps({
  line: {
    type: String,
    default: 'Vous cherchez un développeur motivé pour vos projets ?'
  },
  contactHref: {
    type: String,
    default: '/contact'
  },
  githubHref: {
    type: String,
    // ⬇️ Mets ton GitHub ici
    default: 'https://github.com/ton-github'
  }
})
</script>

<template>
  <section class="cta" aria-labelledby="contact-cta-title">
    <h2 id="contact-cta-title">{{ props.line }}</h2>

    <div class="actions">
      <a :href="props.contactHref" class="btn btn--primary">Me contacter</a>

      <a
        :href="props.githubHref"
        target="_blank"
        rel="noopener"
        class="btn btn--primary"
        aria-label="Voir mon profil GitHub (nouvel onglet)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="icon"
          aria-hidden="true"
        >
          <path
            d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.8 1.8-1.2.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.2 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.8.9.8 1.9v2.9c0 .3.2.7.8.6 4.6-1.5 7.9-5.9 7.9-10.9C23.5 5.73 18.27.5 12 .5z"
          />
        </svg>
        GitHub
      </a>
    </div>
  </section>
</template>

<style scoped>
.cta {
  text-align: center;
  border: 1px solid #eee;
  border-radius: .75rem;
  padding: 2rem;
}

h2 {
  margin: 0;
  font-size: 1.4rem;
  line-height: 1.35;
}

.actions {
  margin-top: .9rem;
  display: flex;
  gap: .6rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: .45rem;
  padding: .6rem 1rem;
  border-radius: .55rem;
  text-decoration: none;
  transition: transform .08s ease, background .18s ease, color .18s ease, border-color .18s ease;
  border: 1px solid transparent;
}

.btn:active { transform: translateY(1px); }

.btn--primary {
  background: #111;
  color: #fff;
  border-color: #111;
}
.btn--primary:hover,
.btn--primary:focus-visible {
  background: #000;
  border-color: #000;
  outline: none;
}

.icon {
  display: inline-block;
  vertical-align: middle;
}
</style>

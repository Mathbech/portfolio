<template>
  <section class="contact">
    <header class="hero">
      <h1>Contact</h1>
      <p class="subtitle">Besoin d'échanger ? Voici tous les moyens pour me joindre rapidement.</p>
    </header>

    <QuickActions />

    <div class="cards">
      <!-- Carte E-mail -->
      <article class="card">
        <h2 class="card-title">E-mail</h2>
        <p>
          <a :href="`mailto:${email}?subject=${encodeURIComponent(defaultSubject)}`" class="link">{{ email }}</a>
        </p>
        <small>Réponse généralement sous 24–48 h ouvrées.</small>
      </article>

      <!-- Carte Réseaux -->
      <article class="card">
        <h2 class="card-title">Réseaux</h2>
        <ul class="list">
          <li><a :href="links.github" target="_blank" rel="noopener" class="link">GitHub</a></li>
          <li><a :href="links.linkedin" target="_blank" rel="noopener" class="link">LinkedIn</a></li>
          <li v-if="links.discord"><a :href="links.discord" target="_blank" rel="noopener" class="link">Discord</a></li>
        </ul>
      </article>

      <!-- Carte FilamentGestion -->
      <article class="card">
        <h2 class="card-title"><span class="emoji" aria-hidden="true">🧵</span> {{ filamentGestion.name }}</h2>
        <p><strong>{{ filamentGestion.tagline }}</strong></p>
        <p class="muted">{{ filamentGestion.description }}</p>
        <p v-if="filamentGestion.siteUrl">
          👉 <a :href="filamentGestion.siteUrl" target="_blank" rel="noopener" class="link">Site vitrine</a>
        </p>
      </article>
    </div>

    <aside class="notice" aria-label="Informations d'utilisation des données">
      <p>Les informations envoyées par e-mail sont utilisées uniquement pour te répondre. Pas de newsletter, pas de
        revente.</p>
    </aside>
  </section>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount } from 'vue'
import QuickActions from '@/components/contact/QuickActions.vue'
import { email, defaultSubject, links, siteUrl, person, filamentGestion } from '@/data/contact'
import '@/assets/contact.css'

/* JSON-LD SEO (injection <head>) */
const jsonLd = computed(() => JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  'mainEntity': {
    '@type': 'Person',
    'name': `${person.firstName} ${person.lastName}`,
    'email': email,
    'url': siteUrl,
    'sameAs': [links.github, links.linkedin].filter(Boolean)
  }
}))

let ldNode
onMounted(() => {
  ldNode = document.createElement('script')
  ldNode.type = 'application/ld+json'
  ldNode.text = jsonLd.value
  document.head.appendChild(ldNode)
})
onBeforeUnmount(() => {
  if (ldNode?.parentNode) ldNode.parentNode.removeChild(ldNode)
})
</script>

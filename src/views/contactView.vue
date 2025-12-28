<template>
  <section class="contact">
    <div class="contact-shell">
      <header class="hero" aria-label="Présentation de la page de contact">
        <div class="hero-text">
          <p class="eyebrow">Contact</p>
          <h1>Un échange clair, rapide.</h1>
          <p class="subtitle">Envoie-moi quelques lignes de contexte et j'ébauche une réponse sous 24–48 h ouvrées.</p>
          <div class="hero-meta">
            <span class="pill">E-mail prioritaire</span>
            <span class="pill">Réseaux ouverts</span>
            <span class="pill">vCard téléchargeable</span>
          </div>
        </div>

        <div class="hero-panel" aria-label="Coordonnées directes">
          <p class="panel-label">Coordonnées directes</p>
          <p class="panel-email">
            <a :href="`mailto:${email}?subject=${encodeURIComponent(defaultSubject)}`" class="link">{{ email }}</a>
          </p>
          <p class="panel-note">Un paragraphe sur le besoin suffit pour avancer : projet, contraintes, livrables.</p>
          <div class="hero-links">
            <a :href="links.github" target="_blank" rel="noopener" class="chip">GitHub</a>
            <a :href="links.linkedin" target="_blank" rel="noopener" class="chip">LinkedIn</a>
            <a v-if="links.discord" :href="links.discord" target="_blank" rel="noopener" class="chip">Discord</a>
          </div>
        </div>
      </header>

      <div class="quick-actions-surface" aria-label="Actions rapides">
        <QuickActions />
      </div>

      <div class="cards">
        <!-- Carte E-mail -->
        <article class="card">
          <p class="card-kicker">Canal principal</p>
          <h2 class="card-title">E-mail</h2>
          <p>Pour une demande pro ou un retour sur mes projets, privilégie l'e-mail : je peux répondre avec des détails et des pistes concrètes.</p>
          <ul class="list bullets">
            <li>Réponse en 24–48 h ouvrées</li>
            <li>Objet prérempli pour aller droit au but</li>
            <li>vCard disponible ci-dessus</li>
          </ul>
        </article>

        <!-- Carte Réseaux -->
        <article class="card">
          <p class="card-kicker">Suivre & échanger</p>
          <h2 class="card-title">Réseaux</h2>
          <ul class="list links-list">
            <li><a :href="links.github" target="_blank" rel="noopener" class="link">GitHub</a></li>
            <li><a :href="links.linkedin" target="_blank" rel="noopener" class="link">LinkedIn</a></li>
            <li v-if="links.discord"><a :href="links.discord" target="_blank" rel="noopener" class="link">Discord</a></li>
          </ul>
          <p class="muted">Passe en message privé si tu préfères un échange court avant de basculer sur l'e-mail.</p>
        </article>

        <!-- Carte FilamentGestion -->
        <article class="card card--highlight">
          <p class="card-kicker">Côté perso</p>
          <h2 class="card-title"><span class="emoji" aria-hidden="true">🧵</span> {{ filamentGestion.name }}</h2>
          <p><strong>{{ filamentGestion.tagline }}</strong></p>
          <p class="muted">{{ filamentGestion.description }}</p>
          <p v-if="filamentGestion.siteUrl" class="highlight-link">
            <a :href="filamentGestion.siteUrl" target="_blank" rel="noopener" class="link">Découvrir le site</a>
          </p>
        </article>
      </div>

      <aside class="notice" aria-label="Informations d'utilisation des données">
        <p>Les informations envoyées par e-mail sont utilisées uniquement pour te répondre. Pas de newsletter, pas de revente.</p>
      </aside>
    </div>
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

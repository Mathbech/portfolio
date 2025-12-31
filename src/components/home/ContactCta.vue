<script setup>
const props = defineProps({
  line: {
    type: String,
    // ► Message centré “projets”, pas de promesse de presta
    default: "Envie d’en savoir plus sur mes projets ?"
  },
  projectsHref: {
    type: String,
    default: "/projects" // adapte si ta route diffère
  },
  contactHref: {
    type: String,
    default: "/contact"
  },
  githubHref: {
    type: String,
    // ton GitHub
    default: "https://github.com/Mathbech"
  },
  // Si tu veux masquer/afficher certains boutons
  showProjects: { type: Boolean, default: true },
  showGithub:   { type: Boolean, default: true },
  showContact:  { type: Boolean, default: true },
})
</script>

<template>
  <section class="cta" aria-labelledby="contact-cta-title">
    <h2 id="contact-cta-title">{{ props.line }}</h2>

    <div class="actions">
      <RouterLink
        v-if="props.showProjects"
        :to="props.projectsHref"
        class="btn btn--primary"
        aria-label="Voir mes projets"
      >
        Voir mes projets
      </RouterLink>

      <a
        v-if="props.showGithub"
        :href="props.githubHref"
        target="_blank"
        rel="noopener"
        class="btn btn--secondary"
        aria-label="Voir mon profil GitHub (nouvel onglet)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="icon" aria-hidden="true">
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.8 1.8-1.2.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.2 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.8.9.8 1.9v2.9c0 .3.2.7.8.6 4.6-1.5 7.9-5.9 7.9-10.9C23.5 5.73 18.27.5 12 .5z"/>
        </svg>
        GitHub
      </a>
    </div>

    <p v-if="props.showContact" class="subtext">
      Une question ? <RouterLink :to="props.contactHref" class="link">Contactez-moi</RouterLink>
    </p>
  </section>
</template>

<style scoped src="./ContactCta.css"></style>

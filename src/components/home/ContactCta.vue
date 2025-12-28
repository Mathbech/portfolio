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

<style scoped>
.cta {
  text-align: center;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.6rem;
  background: linear-gradient(135deg, #ecfeff, #eef2ff);
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.08);
}

h2 {
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.35;
}

.actions {
  margin-top: 1rem;
  display: flex;
  gap: .6rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: .45rem;
  padding: .65rem 1rem;
  border-radius: .75rem;
  text-decoration: none;
  transition: transform .08s ease, background .18s ease, color .18s ease, border-color .18s ease, box-shadow .18s ease;
  border: 1px solid #d7dde5;
  font-weight: 700;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
}

.btn:active { transform: translateY(1px); }

/* Cohérent avec le bouton bleu du site */
.btn--primary {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #fff;
  border-color: #2563eb;
}
.btn--primary:hover,
.btn--primary:focus-visible {
  background: linear-gradient(135deg, #1d4ed8, #1e40af);
  border-color: #3b82f6;
  outline: none;
  box-shadow: 0 14px 30px rgba(37, 99, 235, 0.2);
}

.btn--secondary {
  background: transparent;
  color: #1d4ed8;
  border-color: #bfdbfe;
}
.btn--secondary:hover,
.btn--secondary:focus-visible {
  background: rgba(37, 99, 235, 0.08);
  outline: none;
}

.icon { display: inline-block; vertical-align: middle; }

/* dark mode */
@media (prefers-color-scheme: dark) {
  .cta { border-color: #1f2937; background: linear-gradient(135deg, rgba(14,165,233,0.12), rgba(37,99,235,0.12)); box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35); }
  .btn { background: linear-gradient(180deg, #0f172a, #0b1220); color: #e2e8f0; border-color: #1f2937; }
  .btn--secondary { color: #60a5fa; border-color: #334155; }
  .btn--secondary:hover { background: rgba(96,165,250,.08); border-color: #475569; }
}
.subtext { margin-top: .6rem; color: #64748b; }
.link { color: #2563eb; text-decoration: none; }
.link:hover { text-decoration: underline; }
</style>

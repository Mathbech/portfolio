<template>
  <div class="quick-actions">
    <!-- Anchor plutôt que JS pour mailto (plus fiable) -->
    <a class="btn primary" :href="mailtoHref">
      <span class="icon" aria-hidden="true">✉️</span>
      Écrire un e-mail
    </a>

    <button class="btn" @click="copyEmail">
      <span class="icon" aria-hidden="true">📋</span>
      Copier l’adresse e-mail
    </button>

    <a class="btn" :href="vcardHref" :download="`${person.firstName}-${person.lastName}.vcf`">
      <span class="icon" aria-hidden="true">📇</span>
      Ajouter à mes contacts (vCard)
    </a>
  </div>

  <p v-if="copied" class="copy-toast" role="status">Adresse e-mail copiée ✅</p>
</template>

<script setup>
import { computed, ref } from 'vue'
import { email, defaultSubject, siteUrl, person } from '@/data/contact'

const mailtoHref = computed(() => `mailto:${email}?subject=${encodeURIComponent(defaultSubject)}`)

// vCard téléchargeable
const vcard = computed(
  () =>
    `BEGIN:VCARD
VERSION:3.0
N:${person.lastName};${person.firstName};;;
FN:${person.firstName} ${person.lastName}
EMAIL;TYPE=work:${email}
URL:${siteUrl}
END:VCARD`,
)
const vcardHref = computed(() => `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard.value)}`)

// Copier l'email
const copied = ref(false)
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    window.prompt('Copie manuelle : Ctrl+C puis Entrée', email)
  }
}
</script>

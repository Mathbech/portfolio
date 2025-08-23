<script setup>
import BaseContainer from '@/components/common/BaseContainer.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import AboutBlurb from '@/components/home/AboutBlurb.vue'
import SkillsStrip from '@/components/home/SkillsStrip.vue'
import ProjectsFeatured from '@/components/home/ProjectsFeatured.vue'
import ContactCta from '@/components/home/ContactCta.vue'
</script>

<template>
  <BaseContainer as="section" aria-label="Hero">
    <HeroSection />
  </BaseContainer>

  <BaseContainer as="section" aria-label="À propos">
    <AboutBlurb />
  </BaseContainer>

  <BaseContainer as="section" aria-label="Compétences">
    <SkillsStrip />
  </BaseContainer>

  <BaseContainer as="section" aria-label="Projets">
    <ProjectsFeatured />
  </BaseContainer>

  <BaseContainer as="section" aria-label="Contact">
    <ContactCta />
  </BaseContainer>
</template>

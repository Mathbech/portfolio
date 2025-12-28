<script setup>
const name = 'Mathieu Béchade'
const role = 'Développeur Web & Mobile'
const punchline = 'Je conçois des applications fiables, claires et utiles, du concept à la mise en production.'
</script>

<template>
  <div class="hero">
    <div class="hero__content">
      <p class="eyebrow">Développeur web & mobile</p>
      <h1 class="title">{{ name }}</h1>
      <p class="tagline">{{ punchline }}</p>
      <div class="hero__tags">
        <span class="pill">Symfony & API Platform</span>
        <span class="pill">Flutter</span>
        <span class="pill">Apps métier orientées usage</span>
      </div>
      <div class="actions">
        <RouterLink to="/projects" class="btn primary">Voir mes projets</RouterLink>
        <RouterLink to="/contact" class="btn ghost">Me contacter</RouterLink>
      </div>
    </div>

    <div class="hero__panel" aria-label="Infos rapides">
      <div class="panel__item">
        <span class="dot dot--blue" aria-hidden="true"></span>
        <div>
          <p class="panel__label">Stack</p>
          <p class="panel__value">Symfony, Flutter, Node.js</p>
        </div>
      </div>
      <div class="panel__item">
        <span class="dot dot--green" aria-hidden="true"></span>
        <div>
          <p class="panel__label">Approche</p>
          <p class="panel__value">Livrables clairs, UI soignée, automatisation pragmatique.</p>
        </div>
      </div>
      <div class="panel__item">
        <span class="dot dot--purple" aria-hidden="true"></span>
        <div>
          <p class="panel__label">Collaboration</p>
          <p class="panel__value">Feedback rapide et suivi continu.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: 1.2rem;
  align-items: stretch;
  background:
    radial-gradient(circle at 15% 20%, rgba(14, 165, 233, 0.18), transparent 34%),
    radial-gradient(circle at 80% 0%, rgba(99, 102, 241, 0.12), transparent 30%),
    linear-gradient(135deg, #f8fafc, #eef2ff);
  border: 1px solid #e5e7eb;
  border-radius: 1.4rem;
  padding: 1.6rem;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

@media (max-width: 940px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 1.4rem;
  }
}

.hero__content {
  display: grid;
  gap: 0.45rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
  color: #0ea5e9;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.eyebrow::before {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(14, 165, 233, 0.35);
  border: 1px solid rgba(14, 165, 233, 0.6);
}

.title {
  font-size: clamp(2.2rem, 3vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
  color: #0f172a;
}

.tagline {
  margin: 0.2rem 0 0.5rem;
  color: #475569;
  font-size: 1.05rem;
  line-height: 1.6;
}

.hero__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #0f172a;
  font-weight: 600;
}

.actions {
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  margin-top: 0.4rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.65rem 1rem;
  border-radius: 0.85rem;
  border: 1px solid #d7dde5;
  text-decoration: none;
  font-weight: 700;
  color: #0f172a;
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
  transition: transform 0.12s ease, box-shadow 0.15s ease, border-color 0.15s ease, background 0.15s ease;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
  border-color: #cbd5e1;
}

.btn.primary {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #f8fafc;
  border-color: #2563eb;
}

.btn.primary:hover {
  background: linear-gradient(135deg, #1d4ed8, #1e40af);
}

.btn.ghost {
  background: transparent;
  color: #1d4ed8;
  border-color: #bfdbfe;
}

.btn.ghost:hover {
  background: rgba(37, 99, 235, 0.08);
}

.hero__panel {
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  color: #e2e8f0;
  border-radius: 1.1rem;
  padding: 1.1rem 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.26);
  display: grid;
  gap: 0.85rem;
}

.panel__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.55rem 0.75rem;
  align-items: center;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.12);
}

.dot--blue { background: #bfdbfe; }
.dot--green { background: #bbf7d0; }
.dot--purple { background: #ddd6fe; }

.panel__label {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.9);
}

.panel__value {
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
}

@media (prefers-color-scheme: dark) {
  .hero {
    background:
      radial-gradient(circle at 15% 20%, rgba(14, 165, 233, 0.22), transparent 34%),
      radial-gradient(circle at 80% 0%, rgba(99, 102, 241, 0.16), transparent 30%),
      linear-gradient(135deg, #0b1220, #0f172a);
    border-color: #1f2937;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
  }

  .title {
    color: #e2e8f0;
  }

  .tagline {
    color: #cbd5e1;
  }

  .pill {
    background: rgba(255, 255, 255, 0.04);
    border-color: #1f2937;
    color: #e2e8f0;
  }

  .btn {
    background: linear-gradient(180deg, #0f172a, #0b1220);
    color: #e2e8f0;
    border-color: #1f2937;
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
  }

  .btn.ghost {
    color: #60a5fa;
    border-color: #334155;
  }

  .btn.ghost:hover {
    background: rgba(96, 165, 250, 0.08);
  }
}
</style>

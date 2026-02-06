# CLAUDE.md — Portfolio Mathieu Béchade

## Projet

Portfolio personnel (site vitrine statique) — développeur web & mobile.
Contenu entièrement en **français**.

## Stack technique

- **Framework** : Vue 3 (Composition API + `<script setup>`)
- **Routeur** : Vue Router 4 (history mode)
- **Build** : Vite 7
- **Langage** : JavaScript principalement, TypeScript optionnel (`lang="ts"` dans certains composants/utils)
- **Styling** : CSS pur avec CSS Custom Properties (variables), pas de préprocesseur ni Tailwind
- **Pas de** : store global, i18n, backend/API, tests

## Commandes

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run preview      # Prévisualiser le build
npm run lint         # ESLint --fix
npm run format       # Prettier sur src/
npm run type-check   # vue-tsc --noEmit
```

## Architecture

```
src/
├── assets/          # CSS globaux + images
├── components/      # Composants organisés par feature
│   ├── layout/      # SiteHeader, SiteFooter
│   ├── home/        # HeroSection, ProjectCard, ProjectsFeatured…
│   ├── about/       # TimeLine, SkillsList, AboutHero
│   ├── contact/     # QuickActions
│   └── common/      # BaseContainer (wrapper sémantique dynamique)
├── views/           # Pages (HomeView, AboutView, ProjectsView, contactView, ProjectDetailsView)
├── data/            # Données statiques JS (projects, skills, timeline, contact…)
├── utils/           # Helpers (timeline.ts)
├── router/          # Configuration des routes
├── main.js          # Point d'entrée
└── App.vue          # Composant racine
```

## Conventions de code

### Style & formatage

- **Prettier** : pas de point-virgule (`semi: false`), single quotes, `printWidth: 100`
- **ESLint** : config flat (v9), `vue/flat/essential`, intégration Prettier
- **Indentation** : 2 espaces
- **Fin de ligne** : LF
- **Longueur max** : 100 caractères

### Nommage

- **Composants** : PascalCase (`ProjectCard.vue`, `HeroSection.vue`)
- **Fichiers data/utils** : camelCase (`allProjects.js`, `timelineData.js`)
- **Classes CSS** : kebab-case avec convention BEM-like (`hero__content`, `surface-card`)
- **Variables CSS** : `--page-bg`, `--accent`, `--text`, `--muted`…

### Composants Vue

- Toujours utiliser `<script setup>` (Composition API)
- Props typées avec `defineProps()` (TS) ou objets (JS)
- Styles scopés dans un fichier CSS séparé : `<style scoped src="./NomDuComposant.css">`
- Pas d'Options API

### Organisation

- Un composant = un fichier `.vue` + son fichier `.css` associé (même dossier)
- Les composants sont rangés par feature/page dans `components/`
- Les données statiques vivent dans `src/data/` (objets JS exportés)
- Les vues importent les données et les passent aux composants via props

## Routing

5 routes définies dans `src/router/index.js` :

| Route | Vue | Nom |
|---|---|---|
| `/` | HomeView | home |
| `/about` | AboutView | about |
| `/projects` | ProjectsView | projects |
| `/contact` | contactView | contact |
| `/project/:slug` | ProjectDetailsView (lazy) | project-details |

## Theming

- Dark mode via `@media (prefers-color-scheme: dark)` (pas de toggle manuel)
- Variables CSS dans `:root` et surcharge dans le media query dark
- Classes utilitaires globales : `.surface-card`, `.section-shell`, `.container`, `.btn`, `.pill`, `.eyebrow`

## Alias d'import

- `@` → `./src` (configuré dans Vite + jsconfig.json)

## Points d'attention

- Site **100% statique** : pas de fetch, pas d'API, données en dur dans `src/data/`
- Hébergé sur serveur Apache (`.htaccess` dans `public/`)
- SEO : JSON-LD (structured data) injecté côté client sur la page contact
- Node requis : `^20.19.0 || >=22.12.0`

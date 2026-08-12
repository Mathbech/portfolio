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
├── composables/     # useTheme.js (thème clair/sombre, singleton)
├── data/            # Données statiques JS (allProjects, projectsDetails, competences, timelineData, contact)
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

- **Toggle manuel** clair/sombre via `src/composables/useTheme.js` : préférence stockée en `localStorage` (`theme-preference`), appliquée par l'attribut `data-theme` sur `<html>`, avec repli sur `prefers-color-scheme` si aucune préférence stockée
- Variables CSS dans `:root` / `[data-theme='dark']` — tout nouveau style doit utiliser ces variables, jamais de couleur en dur
- Classes utilitaires globales : `.surface-card`, `.section-shell`, `.container`, `.btn`, `.pill`, `.eyebrow`

## Alias d'import

- `@` → `./src` (configuré dans Vite + jsconfig.json)

## Points d'attention

- Site **100% statique** : pas de fetch, pas d'API, données en dur dans `src/data/`
- Hébergé sur serveur Apache (`.htaccess` dans `public/`)
- SEO : JSON-LD (structured data) injecté côté client sur la page contact
- Node requis : `^20.19.0 || >=22.12.0`
- Branche principale : `dev`

## Project Investigation Method

1. Bug de contenu (projet manquant, texte faux, mauvaise date) → chercher dans `src/data/` d'abord, pas dans les composants : les vues ne font que consommer ces objets.
2. Bug d'affichage → identifier le composant par sa classe CSS (kebab-case BEM-like) via grep, puis ouvrir la paire `.vue` + `.css` du même dossier.
3. Bug de thème → `useTheme.js` (localStorage + `data-theme`) et les variables CSS ; tester les DEUX thèmes après toute modification de style.
4. Ajout d'un projet au portfolio : ajouter l'entrée dans `allProjects.js` ET `projectsDetails.js` (slug identique — c'est la clé de la route `/project/:slug`), plus l'image de couverture dans `assets/images/`.
5. Validation, dans l'ordre : `npm run lint` → `npm run type-check` → `npm run build`. Les trois doivent passer ; pas de tests unitaires.
6. Respecter Prettier (pas de point-virgule, single quotes) — le lint échoue sinon.

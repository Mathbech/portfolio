// Import des images depuis src/assets
import itopoCover from '@/assets/images/itopo-cover.png'
import beaupCover from '@/assets/images/beaup-cover.png'
import filamentCover from '@/assets/images/filament-cover.png'

export const featuredProjects = [
  {
    slug: 'i-topo',
    title: 'i-Topo',
    context: 'Projet pro',
    description: 'Application de gestion de chantiers, utilisée par des pros depuis 10+ ans.',
    cover: itopoCover,
    tech: ['Symfony', 'Flutter', 'AWS']
  },
  {
    slug: 'beaup-orientation',
    title: "Beaup'orientation",
    context: 'Projet scolaire',
    description: "Web + mobile pour organiser des courses d’orientation géolocalisées.",
    cover: beaupCover,
    tech: ['Symfony', 'Flutter', 'MySQL', 'API Platform']
  },
  {
    slug: 'filamentgestion',
    title: 'FilamentGestion',
    context: 'Projet cours/perso/pro',
    description: "Gestion de stocks pour impression 3D — en cours de commercialisation.",
    cover: filamentCover,
    tech: ['Symfony', 'Docker', 'MariaDB']
  }
]

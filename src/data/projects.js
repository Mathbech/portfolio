// Import des images depuis src/assets
import itopoCover from '@/assets/images/itopo-cover.png'
import multitaskCover from '@/assets/images/multitask-cover.png'
import filamentCover from '@/assets/images/filament-cover.png'

export const featuredProjects = [
  {
    slug: 'filamentgestion',
    title: 'FilamentGestion',
    context: 'Projet cours/perso/pro',
    description: 'Gestion de stocks pour impression 3D — en cours de commercialisation.',
    cover: filamentCover,
    tech: ['Symfony', 'Docker', 'MariaDB'],
  },
  {
    slug: 'itopo',
    title: 'i-Topo',
    context: 'Projet pro',
    description: 'Application de gestion de chantiers, utilisée par des pros depuis 10+ ans.',
    cover: itopoCover,
    tech: ['Symfony', 'Flutter', 'AWS'],
  },
  {
    slug: 'multitask',
    title: 'MultitaskBot',
    context: 'Projet perso',
    description:
      'Bot Discord multi-fonctions : modération, commandes fun, rôles automatiques, salons vocaux privés, etc.',
    cover: multitaskCover,
    tech: ['Node.js', 'Discord.js', 'MariaDB'],
  },
]

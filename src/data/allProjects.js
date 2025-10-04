// Import des images
import itopoCover from '@/assets/images/itopo-cover.png'
import beaupCover from '@/assets/images/beaup-cover.png'
import filamentCover from '@/assets/images/filament-cover.png'
import multitaskCover from '@/assets/images/multitask-cover.png'

export const projects = [
  {
    id: 'itopo',
    title: 'i-Topo',
    category: 'Entreprise',
    description: "Application de gestion de chantiers, en production depuis 10 ans. J'ai travaillé sur la partie administrateur et client.",
    stack: ['Symfony', 'Twig', 'Flutter', 'MySQL', 'Docker'],
    image: itopoCover,
    link: 'https://fr.i-topo.com'
  },
  {
    id: 'beaup',
    title: "Beaup'orientation",
    category: 'Cours',
    description: "Projet scolaire de gestion de courses d’orientation avec API Symfony et application mobile Flutter.",
    stack: ['Symfony', 'Twig', 'API Platform', 'Flutter', 'Docker'],
    image: beaupCover,
    link: '#'
  },
  {
    id: 'filament',
    title: 'FilamentGestion',
    category: 'Personnel',
    description: "Application de gestion de stocks pour l'impression 3D, avec suivi des bobines, imprimantes et impressions.",
    stack: ['Symfony', 'Twig', 'Webpack', 'MariaDB'],
    image: filamentCover,
    link: 'https://filamentgestion.fr'
  },
  {
    id: 'multitask',
    title: 'MultitaskBot',
    category: 'Personnel',
    description: "Bot Discord multi-fonctions : modération, commandes fun, rôles automatiques, salons vocaux privés, etc.",
    stack: ['Node.js', 'Discord.js', 'MariaDB'],
    image: multitaskCover,
    link: 'https://multitask.bebech.fr'
  }
]

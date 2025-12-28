export const projectsDetails = {
  filamentgestion: {
    slug: 'filamentgestion',
    title: 'FilamentGestion',
    subtitle: "Gestion de stock pour l'impression 3D",
    status: { label: 'En cours', level: 'wip' }, // wip|done|paused|prod
    stack: ['Symfony', 'Twig', 'MySQL', 'Webpack', 'Docker'],
    links: [
      // { label: 'GitHub', url: '...' },
      { label: 'Site vitrine', url: 'https://filamentgestion.fr' },
    ],

    sections: [
      {
        title: 'Contexte',
        content:
          "Filamentgestion est un projet personnel réalisé pour mon examen du BTS puis repris de zéro pour un développement plus propre avec pour objectif de le transformer en SaaS.",
      },
      {
        title: 'État du projet',
        content:
          "Le projet est actuellement en développement et de test auprès de quelques utilisateurs. Une version bêta publique est prévue prochainement, suivie d'une version commerciale.",
      },
      {
        title: "Description du projet",
        content:
          "FilamentGestion est une application web destinée à aider les utilisateurs d'imprimantes 3D à gérer leur stock de filaments, imprimantes et impressions. Elle permet de suivre la consommation de filament par impression, de gérer les alertes de stock faible, et d'avoir une vue d'ensemble sur l'état des Bobines.",
      },
      {
        title: 'Prochaines étapes',
        list: [
          "Prospection pour recruter des testeurs",
          "Phase de tests utilisateurs et collecte de retours",
          "Analyse des retours et corrections itératives",
          "Validation du modèle économique / tarification",
          "Monter l'auto‑entreprise si le projet prend",
        ],
      },
    ],
  },

  itopo: {
    slug: 'itopo',
    title: 'i-Topo',
    subtitle: "Gestion de photos de chantiers",
    status: { label: 'En production', level: 'prod' }, // wip|done|paused|prod
    stack: ['Symfony', 'Twig', 'MySQL', 'Webpack', 'Docker'],
    links: [
      // { label: 'GitHub', url: '...' },
      { label: 'Site vitrine', url: 'https://i-topo.com' },
    ],

    sections: [
      {
        title: 'Contexte',
        content:
          "i-Topo est le projet de l'entreprise dans laquelle je travaille, Lije Technologies.",
      },
      {
        title: 'État du projet',
        content:
          "Le projet est actuellement en production et utilisé par de nombreux professionnels du TP pour la gestion de leurs chantiers.",
      },
      {
        title: "Description du projet",
        content:
          "i-Topo est une application web destinée à aider les professionnels du TP à gérer leurs photos géolocalisées de chantiers. Elle permet de centraliser, organiser et partager les photos de manière efficace.",
      },
    ],
  },

  multitask: {
    slug: 'multitask',
    title: 'MultitaskBot',
    subtitle: 'Bot Discord multi-fonctions',
    status: { label: 'En production', level: 'prod' }, // wip|done|paused|prod
    stack: ['Node.js', 'Discord.js', 'MariaDB'],
    links: [
      { label: 'Site web', url: 'https://multitask.bebech.fr' },
    ],
    sections: [
      {
        title: 'Contexte',
        content:
          "MultitaskBot est un projet personnel que j'ai développé pour répondre à mes besoins et à ceux de ma communauté Discord.",
      },
      {
        title: 'État du projet',
        content:
          "Le bot est actuellement en production et utilisé par plusieurs serveurs Discord pour diverses fonctionnalités.",
      },
      {
        title: "Description du projet",
        content:
          "MultitaskBot est un bot Discord offrant une multitude de fonctionnalités telles que la modération, des commandes amusantes, l'attribution automatique de rôles, la gestion de salons vocaux privés, et bien plus encore.",
      },
    ],
  },

  beauporientation: {
    slug: 'beauporientation',
    title: "Beaup'orientation",
    subtitle: "Gestion de courses d'orientation",
    status: { label: 'Terminé', level: 'done' }, // wip|done|paused|prod
    stack: ['Symfony', 'Twig', 'API Platform', 'Flutter', 'Docker', 'MySQL', 'webpack'],
    links: [
      { label: 'GitHub', url: '' },
    ],
    sections: [
      {
        title: 'Contexte',
        content:
          "Beaup'orientation est un projet scolaire réalisé dans le cadre de mon bachelor CDA (concepteur développeur d'applications).",
      },
      {
        title: 'État du projet',
        content:
          "Le projet a été achevé et présenté lors de mon examen de bachelor CDA.",
      },
      {
        title: "Description du projet",
        content:
          "Beaup'orientation est une application web et mobile permettant la gestion de courses d'orientation. Elle inclut une API Symfony pour la gestion des données et une application mobile Flutter pour les utilisateurs finaux.",
      },
    ],
  },
}

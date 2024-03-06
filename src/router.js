import { createRouter, createWebHistory } from 'vue-router';
import Accueil from './components/accueil.vue'; // Importez le composant Accueil.vue
import Potions from './components/potions.vue';
import Sorts from './components/sorts.vue';
import Livres from './components/livres.vue';
import Personnages from './components/personnages.vue';
import Layout from './components/layout.vue';


const routes = [
  {
    path: '/',
    component: Layout, // Utilisez le layout pour la route /
    children: [
      {
        path: '', // Chemin vide pour la page Accueil
        name: 'Accueil',
        component: Accueil
      },
      {
        path: '/potions',
        name: 'Potions',
        component: Potions
      },
      {
        path: '/sorts',
        name: 'Sorts',
        component: Sorts
      },
      {
        path: '/livres',
        name: 'Livres',
        component: Livres
      },
      {
        path: '/personnages',
        name: 'Personnages',
        component: Personnages
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

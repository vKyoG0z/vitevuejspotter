import { createRouter, createWebHistory } from 'vue-router';
import Accueil from './components/accueil.vue'; // Importez le composant Accueil.vue

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil // Utilisez le composant Accueil pour la route /
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

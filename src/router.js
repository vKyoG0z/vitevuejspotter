import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/home.vue'; // Importez le composant Accueil.vue
import Potions from './components/potions.vue';
import Spells from './components/spells.vue';
import Books from './components/books.vue';
import Characters from './components/characters.vue';
import Layout from './components/layout.vue';


const routes = [
  {
    path: '/',
    component: Layout, // Utilisez le layout pour la route /
    children: [
      {
        path: '/', // Chemin vide pour la page Accueil
        name: 'Home',
        component: Home
      },
      {
        path: '/potions',
        name: 'Potions',
        component: Potions
      },
      {
        path: '/spells',
        name: 'Spells',
        component: Spells
      },
      {
        path: '/books',
        name: 'Books',
        component: Books
      },
      {
        path: '/characters',
        name: 'Characters',
        component: Characters
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

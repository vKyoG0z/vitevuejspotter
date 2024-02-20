import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'; // Importez le fichier de configuration du routeur

createApp(App).use(router).mount('#app');

createApp(App).mount('#app')

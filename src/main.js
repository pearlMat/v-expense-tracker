import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Notifications from 'notiwind';
import '@/assets/styles/fonts.css';
import '@/assets/styles/main.css';
import '@/assets/styles/tailwind.css';
import App from '@/app.vue';
import { routes } from '@/routes.js';
import store from './store';

const router = createRouter({

history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Notifications);
app.mount('#app');

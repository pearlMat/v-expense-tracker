import Index from '@/pages/index.vue';
import Register from '@/pages/register.vue';
import Login from '@/pages/login.vue';
import NotFound from '@/pages/not-found.vue';

export const routes = [
  { path: '/', component: Index, name: 'home' },
  { path: '/register', component: Register, name: 'register' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;

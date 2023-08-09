import Index from '@/pages/index.vue';
import Register from '@/pages/register.vue';
import NotFound from '@/pages/not-found.vue';

export const routes = [
  { path: '/', component: Index, name: 'home' },
  { path: '/register', component: Register, name: 'register' },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;

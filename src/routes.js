import Index from '@/pages/index.vue';
import NotFound from '@/pages/not-found.vue';

export const routes = [
  { path: '/', component: Index, name: 'home' },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;

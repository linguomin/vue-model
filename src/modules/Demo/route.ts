import { RouteConfig } from 'vue-router';

const route: RouteConfig[] = [
  {
    path: '/Demo',
    redirect: { name: 'demo-demo' },
  },
  {
    path: '/Demo/demo',
    name: 'demo-demo',
    component: () => import('./pages/Demo/index.vue'),
  },
];

export default route;

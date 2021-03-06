import { RouteConfig } from 'vue-router';

const route: RouteConfig[] = [
  {
    path: '/Auth',
    redirect: { name: 'auth-login' },
  },
  {
    path: '/Auth/login',
    name: 'auth-login',
    meta: {
      layout: 'plain',
      permissionCode: [],
    },
    component: () => import('./pages/Login/index.vue'),
  },
];

export default route;

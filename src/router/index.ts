import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: { path: '/Auth/login' },
  },
];

const router = new VueRouter({
  routes,
});

export default router;

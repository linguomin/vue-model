import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const originalPush: any = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

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

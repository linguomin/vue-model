import Vue from 'vue';

import App from './App.vue';

import i18n from '@/i18n';

import directives from '@/directives';

import plugin from '@/plugin';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 全局样式
import './assets/styles/index.scss';

import util from '@/utils';

import moduleManager from '@/libs/moduleManager';

import { sync } from 'vuex-router-sync';

// global components
import '@/components';

// layout
import '@/layout';

// filter
import '@/filter';

Vue.use(plugin);

Vue.use(ElementUI);

Vue.use(directives);

Vue.config.productionTip = false;

export default function createApp() {
  // 创建 router 和 store 实例
  const router = moduleManager.getRouter();
  const store = moduleManager.getStore();

  // 同步路由状态(route state)到 store
  sync(store, router);

  const app = new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
    mounted() {
      // show version tag in console
      util.versionShow();
    },
  });
  return { app, router, store, i18n };
}

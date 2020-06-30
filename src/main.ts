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

new Vue({
  router: moduleManager.getRouter(),
  store: moduleManager.getStore(),
  i18n,
  render: (h) => h(App),
  mounted() {
    // show version tag in console
    util.versionShow();
  },
}).$mount('#app');

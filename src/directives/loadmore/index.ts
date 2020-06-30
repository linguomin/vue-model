import Vue from 'vue';

import { loadmore } from './loadmore';

export default {
  install() {
    Vue.directive('loadmore', loadmore);
  },
};

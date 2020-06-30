import Vue from 'vue';

import { selectLoadMore } from './selectLoadMore';

export default {
  install() {
    Vue.directive('selectLoadMore', selectLoadMore);
  },
};

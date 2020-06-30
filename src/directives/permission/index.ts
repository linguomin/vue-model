import Vue from 'vue';

import { hasPermission } from '@/libs/permissionManager';
import { permission } from './permission';

export default {
  install() {
    Vue.directive('permission', permission);
    Vue.prototype.$hasPermission = hasPermission;
  },
};

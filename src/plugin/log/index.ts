import Vue from 'vue';

import store from '@/store';
import log from '@/utils/util.log';

export default {
  install() {
    // 快速打印 log
    Vue.prototype.$log = log;
    // 快速记录日志
    Vue.prototype.$logAdd = function(info, show = true) {
      // store 赋值
      store.dispatch('global/log/add', {
        type: 'log',
        info
      });
      // 显示在控制台
      if (show && process.env.NODE_ENV === 'development') {
        log.default(info);
      }
    };
  }
};

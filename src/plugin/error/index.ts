/* tslint:disable:no-console */

import Vue from 'vue';

import store from '@/store';
import log from '@/utils/util.log';

export default {
  install() {
    Vue.config.errorHandler = function(err, vm, info) {
      // Vue.nextTick(() => {
        // 添加 log
        store.dispatch('global/log/add', {
          type: 'error',
          err,
          vm,
          info
        });
        // 只在开发模式下打印 log
        if (process.env.NODE_ENV === 'development') {
          log.danger('>>>>>> 错误信息 >>>>>>');
          console.log(info);
          log.danger('>>>>>> Vue 实例 >>>>>>');
          console.log(vm);
          log.danger('>>>>>> Error >>>>>>');
          console.log(err);
        }
      // });
    };
  }
};

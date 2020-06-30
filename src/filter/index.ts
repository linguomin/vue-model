import Vue from 'vue';

/**
 * px 单位换算为 vw 单位
 */
Vue.filter('px2vw', function(val: number): string {
  return (val / 1920) * 100 + 'vw';
});

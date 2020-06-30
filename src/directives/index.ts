import permission from './permission';
import loadmore from './loadmore';
import selectLoadMore from './selectLoadMore';

export default {
  async install(Vue, options) {
    // 自定义指令
    Vue.use(permission);
    Vue.use(loadmore);
    Vue.use(selectLoadMore);
  },
} as Vue.PluginObject<any>;

import pluginError from '@/plugin/error';
import pluginLog from '@/plugin/log';

export default {
  async install(Vue, options) {
    // 功能插件
    Vue.use(pluginError);
    Vue.use(pluginLog);
  }
} as Vue.PluginObject<any>;

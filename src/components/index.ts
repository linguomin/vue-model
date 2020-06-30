import Vue from 'vue';

/**
 * 获取组件名并全局注册
 * 搜索当前目录下的组件路径，比如 `/path/to/MyComponent/index.[tsx|vue]`
 * 提取组件名 `MyComponent`，转换成 kebab 风格 `my-component` 后作为 id 注册该组件。
 */
const files = require.context('./', true, /\/index\.(tsx|vue)$/);
import { kebabCase } from 'lodash';

files.keys().forEach(key => {
  const matched = key.match(/\/([\w-]+)\/index\.(?:tsx|vue)$/);
  if (matched) {
    const id = matched[1].indexOf('-') > 0 ? matched[1] : kebabCase(matched[1]);
    Vue.component(id, files(key).default);
  }
});

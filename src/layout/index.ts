import Vue from 'vue';

const files = require.context('./', true, /\/index\.(tsx|vue)$/);
import { kebabCase } from 'lodash';

// 注入所有的layout
files.keys().forEach(key => {
  const matched = key.match(/\/([\w-]+)\/index\.(?:tsx|vue)$/);
  if (matched) {
    const id = matched[1].indexOf('-') > 0 ? matched[1] : kebabCase(matched[1]);
    Vue.component(id + '-layout', files(key).default);
  }
});

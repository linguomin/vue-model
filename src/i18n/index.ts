import Vue from 'vue';
import Element from 'element-ui';
import VueI18n from 'vue-i18n';
import messages from './lang';
import cache from '@/utils/util.cache';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: cache.localGet('lang') || 'cn',
  messages,
});

// 重点：为了实现element插件的多语言切换
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value),
});

export default i18n;

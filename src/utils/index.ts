import log from './util.log';

const util = {
  /**
   * @description 显示版本信息
   */
  versionShow() {
    log.capsule(`${process.env.VUE_APP_NAME}`, `v${process.env.VUE_APP_VERSION}`);
    log.primary(`Build Time:  ${process.env.VUE_APP_BUILD_TIME}`);
    log.primary(`Last Commit: ${process.env.VUE_APP_GIT_COMMIT}`);
  },

  /**
   * @description 更新标题
   * @param {String} title 标题
   */
  title(titleText: string) {
    const processTitle = process.env.VUE_APP_TITLE;
    window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`;
  },

  /**
   * @description 打开新页面
   * @param {String} url 地址
   */
  open(url: string) {
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank');
    a.setAttribute('id', 'temp-link');
    document.body.appendChild(a);
    a.click();

    const node: HTMLElement = document.getElementById('temp-link') as HTMLElement;
    document.body.removeChild(node);
  },

  /**
   * @description 获取UA信息
   * 显示浏览器和系统信息
   */
  ua: (function() {
    const UaParser = require('ua-parser-js');
    const ua = new UaParser().getResult();

    return function() {
      return ua;
    };
  })(),
};

export default util;

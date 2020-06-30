import { throttle } from 'lodash';

export const loadmore: Vue.DirectiveOptions = {
  bind(el, binding) {
    let scrollTop = 0;
    let top = 0;
    let down = true;

    const dom = el.querySelector('.scroller-wrap') as HTMLElement;

    dom.addEventListener(
      'scroll',
      throttle(() => {
        // 判断是否向下滚动
        scrollTop = dom.scrollTop;
        down = top < scrollTop ? true : false;
        top = scrollTop;
        // 判断是否到底
        const sign = 10;
        const scrollDistance =
          dom.scrollHeight - dom.scrollTop - dom.clientHeight;
        if (scrollDistance <= sign && down) {
          binding.value();
        }
      }, 100)
    );
  },
};

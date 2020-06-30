export const selectLoadMore: Vue.DirectiveOptions = {
  bind(el, binding) {
    // 获取element-ui定义好的scroll盒子
    const SELECTWRAP_DOM: any = el.querySelector(
      '.el-select-dropdown .el-select-dropdown__wrap'
    );
    SELECTWRAP_DOM.addEventListener('scroll', function() {
      const CONDITION =
        SELECTWRAP_DOM.scrollHeight - SELECTWRAP_DOM.scrollTop <=
        SELECTWRAP_DOM.clientHeight;
      if (CONDITION) {
        binding.value();
      }
    });
  },
};

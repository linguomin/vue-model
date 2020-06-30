export default {
  namespaced: true,

  state: {
    progress: {
      status: 'finish',
    },
    scale: 1, // 当前侧边栏宽度在不同分辨率下实际宽度
  },

  getters: {
    progressStatus: (state: any) => state.progress.status,
  },

  mutations: {
    SET_PROGRESS_STATUS: (state: any, status: 'start' | 'finish') => {
      state.progress.status = status;
    },
    setScale(state, newVal) {
      state.scale = newVal;
    },
  },
};

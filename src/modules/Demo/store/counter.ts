const counter: StoreOptions = {
  state: {
    count: 10,
  },

  getters: {
    count: state => state.count,
  },

  mutations: {
    increment: state => {
      state.count++;
    },
  },
};

export default counter;

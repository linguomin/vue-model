/**
 * The file enables `@/store/index.ts` to import all global vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

const files = require.context('./modules', false, /\.ts$/);
const modules: { [key: string]: StoreOptions } = {};

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.ts)/g, '')] = files(key).default;
});

export default {
  namespaced: true,
  modules,
};

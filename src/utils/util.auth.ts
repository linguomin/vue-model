import cache from './util.cache';
// 定义token的key
const TOKEN_KEY = 'accessToken';

const auth = {
  // 获取token
  getToken(): string {
    return cache.sessionGet(TOKEN_KEY);
  },
  // 设置token
  setToken(value: string) {
    cache.sessionSet(TOKEN_KEY, value);
  },
  // 移除token
  removeToken() {
    cache.sessionRemove(TOKEN_KEY);
  },
};

export default auth;

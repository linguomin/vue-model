interface PackedValue {
  value: any;
}

const packValue = (value: any): PackedValue => ({ value });
const unpackValue = (packed: PackedValue): any => packed && packed.value;

const cache = {
  // 获取session Storage
  sessionGet(key: string) {
    try {
      return unpackValue(
        JSON.parse(window.sessionStorage.getItem(key) as string)
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  // 设置session Storage
  sessionSet(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(packValue(value)));
  },
  // 移除session Storage
  sessionRemove(key: string) {
    window.sessionStorage.removeItem(key);
  },
  // 清空session Storage
  sessionClear() {
    window.sessionStorage.clear();
  },
  // 获取local Storage
  localGet(key: string) {
    try {
      return unpackValue(
        JSON.parse(window.localStorage.getItem(key) as string)
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  // 设置local Storage
  localSet(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(packValue(value)));
  },
  // 移除local Storage
  localRemove(key: string) {
    window.localStorage.removeItem(key);
  },
  // 清空local Storage
  localClear() {
    window.localStorage.clear();
  },
};

export default cache;

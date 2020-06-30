import cache from '@/utils/util.cache';

export const hasPermission = (code: string | string[]): boolean => {
  const permissionCodes = cache.sessionGet('permissionCodes') || [];
  if (code === '' || code.length === 0) {
    return true;
  }
  if (typeof code === 'string') {
    return hasPermission([code]);
  }
  if (permissionCodes.length > 0) {
    return permissionCodes.every((c: string) => code.includes(c));
  } else {
    return false;
  }
};

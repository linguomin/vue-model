import { NavigationGuard } from 'vue-router';
import { hasPermission } from '@/libs/permissionManager';
import { has } from 'lodash';
import multiguard from 'vue-router-multiguard';
/**
 * export default must be a function with the name 'beforeEach'
 */

// check permission before route's change
const permissionGuard: NavigationGuard = (to, from, next) => {
  if (
    has(to, 'meta.permissionCode') &&
    !hasPermission(to.meta.permissionCode)
  ) {
    if (from.name === null || from.name === 'auth-login') {
      next({ path: '/Auth/login' });
    } else {
      next(false);
    }
  } else {
    next();
  }
};

const baseGuard: NavigationGuard = (to, from, next) => {
  next();
};

const beforeEach = multiguard([baseGuard, permissionGuard]);

export default beforeEach;

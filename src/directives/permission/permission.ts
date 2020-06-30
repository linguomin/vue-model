import { hasPermission } from '@/libs/permissionManager';

export const permission: Vue.DirectiveOptions = {
  inserted(el, binding) {
    let { value } = binding;
    value = value.split(',').map((c: string) => c.trim());

    return hasPermission(value);
  },
};

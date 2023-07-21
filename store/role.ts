import { defineStore } from 'pinia';

export const useRoleStore = defineStore('role', {
  state: () => ({
    role: '',
  }),
  actions: {
    setRole(role: string) {
      this.role = role;
    },
  },
  persist: true
});
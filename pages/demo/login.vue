<template>
  <div>
    <h1>ログイン</h1>
    <button @click="login">ログインする</button>
  </div>
</template>

<script>
import { useRoleStore } from "~/store/role";
export default {
  data() {
    return {
      store: useRoleStore(),
    };
  },
  methods: {
    async login() {
      const res = await useFetch("/api/role");
      const role = res.data.value.role;
      this.store.setRole(role);
      const router = useRouter();
      router.push({ path: '/demo/articles'})
    },
  },
};
</script>

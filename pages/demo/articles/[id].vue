<template>
  <div>
    <h1>記事{{ $route.params.id }}</h1>
    <div v-if="store.role === 'paid'">
      <h2>有料会員限定公開</h2>
    </div>
    <div v-else>
      <h2>通常</h2>
    </div>
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
  created() {
    if (this.store.role) return

    const router = useRouter();
    router.push({ path: '/demo/login'})
  }
};
</script>

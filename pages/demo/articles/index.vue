<template>
  <div>
    <h1>記事一覧</h1>
    <ul v-for="article in articles" :key="article.id">
      <li>
        <NuxtLink :to="`/demo/articles/${article.id}`">
          <p>{{ article.title }}</p>
          <p>{{ article.author }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRoleStore } from "~/store/role";
export default {
  data() {
    return {
      store: useRoleStore(),
      articles: [
        {
          id: 1,
          title: 'test1',
          author: 'taro'
        },
        {
          id: 2,
          title: 'test2',
          author: 'goro'
        },
        {
          id: 3,
          title: 'test3',
          author: 'jiro'
        },
        {
          id: 4,
          title: 'test4',
          author: 'saburo'
        },
        {
          id: 5,
          title: 'test5',
          author: 'shiro'
        },
      ]
    };
  },
  created() {
    if (this.store.role) return

    const router = useRouter();
    router.push({ path: '/demo/login'})
  }
};
</script>

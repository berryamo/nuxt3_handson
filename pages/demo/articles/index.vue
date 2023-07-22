<template>
  <div class="article-list">
    <h1>記事一覧</h1>
    <ul class="article-list-container">
      <li v-for="article in articles" :key="article.id" class="article-item">
        <NuxtLink :to="`/demo/articles/${article.id}`" class="article-link">
          <div class="article-content">
            <p class="article-title">{{ article.title }}</p>
            <p class="article-author">{{ article.author }}</p>
          </div>
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

<style>
/* 全体のスタイル */
.article-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
}

/* 記事リストのスタイル */
.article-list-container {
  list-style: none;
  padding: 0;
}

.article-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 10px;
  transition: box-shadow 0.3s ease;
}

.article-item:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* リンクのスタイル */
.article-link {
  text-decoration: none;
  color: #333;
}

/* 記事のコンテンツスタイル */
.article-content {
  padding: 10px;
}

.article-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.article-author {
  font-size: 14px;
  color: #888;
}
</style>
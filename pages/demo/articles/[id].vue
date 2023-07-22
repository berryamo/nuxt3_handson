<template>
  <div class="article-page">
    <h1>{{ title }}</h1>
    <p>{{ displayContent }}</p>
    <template v-if="store.role !== 'paid'">
      <div class="premium-content">
        この記事は有料記事です。有料会員になると続きをお読みいただけます。
      </div>
      <button class="premium-button" @click="registration">
        有料会員になる
      </button>
    </template>
  </div>
</template>

<script>
import { useRoleStore } from "~/store/role";
export default {
  data() {
    return {
      store: useRoleStore(),
      title: '',
      body: ''
    };
  },
  created() {
    this.setArticle()
    if (this.store.role) return

    const router = useRouter();
    router.push({ path: '/demo/login'})
  },
  computed: {
    displayContent() {
      if (this.store.role === 'paid') {
        return this.body
      } else {
        return this.body.substring(0, 50)
      }
    }
  },
  methods: {
    setArticle() {
      console.log(typeof this.$route.params.id);
      switch (Number(this.$route.params.id)) {
        case 1:
          this.title = '「Vue.jsとは？簡単な紹介」'
          this.body = 'Vue.jsは、人気のあるJavaScriptフレームワークであり、UIを構築するために使われます。リアクティブなデータバインディングとコンポーネントベースのアーキテクチャを提供し、洗練されたユーザーインターフェースの作成を容易にします。'
          break;
        case 2:
          this.title = '「Vueの特徴と利点」'
          this.body = 'Vue.jsの特徴には、シンプルで直感的なAPI、柔軟なコンポーネントシステム、優れたパフォーマンスなどがあります。また、軽量なサイズと他のライブラリとの統合も優れており、人気の理由となっています。'
          break;
        case 3:
          this.title = '「Vue Routerの活用方法」'
          this.body = 'Vue Routerは、Vue.jsアプリケーションのための公式ルーティングライブラリです。SPA（Single Page Application）を構築する際に、ページ遷移やネストされたビューの管理を効果的に行うことができます。'
          break;
        case 4:
          this.title = '「Vuexを使った状態管理」'
          this.body = 'Vuexは、Vue.jsアプリケーションでの状態管理をシンプルにするための公式の状態管理ライブラリです。複数のコンポーネント間で共有するデータを効率的に管理し、アプリケーションの保守性を高めることができます。'
          break;
        case 5:
          this.title = '「Vue.jsの将来展望」'
          this.body = 'Vue.jsは急速に成長しており、今後も更なる進化が期待されています。新しい機能の追加、コミュニティの拡大、さらなるパフォーマンス向上など、Vue.jsはフロントエンド開発者にとって重要な存在としてさらなる発展が期待されています。'
          break;
        default:
          break;
      }
    },
    registration() {
      this.store.setRole('paid');
    }
  }
};
</script>

<style>
.article-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.premium-content {
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
}

.premium-button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.premium-button:hover {
  background-color: #0056b3;
}
</style>
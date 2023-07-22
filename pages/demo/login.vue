<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { useRoleStore } from "~/store/role";
export default {
  data() {
    return {
      store: useRoleStore(),
      username: 'user1',
      password: 'password1',
    };
  },
  methods: {
    async login() {
      if (this.username === 'user1' && this.password === 'password1') {
        const res = await useFetch("/api/role");
        const role = res.data.value.role;
        this.store.setRole(role);
        const router = useRouter();
        router.push({ path: "/demo/articles" });
      } else {
        alert('ユーザー名もしくはパスワードが違います')
      }
    },
  },
};
</script>

<style>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  font-size: 18px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>

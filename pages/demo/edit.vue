<template>
  <div>
    <h1>increment</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { useCounterStore } from "~/store/counter";

export default {
  data() {
    return {
      store: useCounterStore(),
    };
  },
  computed: {
    count() {
      return this.store.count;
    },
  },
  methods: {
    increment() {
      this.store.increment();
    },
  },
};
</script>
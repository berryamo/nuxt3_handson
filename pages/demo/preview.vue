<template>
  <div>
    <h1>preview</h1>
    <p>Count: {{ count }}</p>
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
  }
};
</script>

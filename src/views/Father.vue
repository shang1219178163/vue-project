<template>
  <div>
    父组件
    <h1>{{ count }}</h1>
    <button @click="increment">父组件+</button>
    <child :count="count" @increment:count="increment"></child>

    <child1 :count="count" @increment:count="increment"></child1>

  </div>
</template>

<script>
import Child from "../components/Child.vue";
// import Child1 from "../components/Child1.vue";

import { ref } from "vue";
export default {
  components: {
    Child,
  },
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };
    return {
      count,
      increment,
    };
  },
};
</script>



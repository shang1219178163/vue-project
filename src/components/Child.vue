<template>
  <div>
    子组件
    <h1>{{newCount}}</h1>
    <button @click="increment">子组件+</button>
  </div>
</template>

<script>
import {computed} from "vue"
export default {
  props: {
    count: Number,
  },
  setup(props, { emit }) {
    const newCount = computed({
      get: () => props.count,
      // set: (value) => emit("increment:count"),
      set: (value) => emit("increment", {value}),
    });
    const increment=()=>{
        newCount.value++
    }
    return {
      newCount,
      increment,
    };
  },
};
</script>




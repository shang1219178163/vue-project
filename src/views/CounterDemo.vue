<template>
  <div>
    <Counter
      :count="count"
      :step="step"
      :num="numRef"
      @add="add"
      @sub="sub"
      @change="change"
      @min="min"
      @max="max"
      ref="counter"
    />
  </div>
  <button @click="onClick">测试</button>
</template>

<script setup>
import { ref, reactive, computed, watch, getCurrentInstance } from "vue";
import { Toast } from "vant";

import Counter from "@/components/Counter.vue";


const count = ref(8);

const step = ref(1);

const add = () => {
  // console.log("add");
};

const sub = () => {
  // console.log("sub");
};

const max = (v) => {
  Toast(`已经是最大值 ${v} 了!`);
};

const min = (v) => {
  Toast(`已经是最小值 ${v} 了!`);
};

const change = (e) => {
  console.log("change", typeof e, e);
};

// const instance = getCurrentInstance()
// console.log(instance.type.__file, instance) ; 

// console.log(instance.refs);

const numRef = ref(false)

const onClick = () => {
  numRef.value = !numRef.value;
};

// watch(() => numRef, (newValue, oldValue) => {
//   console.log('watch numRef', newValue, oldValue);

// });

</script>

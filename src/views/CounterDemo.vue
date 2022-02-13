<template>
  <div>
    <counter
      :count="count"
      :step="step"
      @add="add"
      @sub="sub"
      @change="change"
      @min="min"
      @max="max"
      ref="counter"
    />
  </div>
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

const instance = getCurrentInstance()
console.log(instance.type.__file, instance) ; 

console.log(instance.refs);

</script>



<template>
  <pre lang="yaml">{{ text }}</pre>
  <div>{{ text }}</div>
  <div 
    v-for="(value, key) in network" :key="key"
  >
  {{ key }}:    {{value ?? '-'}}
  </div>

  <!-- <h4>{{ info }}</h4>
  <h4>{{ JSON.stringify(process) }}</h4> -->

</template>


<script setup>
import { ref, reactive, toRaw } from 'vue';
import { useNetwork } from '@vueuse/core';

const network = reactive(useNetwork());
const text = JSON.stringify(network);

console.log('network', network);

///对象遍历
const obj = toRaw(network);
// const obj = network;
for (let key in obj) {
  console.log('network', key, obj[key]);
}

console.log('process.env.NODE_ENV =', process.env.NODE_ENV);
console.log('process.env', process.env);
console.log('process', process);

</script>
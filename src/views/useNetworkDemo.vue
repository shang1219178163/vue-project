

<template>
  <pre lang="yaml">{{ text }}</pre>
  <div>{{ text }}</div>
  <div 
    v-for="(value, key) in network" :key="key"
  >
  {{ key }}:    {{value ?? '-'}}
  </div>
</template>


<script setup>
import { reactive, toRaw } from 'vue';
import { useNetwork } from '@vueuse/core';

const network = reactive(useNetwork());
const text = JSON.stringify(network);

console.log('network', network);

console.log('network.keys', Object.keys(toRaw(network)));
</script>


<template>
  <h1>CustomeRef</h1>
  <div>
    <div>
      <label>姓名 </label>
      <input v-model="text" />
    </div>

    <div>
      <label>密码 </label>
      <input v-model="text1" />
    </div>
  </div>


  <div>姓名: {{text}}</div>
  <div>密码: {{text1}}</div>

</template> 

<script setup>
import { ref, watchEffect } from 'vue';
import { useDebouncedRef } from '@/utils/debouncedRef'

const text = useDebouncedRef('hello', 700);
const text1 = useDebouncedRef('world', 700);

</script>
<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  
  <VSearch
    :text="text"
    :options="list"
    :onSelect="onSelect"
  >
  </VSearch>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

let list = reactive([
  {
    text: '选择1',
  },
  {
    text: '选择2',
  },
  {
    text: '选择3',
  },
]);

const text = ref('');

const onSelect = (item, index) => {
  console.log(item);
  text.value = item.text;
};


</script>


<style scoped lang='scss'>

</style>
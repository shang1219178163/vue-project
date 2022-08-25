<template>
  <navbar
    isleftarrow
    :navBarTitle="$route.meta.title" 
    closeWebview
  >
    <template #right>
      <div @click="toggle">Even/Odd</div>
    </template>
  </navbar> 
  <!-- <h1>{{ $route.meta.title }}</h1> -->
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  <!-- <button @click="toggle">Toggle Even/Odd</button> -->
  <div v-bind="containerProps" style="height: cacl(100% - 35px - 88px)">
    <div v-bind="wrapperProps">
      <div
        class="list-cell" 
        v-for="item in list" 
        :key="item.index" 
        >
        Row: {{ item.data }}
      </div>
    </div>
  </div>
  <div class="holder"></div>
</template>


<script setup>
import navbar from '@/components/navbar.vue';

import { useVirtualList, useToggle } from '@vueuse/core';
import { computed } from 'vue';

const [isEven, toggle] = useToggle();

const allItems = Array.from(Array(1000).keys());
const filteredList = computed(() => allItems.filter(i => isEven.value ? i % 2 === 0 : i % 2 === 1));

const { list, containerProps, wrapperProps } = useVirtualList(
  filteredList,
  {
    itemHeight: 75,
  },
);

</script>


<style scoped lang='scss'>
.list-cell{
  height: 75px;

  border: 1px solid rgba(0,0,0, 0.3);
}

.holder{
  bottom: 0;
  bottom: constant(safe-area-inset-bottom);
  bottom: env(safe-area-inset-bottom);
}
</style>
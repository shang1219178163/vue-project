<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  
  <hr>
  <h3>商品列表</h3> 
  <div
    class="item" 
    v-for="(item, index) in list" :key="index"
  >
    <span> {{ JSON.stringify(item) }}</span>     
    <Counter
      :count="item.count"
      @change="change"
      :obj="item"
    />
  </div>

  <hr>
  <h3>购物车</h3> 
  <div
    class="item" 
    v-for="(item, index) in carts" :key="index"
  >
    <span> {{ JSON.stringify(item) }}</span>     
  </div>
  <div>
    <h3>总价: {{ totalPrice }}</h3>
  </div>
</template>


<script setup>
import Counter from "@/components/Counter.vue";

import { ref, reactive, computed, onMounted, } from 'vue';


const list = reactive([
  {
    id: '9001',
    name: '商品1', 
    price: 100,
    count: 0,
  },
  {
    id: '9002',
    name: '商品2', 
    price: 200,
    count: 0,
  },
  {
    id: '9003',
    name: '商品3', 
    price: 300,
    count: 0,
  },
]);

const carts = reactive([]);

const totalPrice = computed(() => {
  return carts
  .filter(e => e.count && e.count > 0)
  .map(e => e.price * e.count)
  .reduce((pre, cur) => pre + cur, 0)
  .toFixed(2);
});

const change = (val, obj) => {
  console.log(val, obj);
  obj.count = val;

  const idx = carts.findIndex(e => e.id === obj.id);
  if (idx === -1) {
    carts.push(obj);
  } else {
    carts[idx].count = val;
    if (val === 0) {
      carts.splice(idx, 1);
    }
  }
};


</script>


<style scoped lang='scss'>

.item{
  height:50px;
  border-bottom: 1px solid #eeeeee;
}
</style>
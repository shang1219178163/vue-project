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
    v-for="(item, index) in procuts" :key="index"
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

import { useShoppingCart } from '@/utils/use/useShoppingCart.js';

const list = reactive([
  {
    id: '9001',
    name: '商品1', 
    price1: 100,
    count: 0,
  },
  {
    id: '9002',
    name: '商品2', 
    price1: 200,
    count: 0,
  },
  {
    id: '9003',
    name: '商品3', 
    price1: '300',
    count: 0,
  },
]);

const {procuts, totalPrice, change} = useShoppingCart([], {
  idKey: 'id', 
  priceKey: 'price1', 
  countKey: 'count', 
  priceFn: (val) => parseInt(val)
});

const obj = {
    id: '9003',
    name: '商品3', 
    price: 300,
  };

console.log('id', obj['id']);
console.log('name', obj['name']);
console.log('price', obj['price']);
console.log('count', obj['count']);

var a=123;

var b='123abc';
var c=123.321;

console.log('typeof(a)', typeof(a));
console.log('typeof(b)', typeof(b));
console.log('typeof(c)', typeof(c));

1.1111.toFixed(3)
// const procuts = reactive([]);

// const totalProcuts = computed(() => {
//   return procuts
//   .filter(e => e.count && e.count > 0)
// });

// const totalPrice = computed(() => {
//   return totalProcuts.value
//   .map(e => e.price * e.count)
//   .reduce((pre, cur) => pre + cur, 0)
//   .toFixed(2);
// });

// const change = (val, obj) => {
//   console.log(val, obj);
//   obj.count = val;

//   const idx = procuts.findIndex(e => e.id === obj.id);
//   if (idx === -1) {
//     procuts.push(obj);
//   } else {
//     procuts[idx].count = val;
//     if (val === 0) {
//       procuts.splice(idx, 1);
//     }
//   }
// };


</script>


<style scoped lang='scss'>

.item{
  height:50px;
  border-bottom: 1px solid #eeeeee;
}
</style>
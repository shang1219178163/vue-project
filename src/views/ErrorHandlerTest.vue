<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  <button 
    v-for="(item, index) in items" :key="index"
    @click="item.fn"
  >
  <!-- {{item.fn.toString()}} -->
    {{item.title}}

  </button>

  <button @click="onClick">onClick</button>
  <button @click="onMore">onMore</button>
  <button @click="onNext">onNext</button>

</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
import { Toast } from 'vant';


const items = reactive([
  {title: '测试1', fn: 'onClick'},
  {title: '测试2', fn: 'onMore'},
]);


const result = ref('');

const onClick = async () => {
  const url = "zcqwwe123";
  try {
    // result.value = decodeURIComponent(url);
    throw 123;
  } catch(e) {
    console.error(e);
  }
};

// const onMore = async () => {
//   tcWrapper(() => { 
//     throw 456;
//   }, (e) => {
//     Toast(e);
//   });
// };


const onMore = async () => {
  const a = 9;

  const result = tcWrapper(function(){
    return a * 'a';
    // return a * a;
  }, (e) => {
    alert(e);
  });
  Toast(`result: ${result}`);
};

const tcWrapper = function(f, cb) {
  return function() {
    try {
      f.apply(this, arguments);
    } catch(e) {
      cb(e)
      return undefined;
    }
  }()
}


const onNext = () => {
  const a = 9;
  const x = function() { return a * 'a'; }();
  console.log(`bool:${x ? 'true': 'false'}`);
  console.log(`x:${x}`);
  console.log(`x:${x ?? '默认值'}`);

  Toast(`x: ${x}`);
};
</script>


<style scoped lang='scss'>

</style>
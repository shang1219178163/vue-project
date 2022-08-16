<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify($route) }}</h1> -->

  <button @click='click'>button</button>
  <button @click='clickOne'>button</button>

</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

import "@/utils/extensions";
import { cached, batch, intercept, tryTime } from '@/utils/hightFn.js'


function compute(str) {
  // Suppose the calculation in the funtion is very time consuming
  console.log('2000ms have passed')
  return str.toUpperCase()
}

function double(num) {
  return num * 2;
}

let computedEnhance = intercept(cached(compute), {
  before: arg => {
    console.log(`before ${arg}`)
  },
  after: res => {
    console.log(`after ${res}`)
  }
});

// let computedEnhance = batch(intercept(cached(compute), {
//   before: arg => {
//     console.log(`processing ${arg}`)
//   },
//   after: res => {
//     console.log(`returned ${res}`)
//   }
// }));

const click = () => {
  // console.log("父组件");

  // const list = '5,吧,c'.split(',');
  // // alert(list[0]);

  // console.log('aabbcc'.replace('b', '.'));
  // console.log('aabbcc'.replaceAll('b', '.'));

  // let timestamp = new Date().getTime();
  // let timestamp1 = Date.now();

  // console.log(`getTime:${timestamp}`);
  // console.log(`now:${timestamp1}`);

  // testone(99)

  let cacheCompute = cached(compute)
  cacheCompute('99');


  // const double = batch(double);
  // console.log('double', double(2));
  // console.log('double', double([2, 3, 4], 'zzz'));


  computedEnhance('[1, 2, 3]')
  // computedEnhance('avc')
};

function once(func) {
  let hasExecuted = false;
  let result;

  return function () {
    if (hasExecuted) return result;

    hasExecuted = true;
    result = func.apply(this, arguments);
    func = null;
    return result;
  };
}

function testTime(val) {
  console.log("tryTime");
}

let test = tryTime(testTime);

const clickOne = async () => {
  test('abc')
};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>

</style>
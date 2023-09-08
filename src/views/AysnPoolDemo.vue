<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  
  <div>
    
  </div>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';



const onRequest = () => {
  let urls = Array(10).fill(0).map((v,i) => i);
  (async () => {
    const res = await asyncPool(3, urls, curl);
    console.log(res);
  })();
};


const curl = (i) => {
  console.log('开始' + i);
  return new Promise((resolve) => setTimeout(() => {
    resolve(i);
    console.log('结束' + i);
  }, 1000+Math.random()*1000));
};

//https://zhuanlan.zhihu.com/p/455838344
async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = [];               //2
  const executing = [];         //3
  for (const item of array) {   //4
    const p = Promise.resolve().then(() => iteratorFn(item));  //5
    ret.push(p);                //6
    if (poolLimit <= array.length) { //7
      const e = p.then(() => executing.splice(executing.indexOf(e), 1)); //8
      executing.push(e);        //9
      if (executing.length >= poolLimit) {  //10
        await Promise.race(executing);      //11
      }
    }
  }
  return Promise.all(ret);     //15
}

</script>


<style scoped lang='scss'>

</style>




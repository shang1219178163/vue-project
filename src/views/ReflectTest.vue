<template>
  <div class="page">
    <navbar
      isleftarrow
      navBarTitle="热门活动" 
      closeWebview
    >
      <template #right>
        <van-icon name="ellipsis" size="17" @click="onMore" />
      </template>
    </navbar> 
    <div class="page-leave">
      list
    </div>
    <button class="button" @click="">button</button>
  </div>
</template>


<script setup>
import navbar from '@/components/navbar.vue';

import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

let p = {
  name: 'aa',
  age: 18
}

const onMore = () => {
  Object.defineProperty(p, '__v_isRef', {
     value: true
   })

   Reflect.defineProperty(p, '__v_isRef222', {
      value: '__v_isRef222'
   })
  console.log(JSON.stringify(p));

  console.log(JSON.stringify(Reflect.get(p, '__v_isRef')));
  console.log(JSON.stringify(Reflect.get(p, '__v_isRef222')));
};



function toRef(obj, key) {
  const wrapper = {
    get value() {
       return obj[key];
     },
     // 允许设置值
     set value(val) {
       obj[key] = val;
     }
   }

   Object.defineProperty(wrapper, '__v_isRef111', {
     value: true
   })
   return wrapper;
 }

</script>


<style scoped lang='scss'>

.page{
  border: 5px solid blue;

  height: 100%;

  display: flex;
  flex-direction: column;
}

.page-leave {
  background-color: green;
  flex: 1;
}


</style>
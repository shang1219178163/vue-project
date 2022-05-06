<template>
  <div class="container" >
    <input v-model="form.name" style="margin-right: 16px" />
    <input v-model="form.age" />
    <input v-model="token" />

    <button @click="onStorageLocal">useStorageLocal</button>
    <button @click="onStorageSession">useStorageSession</button>

  </div>
</template>


<script setup>
import { getCurrentInstance, defineProps, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;

import { useStorageLocal, useStorageSession } from "@/utils/use/useStorage"


// 3、注意点：需要注意的是
// （1）只有在数据的内容确实发生改变的时候，才会触发 storage 事件。如果把一个值设置成一模一样的值，或删除一个根本就不存在的存储项，则不会触发 storage 事件。
// （2）并且，storage 事件只会发送给同源、而且处于打开状态的其它页面，而不会发送给触发改变的页面本身及处于关闭状态的页面。
window.addEventListener('storage', () => {
  console.log('storage');    
  // console.log(JSON.parse(window.localStorage.getItem('sampleList')));    
});

const token = useStorageLocal('token');

const form = useStorageLocal('user', {
  name: 'Local',
  age: 18,
});

const token1 = useStorageSession('token1');

const form1 = useStorageSession('user1', {
  name: 'Session',
  age: 8,
});

const onStorageLocal = () => {
  form.value.name += 'n';
  form.value.age += 2;
  console.log(">>>", form);

  token.value += "t";
  console.log(">>>", token.value);
};

const onStorageSession = () => {
  form1.value.name += 'n';
  form1.value.age += 2;
  console.log(">>>", form1);

  token1.value += "t";
  console.log(">>>", token1.value);
};


</script>


<style scoped lang='scss'>
.container{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-evenly;
}
</style>
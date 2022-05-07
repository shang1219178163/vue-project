<template>
  <div>
    <button @click="click">useToast</button>
        <button @click="click1">XToast</button>

  </div>
</template>


<script setup>
import { getCurrentInstance } from 'vue';

import { useToast } from "@/components/useToast.js";
import XToast from "@/components/XToast";

const Toast = useToast(); 
      
const click = () => {
  Toast("Hello World");
}


const currentInstance = getCurrentInstance();
const { $toast } = currentInstance.appContext.config.globalProperties;
// console.log(currentInstance);

const click1 = () => {
  $toast.show('添加到购物车成功',1500);
}
</script>
<style lang="">
  
</style>
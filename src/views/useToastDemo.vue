<template>
  <div>
    <button @click="click">useToast</button>
    <button @click="click1">XToast</button>
    <button @click="click2">XToast html</button>
    <button @click="click3">XToast img</button>
  </div>
</template>


<script setup>
import { getCurrentInstance } from 'vue';

import { useToast } from "@/components/useToast.js";
// import XToast from "@/components/XToast";

const Toast = useToast(); 
      
const click = () => {
  Toast("Hello World");
}


const currentInstance = getCurrentInstance();
const { $xtoast } = currentInstance.appContext.config.globalProperties;
// console.log(currentInstance);

const click1 = () => {
  $xtoast.show({message: '添加到购物车成功', duration: 1000, overlayClick: () => { 
    $xtoast.clear();
    console.log("overlayClick"); 
  }});
}

const click2 = () => {
  $xtoast.show({
    type:"html",
    duration: 0, 
    // message: `<van-image width="44px" height="44px" src="require('@/assets/images/call_phone.png')" />`, 
    // message: `<img width="44px" height="44px" src="@/assets/images/call_phone.png" />`, 
    // message: `<img width='44' height='44' src='src/assets/images/img_loading.gif' alt='' />`, 
    message: "<img src=\"https://www.baidu.com/img/flexible/logo/pc/result.png\" />", 
    contentBg: "red",
    overlayClick: () => { 
      $xtoast.clear();
      console.log("overlayClick"); 
  }});
}

const click3 = () => {
  $xtoast.show({
    type:"html",
    duration: 0, 
    message: `<img width='44' height='44' :src="require('@/assets/images/img_loading.gif')" alt='' />`, 
    contentBg: "red",
    overlayClick: () => { 
      $xtoast.clear();
      console.log("overlayClick"); 
  }});
}

// const click3 = () => {
//   $xtoast.show({
//     type:"img",
//     duration: 0, 
//     message: `<img width='44' height='44' :src="require('@/assets/images/img_loading.gif')" alt='' />`, 
//     contentBg: "red",
//     overlayClick: () => { 
//       $xtoast.clear();
//       console.log("overlayClick"); 
//   }});
// }

                

</script>
<style lang="">
  
</style>
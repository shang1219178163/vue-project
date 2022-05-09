<template>
  <div>
    <button @click="click">useToast</button>
    <button @click="click1">VToast</button>
    <button @click="click2">VToast html</button>
    <button @click="click3">VToast img</button>
  </div>
</template>


<script setup>
import { getCurrentInstance } from 'vue';

import { useToast } from "@/components/useToast.js";

const Toast = useToast(); 
      
const click = () => {
  Toast("Hello World");
}


const currentInstance = getCurrentInstance();
const { $vtoast } = currentInstance.appContext.config.globalProperties;
// console.log(currentInstance);

const click1 = () => {
  $vtoast.show({
    template: '添加到购物车成功', 
    duration: 1000, 
    overlayClick: () => { 
      $vtoast.clear();
      console.log("overlayClick"); 
    }
  });
}

const click2 = () => {
  $vtoast.show({
    type:"html",
    duration: 0, 
    // template: `<van-image width="44px" height="44px" src="require('@/assets/images/call_phone.png')" />`, 
    // template: `<img width="44px" height="44px" src="@/assets/images/call_phone.png" />`, 
    // template: `<img width='44' height='44' src='src/assets/images/img_loading.gif' alt='' />`, 
    template: "<img src=\"https://www.baidu.com/img/flexible/logo/pc/result.png\" />", 
    contentBg: "green",
    overlayClick: () => { 
      $vtoast.clear();
      console.log("overlayClick"); 
    }
  });
}

const click3 = () => {
  $vtoast.show({
    type:"html",
    duration: 0, 
    // template: `<img width='44' height='44' src="require('@/assets/images/img_loading.gif')" />`, 
    template: `<img width='44' height='44' src="src/assets/images/img_loading.gif" />`, 
    contentBg: "red",
    overlayClick: () => { 
      $vtoast.clear();
      console.log("overlayClick"); 
    }
  });
}

// const click3 = () => {
//   $vtoast.show({
//     type:"img",
//     duration: 0, 
//     template: `<img width='44' height='44' :src="require('@/assets/images/img_loading.gif')" alt='' />`, 
//     contentBg: "red",
//     overlayClick: () => { 
//       $vtoast.clear();
//       console.log("overlayClick"); 
//   }});
// }

                

</script>
<style lang="">
  
</style>
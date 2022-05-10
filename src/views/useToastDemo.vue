<template>
  <div>
    <van-cell-group inset title="自定义 Toast">
      <van-cell
        is-link 
        v-for="(e, index) in list" :key="index"
        :title="e.name" 
        :value="e.func"
        @click='this[e.func]()'
      />
    </van-cell-group>
  </div>
</template>


<script setup>
import { getCurrentInstance, reactive } from 'vue';

import { useToast } from "@/components/useToast.js";

import imgLoading from '@/assets/images/img_loading.gif';
import imgLoading_base64 from '@/assets/images/img_loading_base64.js';

const list = reactive([
  {name: "useToast", func: "onClick", },
  {name: "VToast", func: "click1", },

  {name: "VToast 网络图片", func: "click2", },
  {name: "VToast 本地图片", func: "click3", },
  {name: "VToast loading", func: "click4", },
  {name: "VToast loading img", func: "click5", },
]);

const Toast = useToast(); 
      
const onClick = () => {
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

  // setTimeout(() => {
  //   click3()
  // }, 1500)
}

const click3 = () => {
  $vtoast.show({
    type:"html",
    // template: "<img src=\"https://www.baidu.com/img/flexible/logo/pc/result.png\" />", 
    template: `<img width='64' height='64' src="${imgLoading_base64}" />`, 
    // template: `<img width='44' height='44' :src="img_loading_base64" />`, 
    contentBg: "green",
    overlayClick: () => { 
      $vtoast.clear();
      console.log("overlayClick"); 
    }
  });
}

const click4 = () => {
  $vtoast.loading({});
  setTimeout(() => {
    $vtoast.clear()
  }, 1500)
}

const click5 = () => {
  $vtoast.loading_img({});
  setTimeout(() => {
    $vtoast.clear()
  }, 1500)
}



                
</script>
<style lang="">
  
</style>
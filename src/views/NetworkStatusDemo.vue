<template>
  <div>
    <h1>网络状态检测</h1>
    <button @click="onClick">button</button>
  </div>
</template>


<script setup>
import { getCurrentInstance, isRef, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;
import {useNetworkStatus} from "@/utils/use/useNetworkStatus"

const isOnline = useNetworkStatus();

const onClick = async () => {
  console.log("isOnline:", isOnline.value);

  alert(isOnline.value);
};

</script>


<style scoped lang='scss'>

</style>
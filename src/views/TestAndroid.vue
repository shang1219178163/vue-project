<template>
  <div>
    <button >button</button>
    <div v-for="(item, index) in list" :key="index">{{item.toString()}}</div>
  </div>
</template>


<script setup>
import { getCurrentInstance, defineProps, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;

let list = reactive([])

const onRefresh = async () => {

};

const onMore = async () => {

};

document.onkeyup = function(e){
  console.log("onkeyup", e);
  list.push(e);
};

window.addEventListener('keyup', function(e) {
    console.log("addEventListener", event);
  list.push(e);
  if (e.keyCode === 24) {
    // 音量增加
  }else if(e.keyCode === 25){
    // 音量减小
  }
})

</script>


<style scoped lang='scss'>

</style>
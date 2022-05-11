<template>
  <div>
    <button @click="click">button</button>
    <button @click="click1">button1</button>
    <button @click="click2">button2</button>

  </div>
</template>


<script setup>
import { createApp, getCurrentInstance, defineProps, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;

const currentInstance = getCurrentInstance();
const { $uplus, $log: LOG, $vtoast} = currentInstance.appContext.config.globalProperties;
// LOG.log(instance.type.__file);

const click = async () => {
  // VToastOne()
  $vtoast.show({
    duration: 0, 
    overlayClick: () => {
      $vtoast.clear();
    }}
  );
};


const click1 = async () => {
  $vtoast.loading({});
  setTimeout(() => {
    $vtoast.clear();
  }, 3000)
};

const click2 = async () => {
  $vtoast.clear();
};

</script>


<style scoped lang='scss'>

</style>
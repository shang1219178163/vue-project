<template>
  <div>
    <button @click="click">button</button>
  </div>
</template>


<script setup>
import { getCurrentInstance, defineProps, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;
import VToastOne from '@/components/VToastOne';


const click = async () => {
  VToastOne()
};

</script>


<style scoped lang='scss'>

</style>
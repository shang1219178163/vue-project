<template>
  <div>
    <button @click="toggle()">点击 {{ state }} </button>
    <button @click="toggle1()">点击 {{ state1 }}</button>
    <button @click="toggle2()">点击 {{ state2 }}</button>
  </div>
</template>


<script setup>
import { getCurrentInstance, defineProps, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;

import { useToggle } from "@/utils/use/useToggle"

const { state, toggle } = useToggle();
const { state: state1, toggle: toggle1} = useToggle("a", "b");
const { state: state2, toggle: toggle2} = useToggle(1, false);


const onRefresh = async () => {

};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>

</style>
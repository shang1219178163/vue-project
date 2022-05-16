<template>
  <div>
    <h1>Click Outside</h1>
    <div ref="container">View</div>
    <button @click="onClick">button</button>
  </div>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;
import {useOnClickOutside} from "@/utils/use/useOnClickOutside"

const container = ref(null);
const isOutside = useOnClickOutside(container, (val) => {
  console.log(val ? 'Clicked outside' : "inside"); 
});

const onClick = async () => {
  // console.log(isOutside.value ? 'Clicked outside' : "inside"); 
};

// useOnClickOutsideOne(container, () => {
//     console.log('Clicked outside'); 
// })

</script>


<style scoped lang='scss'>

</style>
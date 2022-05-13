<template>
  <div>
    <h1>provide&&inject</h1>
    <button @click="onClick">inject</button>
  </div>
</template>


<script setup>
import { getCurrentInstance, defineProps, ref, reactive, watch, onMounted, } from 'vue';
import { provide, inject } from 'vue';
import { useInject } from '@/utils/use/useInject';

// const { injectValue, setInject } = useInject("ccc", "aaa", "-")
// console.log("injectValue:", injectValue);

  // const injectValue = inject("test");
  // console.log("injectValue:", injectValue);

// const isOnline = navigator.onLine ? 'online' : 'offline';
// console.log("isOnline", isOnline);

// const { injectValue, setInject } = useInject("", "aaa", "-")
// setInject("bb")
// console.log("injectValue:", injectValue);

// const { injectValue: injectValue1, setInject: setInject1 } = useInject("", "aaa", "-")
// setInject1("cc")
// console.log("injectValue1:", injectValue1);

const onClick = () => {

}

</script>


<style scoped lang='scss'>

</style>
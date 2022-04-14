<template>
  <div>
    <input type="text" ref="inputRef" value="1111" />
    <input type="text" ref="input2Ref">
    <span>123</span>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref, onMounted } from "vue";

const instance = getCurrentInstance();
console.log(instance.type.__file, instance);

const inputRef = ref(null);

onMounted(() => {
    console.log("inputRef.value", inputRef.value); /** 这是inputDom */
    console.log("inputRef.value.value", inputRef.value.value) /** 1111 */ 

    console.log("instance.refs", instance.refs)
});

</script>

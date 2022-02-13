<template lang="">
    <div>AttrsGrandChild</div>
    <button @click="bar">bar</button>
    <button @click="emit('tap', 'tap')">tap</button>
</template>

<script setup>
import { useSlots, useAttrs, getCurrentInstance, defineEmits, inject } from 'vue'

const instance = getCurrentInstance();
// console.log(instance.type.__file, instance) ; 

const emit = defineEmits(["bar", "tap",])

const bar = () => {
    emit("bar", "皮球")
}

// const abc = inject("abc");
const obj = inject("user");
console.log(instance.type.__file, obj);


</script>
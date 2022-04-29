<template>
    <div>AttrsChild</div>
    <button @click="bar">bar</button>
    <button @click="emit('tap', 'tap')">tap</button>
</template>

<script setup>
import { ref, useSlots, useAttrs, getCurrentInstance, defineProps, defineExpose, defineEmits, inject } from 'vue'

const props = defineProps({
    aa: {
        type: String,
        default: "小明aaa"
    },
    bb: {
        type: Number,
        default: 188
    },
})

const slots = useSlots()
const attrs = useAttrs()

const a = ref("aa")
const b = ref(true)

// console.log("slots", slots);
console.log("attrs", attrs, attrs.webName);

const instance = getCurrentInstance();
// console.log(instance.type.__file, instance) ; 

const emit = defineEmits(["bar", "tap",])

const bar = () => {
    emit("bar", "皮球")
}

// const abc = inject("abc");
const obj = inject("user");
// console.log(instance.type.__file, obj);


defineExpose({
    a, b
})

</script>
<template>
    <input type="checkbox" :checked="checked" @change="onChange" >{{ title }}
</template>


<script setup>
import {ref, reactive, defineProps, defineEmits} from 'vue';
// import { Toast } from 'vant;

const props = defineProps({
    checked: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: ''
    },
})

const emit = defineEmits(['change',])

const onChange = (e) => {
    // console.log("checkbox:", e.target.checked);
    emit("change", e.target.checked)
}

</script>


<style scoped lang='scss'>

</style>
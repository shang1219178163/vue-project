<template>
    <input type="text" :value="value" @input="onInput($event.target.value)" >
</template>


<script setup>
import {ref, reactive, } from 'vue';

const props = defineProps({
    value: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(['input',])

const onInput = (value) => {
    emit("input", value)
}

</script>


<style scoped lang='scss'>

</style>
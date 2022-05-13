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

// <input v-model='searchText' />
// 和下面这段代码是等价的：

// <input
//   :value='searchText'
//   @input='searchText = $event.target.value'
// />
</script>


<style scoped lang='scss'>

</style>




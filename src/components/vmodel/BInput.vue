<template>
  <input
    class="input"
    type="text"
    :placeholder="label"
    :value="modelValue"
    @input="updateValue($event.target.value)"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    modelValue: String,
    label: String,
})

const emit = defineEmits(['update:modelValue'])

function updateValue(value) {
  emit('update:modelValue', value)
}


</script>


<style scoped lang='scss'>

</style>
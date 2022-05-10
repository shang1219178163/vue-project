<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @input="updateValue($event.target.checked)"
  />
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue'])

function updateValue(value) {
  emit('update:modelValue', value)
}

</script>


<style scoped lang='scss'>

</style>
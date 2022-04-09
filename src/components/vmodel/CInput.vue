<template>
  <input
    class="input"
    type="text"
    :placeholder="label"
    :value="aaa"
    @input="change($event.target.value)"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    aaa: String,
    label: String,
})

const emit = defineEmits(['update:aaa'])

function change(value) {
  emit('update:aaa', value)
}


</script>


<style scoped lang='scss'>

</style>
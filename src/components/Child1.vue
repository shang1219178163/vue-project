<template>
  <div>
    子组件
    <h1>{{ newCount }}</h1>
    <button @click="increment">子组件+</button>
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  count: Number,

})

const emit = defineEmits(["increment"])

const expose = defineExpose({
    newCount: {
      type: Number,
      required: true
    },
})

const newCount = computed({
  get: () => props.count,
  set: (value) => this.$emit("increment:count"),
})

const increment = () => {
    newCount.value++
}



</script>




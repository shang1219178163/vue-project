
<template>
  <!-- <h1>{{ $route.name }} </h1> -->
  <div>Open your console.log to see the element</div>
</template>

<script setup>
import { useCurrentElement } from '@vueuse/core'
import { watchEffect } from 'vue'

const el = useCurrentElement()

watchEffect(() => {
  console.log('Current element:', el.value)
})
</script>

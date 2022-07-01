<template>
  <div 
    class="wrapper"
    ref="el">
    Swipe here {{ isSwiping }} {{ direction}}
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSwipe } from '@vueuse/core'

const el = ref(null)
const { isSwiping, direction } = useSwipe(el)
  
</script>


<style scoped> 
.wrapper{
  border: 1px solid red;
}
</style>
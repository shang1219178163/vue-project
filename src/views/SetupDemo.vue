<template>
    <div>
        <span>{{ count }}</span>
        <div>
            <button @click="add">+</button>
            <button @click="sub">-</button>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'

const count = ref(9)
const add = () => {
  count.value++
}
const sub = () => {
  count.value--
}


</script>

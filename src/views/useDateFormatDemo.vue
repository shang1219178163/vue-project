<template>
  <h1>{{ $route.meta.title }}</h1>
  <div>dateStr: {{ dateStr }}</div>

  <hr>
  <h2>useTimeAgo</h2>
  <div class="text-primary text-center">
    {{ timeAgo }}
  </div>
  <input v-model="slider" class="slider" type="range" min="-3800" max="3800">
  <div class="text-center opacity-50">
    {{ slider ** 3 }}ms
  </div>
  <div>{{dateStr1}}</div>
</template>


<script setup>
import { ref, computed } from 'vue'
import { useNow, useDateFormat, useTimeAgo } from '@vueuse/core'

const now = Date.now();
const dateStr = useDateFormat(now, 'YYYY-MM-DD HH:mm:ss')


const slider = ref(0)
const value = computed(() => now + slider.value ** 3)
const timeAgo = useTimeAgo(value)

const dateStr1 = computed(() => useDateFormat(now + slider.value ** 3, 'YYYY-MM-DD HH:mm:ss'))
console.log(dateStr1);
</script>


<style scoped lang='scss'>
.slider {
  -webkit-appearance: none;
  width: 100%;
  background: rgba(125, 125, 125, 0.1);
  border-radius: 1rem;
  height: 0.3rem;
  opacity: 0.8;
  margin: 0.5rem 0;
  outline: none !important;
  transition: opacity .2s;
}
.slider:hover {
  opacity: 1;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: .3rem;
  height: .3rem;
  cursor: pointer;
  border-radius: 50%;

  background: var(--theme-color);
}
</style>


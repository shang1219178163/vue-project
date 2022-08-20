<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  
  <div>
    <div>
      See scroll values in the lower right corner of the screen.
    </div>
    <div class="scroller" />
    <div class="float">
      <div class="mb-2">
        Scroll value
      </div>
      x: {{ x }}<br>
      y: {{ y }}
    </div>
  </div>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';
import { useWindowScroll } from '@vueuse/core'

const { x, y } = useWindowScroll()

</script>


<style scoped lang='scss'>
.scroller {
  position: absolute;
  top: 100%;
  left: 100%;
  width: 10000px;
  height: 10000px;
}


</style>
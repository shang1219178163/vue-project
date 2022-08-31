<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  
  <div class="pad">
    
  </div>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

const handleRouteParams = () => {

};

onMounted(() => {
  handleDragUp();
});

const handleDragUp = () => {
  const MIX_HEIGHT = 360
  // const el = document.getElementsByClassName('.pad')[0];
  const el = document.getElementsByClassName('pad')[0];
  if (!el) {
    return;  
  }

  console.log(el);

  let startY = 0
  let distanceY = 0
  let baseHeight = 0  // 原始高度
  el.style.bottom = -MIX_HEIGHT + 'px'
  el.addEventListener('touchstart', e => {
    startY = e.touches[0].clientY
    baseHeight = Math.abs(parseInt(el.style.bottom))
  })
  el.addEventListener('touchmove', e => {
    console.log('touchmove', baseHeight, distanceY)
    distanceY = e.touches[0].clientY - startY
    if (baseHeight === 0 && distanceY < 0) { // 当展示全部的时候，不能再往上滑动，限制住
      el.style.bottom = 0 + 'px'
    } else {
      el.style.bottom = -(baseHeight + distanceY) + 'px'
    }
  })
  el.addEventListener('touchend', () => {
    console.log('end')
    // 滑动结束时：当滑动的距离大于20，展示全部，反之回去
    if (distanceY < -50) {
      el.style.bottom = 0 + 'px'
    } else if (distanceY > 50) {
      el.style.bottom = -MIX_HEIGHT + 'px'
    } else {
      el.style.bottom = -baseHeight + 'px'
    }
    // 移动完成后初始化数据
    startY = 0
    distanceY = 0
  })
}



</script>


<style scoped lang='scss'>
.pad{
  width: 100%;
  height:500px;
  background-color: aqua;
  position: absolute;
  transform: all .3s ease-out;

}
</style>
<template>
  <div class="container">
    <h1>{{ $route.meta.title }}</h1>
    <!-- <div class="box">
      <div class="column">
        <span class="item"></span>
        <span class="item"></span>
      </div>
      <div class="column">
        <span class="item"></span> 
        <span class="item"></span>
      </div>
    </div> -->

    <div>Y:{{touchY}},</div>

    <div class="float--detail">
      <div class="float--detail--child">
        <div
          class="float--detail--child__item" 
          v-for="(item, index) in 20" :key="index"
          @click="click"
        >
          Row_{{ index }}
        </div>
      </div>
    </div>

    <div class="float--bottom">
      <div 
        class="float--bottom--box"
        v-for="(item, index) in 3" :key="index"
        @click="click"
      >
      第{{index}}页
      </div>
    </div>
  
  </div>

</template>

<script setup>
import flex1 from "@/components/Flex/Flex_1.vue";
import flex2 from "@/components/Flex/Flex_2.vue";

import { ref, reactive, watch, onMounted, } from 'vue';

onMounted(() => {
  bindTouchEvents();
});

// const list = [
//         {name: '样式1', tag: 'grid1'},
//         {name: '样式2', tag: 'grid2'}
//       ]

const tap = () => {
  alert("tap");
};

const click = (val) => {
  console.log('click', val);
};

const touchX = ref(0);
const touchY = ref(0);

    // 修改滑动容器行为
const bindTouchEvents = () => {
  const el = document.getElementsByClassName('float--detail')[0];
  if (!el) {
    console.warn('未获取到表格元素')
    return;
  }


  let startX = 0;
  let startY = 0;

  el.addEventListener('touchstart', event => {
      event.preventDefault()
      startX = event.changedTouches[0].clientX;
      startY = event.changedTouches[0].clientY;

      touchX.value = startX;
      touchY.value = startY;
    },
    true
  );

  el.addEventListener('touchmove', event => {
      event.preventDefault()

      touchX.value = event.changedTouches[0].clientX;
      touchY.value = event.changedTouches[0].clientY;
      // 计算手指偏移量
      const offsetX = touchX.value - startX;
      const offsetY = touchY.value - startY;

      // el.scrollLeft = el.scrollLeft - offsetX;
      // el.scrollTop = el.scrollTop - offsetY;

      // console.log('el.scrollTop:', el.scrollTop, offsetY, Math.abs(offsetY));

      // el.style.height = Math.abs(offsetY) + 'px';
      el.style.top = offsetY + 'px';

    },
    true
  );

  el.addEventListener('touchend', event => {
      event.preventDefault()

      touchX.value = event.changedTouches[0].clientX;
      touchY.value = event.changedTouches[0].clientY;
      console.log('el.style.top:', el.style.top, typeof el.style.top);
      if (el.style.top.startsWith('-')) {
        el.style.top = '0px';
      }
    },
    true
  );
}
</script>

<style scoped>
/* div{
  border: 0.3px solid blue;
} */

.container{
  /* position: relative; */
}

.box {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  background-color: green;
}
.column {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
}
.item{
  margin: 8px;
  width: 10px;
  height: 10px;
  background-color: red;
}

.float--detail{
  position: absolute;
  top: calc(100% - 200px);

  width: calc(100% - 0px);
  height: 200px;

  /* overflow:hidden; */

  background-color: orange;
}
.float--detail--child{
  position: absolute;

  background-color: red;
  top:20px;
  left:20px;
  right:20px;

  height: 500px;
}
.float--detail--child__item{
  height: 50px;
}


.float--bottom{
  position: absolute;

  width: calc(100% - 0px);
  height: 160px;

  /* bottom: 8px; */
  top: calc(100% - 160px - 0px);

  border: 0.5px solid blue;
  background: green;

  display: flex;

  overflow: auto;
}

.float--bottom--box{
  flex-shrink: 0;

  width: calc(100% - 30px);

  /* padding: 0 8px; */
  margin: 8px 8px 8px 0;
  border: 1px solid blue;

  background: yellow;
}
.float--bottom--box:first-child{
  margin-left: 16px;
}

.float--bottom--box:last-child{
  margin-right: 16px;
}
</style>

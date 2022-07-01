<template>
  <div class="delete">
    <div class="slider">
      <div
        class="content"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        :style="deleteSlider"
      >
        <!-- 插槽中放具体项目中需要内容         -->
        <slot></slot>
      </div>
      <div class="remove" ref="removeRef">删除</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

let startX = 0; //触摸位置
let endX = 0; //结束位置
let moveX = 0; //滑动时的位置
let disX = 0; //移动距离
let deleteSlider = ref('');//滑动时的效果,使用v-bind:style="deleteSlider"

let removeRef = ref(null);

onMounted(() => {
  console.dir(removeRef.value);
});

function touchStart(ev){
  //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
  if(ev.touches.length === 1){
    // 记录开始位置
    startX = ev.touches[0].clientX;
  }
};

function touchMove(ev){
    //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
  let wd = removeRef.value.offsetWidth;
  if(ev.touches.length === 1) {
    // 滑动时距离浏览器左侧实时距离
    moveX = ev.touches[0].clientX;

    //起始位置减去 实时的滑动的距离，得到手指实时偏移距离
    disX = startX - moveX;
    console.log('touchMove', disX);
    // 如果是向右滑动或者不滑动，不改变滑块的位置
    if(disX <= 0) {
      deleteSlider.value = "transform:translateX(0px)";
    // 大于0，表示左滑了，此时滑块开始滑动
    } else if (disX > 0) {
      //具体滑动距离我取的是 手指偏移距离*5。
      deleteSlider.value = "transform:translateX(-" + disX*5 + "px)";

      // 最大也只能等于删除按钮宽度
      if (disX*5 >=wd) {
        deleteSlider.value= "transform:translateX(-" +wd+ "px)";
      }
    }
  }
};

function touchEnd(ev){
  let wd = removeRef.value.offsetWidth;
  if (ev.changedTouches.length == 1) {
    let endX = ev.changedTouches[0].clientX;

    disX = startX - endX;
    console.log('touchEnd', disX)
    //如果距离小于删除按钮一半,强行回到起点
    if ((disX*5) < (wd/2)) {
      deleteSlider.value = "transform:translateX(0px)";
    } else  {
      //大于一半 滑动到最大值
      deleteSlider.value = "transform:translateX(-"+wd+ "px)";
    }
  }
}


</script>

<style scoped lang="scss">


$height: 200px;

.slider {
  width: 100%;
  height: 200px;
  position: relative;
  user-select: none;
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    overflow: hidden;
    background: green;
    z-index: 100;
    //    设置过渡动画
    transition: 0.3s;
  }
  .remove {
    position: absolute;
    width: 200px;
    height: 200px;
    background: red;
    right: 0;
    top: 0;
    color: #fff;
    text-align: center;
    font-size: 40px;
    line-height: 200px;
  }
}
</style>

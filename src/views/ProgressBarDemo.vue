<template>
  <h1>进度条</h1>
  <button @click="onClick">button</button>
  <h1>VProgressBar</h1>
  <VProgressBar :percent="percent" @finished="finished"> </VProgressBar>

  <!-- <h1>circle ProgressBar</h1>
  <div class="box">
    <div class="box__bg--left"></div>
    <div class="box__bg--right"></div>
    <div class="box__indicator--left"></div>
    <div class="box__indicator--right"></div>
    <div class="content">
    </div>
  </div> -->
</template>

<script setup>
import { ref, reactive, watch, onMounted } from "vue";
import { Toast } from "vant";

const percent = ref(0);

const onClick = async () => {
  if (percent.value >= 100) {
    percent.value = 0;
  }
  setInterval(() => {
    if (percent.value < 100) {
      percent.value += 1;
    }
  }, 100);
};

const finished = () => {
  Toast("操作完成");
};
</script>

<style scoped lang="scss">

$width: 120x;
$height: 120x;

$indicatorColor: blue;
$indicatorBg: #e4e4e4;

.box{
  position: relative;
}
.content {
  position: absolute;
  
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;

  border-radius: 50%;

  background:red;
  z-index: 5;
}

.box__bg--left{
  position: absolute;
  width: 60px;
  height: 120px;
  border-radius: 120px 0 0 120px;
  z-index: 3;
  background: $indicatorBg;
}

.box__bg--right{
  left: 60px;
  position: absolute;
  width: 60px;
  height: 120px;
  border-radius: 0px 120px 120px 0;
  z-index: 1;
  background: $indicatorBg;
}

.box__indicator--left{
  position: absolute;
  left: 60px;
  width: 60px;
  height: 120px;
  border-radius: 0px 120px 120px 0px;
  z-index: 2;
  background: $indicatorColor;
  transform: rotate(-180deg);
  transform-origin: 0px 60px;

  animation: pr1A 5s infinite linear forwards;
}

.box__indicator--right {
  position: absolute;
  left: 60px;
  border-radius: 0px 120px 120px 0px;
  z-index: 4;
  background: $indicatorColor;
  transform: rotate(-180deg);
  transform-origin: 0px 60px;

  animation: pr2A 5s infinite linear forwards;
}

@keyframes pr1A {
  0% {
    transform: rotate(-180deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes pr2A {
  0% {
    transform: rotate(-180deg);
  }
  100%{
    width: 60px;
    height: 120px;
    transform: rotate(180deg);
  }
}
</style>

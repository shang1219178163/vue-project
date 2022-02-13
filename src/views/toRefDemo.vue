<template>
  <div class="demo">
    <div>姓名--state.name：{{ state.name }}</div>
    <div>姓名2--nameRef：{{ nameRef }}</div>
    <div>年龄：{{ state.age }}</div>

    <div>nameRef1: {{ nameRef1 }}</div>
  </div>
</template>

<script setup>
import { reactive, toRef } from "vue";

import data from "./ReactiveData";

const nameRef1 = toRef(data(), "name");

// 响应式对象
const state = reactive({
  name: "太凉",
  age: 18,
});

// 通过toRef创建一个Ref响应式
const nameRef = toRef(state, "name");

// 过3秒后改变 两者 保持引用关系
setTimeout(() => {
  // update1:改变name属性
  state.name = "冰箱太凉";
  nameRef1.value = "ayuan2";
}, 3000);

// 过6秒后改变 两者 保持引用关系
setTimeout(() => {
  // update1:改变name属性
  nameRef.value = "我就是冰箱太凉";
}, 6000);
</script>

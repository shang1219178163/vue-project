<template>
  <div>
    <div>countRef:{{ countRef }}</div>
    <div>objCountRef:{{ objCountRef.count }}</div>
    <div>爱好：{{ hobbyRef.join("---") }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 值类型
const countRef = ref(1);
console.log(countRef);

// 对象
const objCountRef = ref({ count: 1 });

// 数组
const hobbyRef = ref(["爬山", "游泳"]);

setTimeout(() => {
  // 通过value改变值
  countRef.value = 2;
  objCountRef.value.count = 3;
  hobbyRef.value.push("吃饭");
}, 3000);
</script>

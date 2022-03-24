<template>
  <div>
    ddlog彩色日志封装
    <button @click="clickButton">button</button>
    <button @click="clickButton2">实现方式</button>
  </div>
</template>

<script setup>
import { ddlog, ddlogDemo } from "@/lib/ddlog.js";

const clickButton = () => {
  const greeting = "Hello,world";
  ddlog(greeting);
  console.log(greeting);

  console.log('%c this is a message','color:#0f0;')
  console.log('%c this %c is a %c message','color:#f00;','font-size:16px;','color:blue;background:yellow;')

  console.log('%c this is a message','color:green;')
  console.log('%c this is a message','color:blue;')
  console.log('%c this is a message','color:red;')

//   console.log('color:#0f0; this is a message')
//   console.log('color:#f00; this is a message','color:#f00;','font-size:20px;','color:blue;background:yellow;')
};

const clickButton2 = () => {
    ddlogDemo() 

};


</script>

<style lang=""></style>

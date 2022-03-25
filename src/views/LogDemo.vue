<template>
  <div>
    ddlog彩色日志封装
    <button @click="clickButton">button</button>
    <button @click="clickButton2">实现方式</button>
  </div>
</template>

<script setup>
import { ddlog, ddlogExample, printInfo } from "@/lib/ddlog.ts";

//引入工具类包，有一些帮助函数可以使用，这里主要使用的是格式化的部分。
var util = require('util');

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
    ddlog("Hello,world", "a", "b", "c")

    // ddlogExample() 
    // console.warn("Hello,world", "a", "b", "c")

    // let traceString = Error().stack
    // const list = traceString.split("\n")
    // console.log(list);
  // log("Normal Logs");
  // log("Warning Logs", Style.warning);
  // log("Success Logs", Style.success);

  printInfo("Hello,world", "a", "b", "c")
};

const Style = {
  base: [
    // "color: #fff",
    // "background-color: #444",
    "color: #000",
    "padding: 2px 4px",
    "border-radius: 2px"
  ],
  warning: [
    // "color: #eee",
    // "background-color: red"
  ],
  success: [
    // "background-color: green"
  ]
}
const log = (text, extra = []) => {
  let style = Style.base.join(';') + ';';
  style += extra.join(';'); // Add any additional styles
  console.log(`%c${text}`, style);
}

// const printLog = () => {
//     // ddlogDemo() 
    
//     let traceString = Error().stack
//     console.log(traceString);

//     const list = traceString.split("\n")
//     console.log(list);

//     // const str = "    at clickButton2 (webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/LogDemo.vue?vue&type=script&setup=true&lang=js:35:25)"
//     const matchFuncs = list[1].match(/at (\S*) \(/);
//     if (matchFuncs == undefined || matchFuncs.length < 2) {
//         console.log()
//         return
//     }
//     // console.log("matchs", matchFuncs)
//     const funcName = matchFuncs[1];
//     console.log(`_${funcName}_`);

//     const matchFiles = list[1].match(/[a-zA-Z0-9]*\.vue/);
//     if (matchFiles == undefined || matchFiles.length == 0) {
//         console.log()
//         return
//     }
//     console.log("matchFiles", matchFiles);

//     console.log(`${matchFiles[0]} ${funcName}: `)
// };


// var getStackTrace = function() {
//   var obj = {};
//   Error.captureStackTrace(obj, getStackTrace);
//   return obj.stack;
// };


</script>

<style lang=""></style>

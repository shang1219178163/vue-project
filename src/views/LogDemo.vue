<template>
  <div>
    ddlog彩色日志封装
    <button @click="clickButton">ddlog.ts</button>
    <button @click="clickButton1">log.js</button>
    <!-- <button @click="clickButton3">颜色</button> -->
  </div>
</template>

<script setup>
// import { ddlog, ddlogExample, printInfo, ddlogColor } from "@/utils/ddlog.ts";
import * as DDLOG from "@/utils/ddlog.ts";
import * as LOG from "@/utils/log.js";

//引入工具类包，有一些帮助函数可以使用，这里主要使用的是格式化的部分。
var util = require('util');
  const greeting = "Hello,world";

const clickButton = () => {
    DDLOG.red("Hello,world", "a", "b", "c")
    DDLOG.orange("Hello,world", "a", "b", "c")
    DDLOG.blue("Hello,world", "a", "b", "c")
    DDLOG.green("Hello,world", "a", "b", "c")

    console.log("****************************");

    DDLOG.log("Hello,world", "a", "b", "c")
    DDLOG.info("Hello,world", "a", "b", "c")
    DDLOG.debug("Hello,world", "a", "b", "c")
    DDLOG.warn("Hello,world", "a", "b", "c")
    DDLOG.error("Hello,world", "a", "b", "c")
};

const clickButton1 = () => {
    LOG.red("Hello,world", "a", "b", "c")
    LOG.orange("Hello,world", "a", "b", "c")
    LOG.blue("Hello,world", "a", "b", "c")
    LOG.green("Hello,world", "a", "b", "c")

    console.log("****************************");

    LOG.log("Hello,world", "a", "b", "c")
    LOG.info("Hello,world", "a", "b", "c")
    LOG.debug("Hello,world", "a", "b", "c")
    LOG.warn("Hello,world", "a", "b", "c")
    LOG.error("Hello,world", "a", "b", "c")
};

const clickButton3 = () => {


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


</script>

<style lang=""></style>

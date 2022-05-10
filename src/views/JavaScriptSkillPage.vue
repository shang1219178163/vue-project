<template>
    <div>
        <button class="button" 
        v-for="(item, index) in list" :key="index" 
        @click='this[item.func]()' >
         {{ item.name }}
         </button>
    </div>
</template>


<script setup>
import {getCurrentInstance, ref, reactive, onMounted, watch, defineProps} from 'vue';
// import { Toast } from 'vant;

import * as BO from "@/utils/browser"
import * as CM from "@/utils/common"
import * as CO from "@/utils/color"

import "@/utils/extensions";

// function runMethod(method) {
//   this[method]()
// }

const list = ref([
    {name: "获取浏览器Cookie的值", func: "oncookie", },
    {name: "清除所有 Cookie", func: "onclearCookies", },

    {name: "复制到剪贴板", func: "oncopyToClipboard", },
    // {name: "获取选定的文本", func: "ongetSelectedText", },

    {name: "检测深色模式", func: "onisDarkMode", },
    {name: "生成随机颜色", func: "onRandomHexColor", },
    {name: "将 RGB 转换为十六进制", func: "onrgbToHex", },

    {name: "将首字符串大写", func: "oncapitalize", },
    {name: "反转字符串", func: "onreverse", },
    {name: "获取 URL 查询参数", func: "ongetURLParameters", },

    {name: "数组乱序", func: "onArrayShuffle", },
    {name: "数组元素去重", func: "onArrayUnique", },
    {name: "检查数组是否为空", func: "onArrayEmpty", },

    {name: "数字是偶数还是奇数", func: "onisEven", },

    {name: "检查日期是否有效", func: "onDateisValid", },
    {name: "日期是一年中哪一天", func: "ondayOfYear", },
    {name: "找出两日期之间的天数", func: "ondayDif", },

    {name: "获取日期小时分钟", func: "onhourAndMinute", },
    {name: "测试", func: "onTest", },
])

const oncookie = () => {
    console.log('>>>document.cookie', document.cookie)

    const result = BO.cookie('_ga');
    console.log('>>>oncookie', result)
}

const onclearCookies = () => {
    console.log('>>>document.cookie', document.cookie)
    BO.clearCookies()
    console.log('>>>clearCookies', document.cookie)
}

const oncopyToClipboard = () => {
    "Hello World!".copyToClipboard();
}

// const isDarkMode = () =>
//   window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

const onisDarkMode = () => {
    // console.log(`>>>onisDarkMode: ${CM.isDarkMode()}`);
}

const onRandomHexColor = () => {
    console.log('>>>randomHexColor', CO.randomHex());
}

// const rgbToHex = (r, g, b) =>   "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
const onrgbToHex = () => {
    const result = CO.rgbToHex(0, 51, 255);
    console.log('>>>onrgbToHex: (0, 51, 255)>', result)
}

const oncapitalize = () => {
    console.log('>>>oncapitalize:', "follow me".capitalize());
}


const onreverse = () => {
    console.log('>>>onreverse:', 'hello world'.reverse());
}

const onArrayShuffle = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("shuffle", arr.shuffle());
}


const onArrayUnique = () => {
    const arr = [1, 1, 2, 3, 3, 4, 4, 4, 5, 5];
    // console.log(unique(arr));
    console.log(`>>>onUnique: ${arr}_${arr.unique()}`);
}

const onArrayEmpty = () => {
    let arr = [1, 2, 3]
    arr = [];

    console.log('>>>isNotEmpty', arr.isNotEmpty());
    console.log('>>>isEmpty', arr.isEmpty());
}

const onisEven = () => {
    console.log(`>>>onisEven: _${typeof 2}}_`);
    console.log(">>>onisEven:", 2, Number(2).isEven());
    console.log(">>>onisEven:", 3, (3).isEven());
}


const onDateisValid = () => {
    console.log('>>>onisValidDate',  "December 17, 1995 03:24:00".isValidDate());
}

const ondayOfYear = () => {
    let date = new Date()
    console.log('>>>ondayOfYear', date.toLocaleDateString(), date.dayOfYear());
}

const ondayDif = () => {
    const result = new Date("2021-10-21").dayDif(new Date("2021-11-22"))
    console.log('>>>ondayDif', result);
}

const ongetURLParameters = () => {
    const URL=  "http://www.goole.com?search=easy&page=3"
    const result = URL.URLParameters()
    console.log('>>>ongetURLParameters:', result);
}

const onhourAndMinute = () => {
    let date = new Date(2021, 0, 10, 5, 5, 0)
    console.log(`>>>ontimeFromDate: _${date.toLocaleDateString()}_${date.toTimeString()}__${date.toLocaleTimeString()}_`);
    console.log(`>>>ontimeFromDate: _${date.toTimeString().slice(0, 8)}_`);

    console.log(`>>>hourAndMinute: _${date.hourAndMinute()}_`);
}


const onTest = () => {
    const date = new Date()
    const endDate = new Date(date).offsetDay(4)
    console.log("date-endDate", date.format(), endDate.format());

    const list2 = date.betweenDates(endDate).map((e) => e.format() )
    console.log(`>>>list2: ${list2}`);
}


</script>


<style scoped lang='scss'>
.button{
    padding: 5px;
    margin: 8px;
}
</style>
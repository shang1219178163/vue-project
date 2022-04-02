<template>
    <div>
        <button class="button" 
        v-for="(item, index) in list" :key="index" 
        @click='this[item.func]()' >
         {{ item.name }}
         </button>
         <button class="button" @click="onTest">onTest</button>
    </div>
</template>


<script setup>
import {getCurrentInstance, ref, reactive, onMounted, watch, defineProps} from 'vue';
// import { Toast } from 'vant;

import "@/lib/utils.js"
import "@/lib/date.js"
import "@/lib/array.js"
import "@/lib/string.js"
import "@/lib/number.js"


function runMethod(method) {
  this[method]()
}

const list = ref([
    {
        name: "打乱数组",
        func: "onshuffleArray",
    },
    {
        name: "复制到剪贴板",
        func: "copyToClipboard",
    },
    {
        name: "唯一元素",
        func: "onUnique",
    },
    {
        name: "检测深色模式",
        func: "onisDarkMode",
    },
    {
        name: "滚动到顶部",
        func: "scrollToTop",
    },
    {
        name: "滚动到底部",
        func: "scrollToBottom",
    },
    {
        name: "生成随机颜色",
        func: "onRandomHexColor",
    },
    {
        name: "检查日期是否有效",
        func: "onisDateValid",
    },
    {
        name: "查找给定日期是一年中哪一天",
        func: "ondayOfYear",
    },
    {
        name: "将首字符串大写",
        func: "oncapitalize",
    },
    {
        name: "找出两日期之间的天数",
        func: "ondayDif",
    },
    {
        name: "获取浏览器Cookie的值",
        func: "oncookie",
    },
    {
        name: "清除所有 Cookie",
        func: "onclearCookies",
    },
    {
        name: "从 URL 获取查询参数",
        func: "ongetURLParameters",
    },
    {
        name: "从日期记录时间",
        func: "ontimeFromDate",
    },
    {
        name: "检查数字是偶数还是奇数",
        func: "onisEven",
    },
    {
        name: "求数字的平均值",
        func: "onaverage",
    },
    {
        name: "反转字符串",
        func: "onreverse",
    },
    {
        name: "从日期记录时间",
        func: "ondayOfYear",
    },
    {
        name: "检查数组是否为空",
        func: "onArrayEmpty",
    },
    {
        name: "获取选定的文本",
        func: "ongetSelectedText",
    },
    {
        name: "将 RGB 转换为十六进制",
        func: "onrgbToHex",
    },
    {
        name: "测试",
        func: "onTest",
    },
    // {
    //     name: "查找给定日期是一年中哪一天",
    //     func: "ondayOfYear,
    // },
    // {
    //     name: "查找给定日期是一年中哪一天",
    //     func: "ondayOfYear,
    // },
    // {
    //     name: "查找给定日期是一年中哪一天",
    //     func: "ondayOfYear,
    // },
    // {
    //     name: "查找给定日期是一年中哪一天",
    //     func: "ondayOfYear,
    // },
    // {
    //     name: "查找给定日期是一年中哪一天",
    //     func: "ondayOfYear,
    // },
    // {
    //     name: "查找给定日期是一年中哪一天",
    //     func: "ondayOfYear,
    // },
])

const onshuffleArray = () => {
    // const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
    // // Testing
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(arr.shuffle());
}

const copyToClipboard = () => {
    // const copyToClipboard = (text) =>
    // navigator.clipboard?.writeText && navigator.clipboard.writeText(text);
    // Testing
    copyToClipboard("Hello World!");
}

const unique = (arr) => [...new Set(arr)];

const onUnique = () => {
    // Testing
    const arr = [1, 1, 2, 3, 3, 4, 4, 4, 5, 5];
    console.log(unique(arr));
    console.log(arr.unique());

}

const isDarkMode = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const onisDarkMode = () => {
    console.log(isDarkMode());
}

const scrollToTop = (e) => e.scrollIntoView({ behavior: "smooth", block: "start" });
const scrollToBottom = (e) => e.scrollIntoView({ behavior: "smooth", block: "end" });

const onRandomHexColor = () => {
    const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    console.log('>>>randomHexColor', randomHexColor);
}

const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

const onisDateValid = () => {
    const result = isDateValid("December 17, 1995 03:24:00");
    console.log('>>>onisDateValid', result);
}

const dayOfYear = (date) =>  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

const ondayOfYear = () => {
    const result = dayOfYear(new Date());
    console.log('>>>ondayOfYear', result);
}


const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
const oncapitalize = () => {
    const result = capitalize("follow for more");
    console.log('>>>oncapitalize', result);
}

const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
const ondayDif = () => {
    const result = dayDif(new Date("2020-10-21"), new Date("2021-10-22"))
    console.log('>>>ondayDif', result);
}

const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();    
const oncookie = () => {
    const result = cookie('_ga');
    console.log('>>>oncookie', result)
}


const clearCookies = document.cookie.split(';')
.forEach(cookie => document.cookie = cookie.replace(/^ +/, '')
.replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));

const onclearCookies = () => {
    clearCookies()
}

const getURLParameters = (URL) => {
    URL = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\'').replace(/&/g, '","').replace(
    /=/g, '":"') + '"}');
    return JSON.stringify(URL);
};

const ongetURLParameters = () => {
    const URL=  "http://www.goole.com?search=easy&page=3"
    const result = getURLParameters(URL)
    console.log('>>>ongetURLParameters', result);
}

const timeFromDate = date => date.toTimeString().slice(0, 8);

const ontimeFromDate = () => {
    console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); 
    // Result: "17:30:00"
}

const isEven = num => num % 2 === 0;
const onisEven = () => {
    console.log(isEven(2));
    // Result: "17:30:00"
}

const average = (...args) => args.reduce((a, b) => a + b) / args.length;

const onaverage = () => {
    const result = average(1, 2, 3, 4);
    console.log('>>>onaverage', result);
}


const reverse = str => str.split('').reverse().join('');

const onreverse = () => {
    const result = reverse('hello world');
    console.log('>>>onreverse', result);
}

const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;
const isEmpty = arr => !Array.isArray(arr) || arr.length == 0;

const onArrayEmpty = () => {
    const isNotEmpty = isNotEmpty([1, 2, 3]);
    const isEmpty = isEmpty([1, 2, 3]);
    console.log('>>>isNotEmpty', isNotEmpty);
    console.log('>>>isEmpty', isEmpty);
}

const getSelectedText = () => window.getSelection().toString();
const ongetSelectedText = () => {
    const result = getSelectedText()
    console.log('>>>ongetSelectedText', result)
}

const rgbToHex = (r, g, b) =>   "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
const onrgbToHex = () => {
    const result = rgbToHex(0, 51, 255);
    console.log('>>>onrgbToHex', result)
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
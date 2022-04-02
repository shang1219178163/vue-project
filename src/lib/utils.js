// 获取浏览器Cookie的值
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();    

// 清除所有 Cookie
const clearCookies = document.cookie.split(';')
.forEach(cookie => document.cookie = cookie.replace(/^ +/, '')
.replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));

// 滚动到顶部
const scrollToTop = (e) => e.scrollIntoView({ behavior: "smooth", block: "start" });

// 滚动到底部"
const scrollToBottom = (e) => e.scrollIntoView({ behavior: "smooth", block: "end" });

// 检测深色模式
// const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matchesconsole.log(isDarkMode) // Result: True or False

// 随机十六进制颜色
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`

// rgb 转 hex
const rgbToHex = (r, g, b) =>   "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// rgbToHex(0, 51, 255); 
// Result: #0033ff

// 获取选定的文本
const getSelectedText = () => window.getSelection().toString();


function plus(a, b) {
    return a + b;
}

function mins(a, b) {
    return a - b;
}

export{
    cookie,
    clearCookies,
    // isDarkMode,
    randomHex,
    rgbToHex,
    getSelectedText,
    plus,
    mins,
}
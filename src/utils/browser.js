// 获取浏览器Cookie的值
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();    

// 清除所有 Cookie
const clearCookies = document.cookie.split(';')
.forEach(cookie => document.cookie = cookie.replace(/^ +/, '')
.replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));

// 获取选定的文本
const getSelectedText = () => window.getSelection().toString();

// 检测深色模式
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// 滚动到顶部
const scrollToTop = (e) => e.scrollIntoView({ behavior: "smooth", block: "start" });
// const goToTop = () => window.scrollTo(0, 0);

// 滚动到底部"
const scrollToBottom = (e) => e.scrollIntoView({ behavior: "smooth", block: "end" });

// 是否滚动到页面底部
const isScrolledToBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;


// 判断当前标签页是否激活
const isTabInView = () => !document.hidden;

// 判断当前是否是苹果设备
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);


// 重定向到一个URL
const redirect = url => location.href = url;
// redirect("https://www.google.com/")

// 打开浏览器打印框
const showPrintDialog = () => window.print();


const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const touchSupported = () => ('ontouchstart' in window || DocumentTouch && document instanceof DocumentTouch);

const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;

export{
    cookie,
    clearCookies,
    getSelectedText,
    isDarkMode,
    scrollToTop,
    scrollToBottom,
    isScrolledToBottom,
    isTabInView,
    isAppleDevice,
    redirect,
    showPrintDialog,
}


// 复制到剪贴板
String.prototype.copyToClipboard = function () {
    const str = this;
    return navigator.clipboard.writeText(str);
}

// 首字符串大写
String.prototype.capitalize = function () {
    const str = this;
    return str.charAt(0).toUpperCase() + str.slice(1)
}

// 反转字符串
String.prototype.reverse = function () {
    const str = this;
    return str.split('').reverse().join('');
}

// 反转字符串
String.prototype.URLParameters = function () {
    let URL = this;
    URL = JSON.parse('{"' + decodeURI(URL.split("?")[1])
    .replace(/"/g, '\'')
    .replace(/&/g, '","')
    .replace(/=/g, '":"') + '"}');
        
    return JSON.stringify(URL);
}


// 检查日期是否有效
String.prototype.isValidDate = function () {
	let date = this;
    return !Number.isNaN(new Date(date).valueOf())
}

// 去除字符串中的HTML
String.prototype.isValidDate = function () {
	let html = this;
    const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
    return stripHtml
}

// 转义HTML特殊字符
String.prototype.escape = function () {
	let str = this;
    return str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]))
}

// 字符串中每个单词的第一个字符大写
String.prototype.uppercaseWords = function () {
	let str = this;
    return (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())
}

/**
 * 将字符串转换为camelCase
 * 
 * toCamelCase('background-color'); // backgroundColor
 * toCamelCase('-webkit-scrollbar-thumb'); // WebkitScrollbarThumb
 * toCamelCase('_hello_world'); // HelloWorld
 * toCamelCase('hello_world'); // helloWorld
 */
String.prototype.toCamelCase = function () {
	let str = this;
    return (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
}


// 从数组中删除虚假值
String.prototype.uppercaseWords = function () {
	let str = this;
    return (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())
}


// 打电话
String.prototype.toTel = function () {
    window.location.href = "tel://" + this.trim();
}


// 获取到特定长度
String.prototype.toLength = function (count, defaultValue = "-") {
    if (this === "undefined") return defaultValue
    return this.length < count ? this : this.substring(0, count);
}

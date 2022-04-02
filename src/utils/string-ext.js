

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

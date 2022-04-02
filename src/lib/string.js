

// 复制到剪贴板
Date.prototype.copyToClipboard = function () {
    const str = this;
    return navigator.clipboard.writeText(str);
}

// 首字符串大写
Date.prototype.capitalize = function () {
    const str = this;
    return str.charAt(0).toUpperCase() + str.slice(1)
}

// 反转字符串
Date.prototype.reverse = function () {
    const str = this;
    return str.split('').reverse().join('');
}

// 反转字符串
Date.prototype.URLParameters = function () {
    let URL = this;
    URL = JSON.parse('{"' + decodeURI(URL.split("?")[1])
    .replace(/"/g, '\'')
    .replace(/&/g, '","')
    .replace(/=/g, '":"') + '"}');
        
    return JSON.stringify(URL);
}



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

// 获取链接参数
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
 * 'background-color'.toCamelCase(); // backgroundColor
 * '-webkit-scrollbar-thumb'.toCamelCase(); // WebkitScrollbarThumb
 * '_hello_world'.toCamelCase(); // HelloWorld
 * 'hello_world'.toCamelCase(); // helloWorld
 */
String.prototype.toCamelCase = function () {
	const str = this;
  return (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
}


/**
 * 
 * @returns 驼峰转中划线
 */
String.prototype.toKababCase = function () {
  const reg = /\B([A-Z])/g;
  return this.replace(reg, '-$1').toLowerCase();
}

// 转为大写
String.prototype.uppercaseWords = function () {
	const str = this;
  return (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())
}


// 打电话
String.prototype.toTel = function () {
  window.location.href = "tel://" + this.trim();
}

/**
 * 获取到特定长度
 * 
 * @param {*} count 最大长度
 * @param {*} sufix 超过最大值时添加后缀
 * @param {*} isFillBlank 字数不够时,是否填充空字符串
 * @returns 处理后的结果
 */
String.prototype.toLength = function (count, sufix = "", isFillBlank = false) {
  const val = this;
  if (count > val.length) {
    const padStr = "\xa0\xa0\xa0".repeat(count - val.length);
    // console.log("padStr", `${val}_${padStr}_${count - val.length}_${fixedWidth ? padStr : ""}_`);
    return val + (isFillBlank ? padStr : "");
  }
  return val.substring(0, count) + sufix;
}


String.prototype.hasHanzi = function () {
  return /[\u4E00-\u9FA5]+/g.test(this)
}

String.prototype.isAllHanzi = function () {
  return /^[\u4E00-\u9FA5]+$/.test(this)
}


// export function utility() {
//   return {
//     isArray: (o) => Object.prototype.toString.call(o) == "[object Array]",
//     isObj: (o) => Object.prototype.toString.call(o) == "[object Object]",
//     isNull: (o) => Object.prototype.toString.call(o) == "[object Null]",
//     isFunction: (o) => Object.prototype.toString.call(o) == "[object Function]",
//     isDate: (o) => Object.prototype.toString.call(o) == "[object Date]",
//     isDocument: (o) => ["[object Document]", "[object HTMLDocument]"].includes(Object.prototype.toString.call(o)),
//     isNumber: (o) => Object.prototype.toString.call(o) == "[object Number]",
//     isString: (o) => Object.prototype.toString.call(o) == "[object String]",
//     isUndefined: (o) => Object.prototype.toString.call(o) == "[object Undefined]",
//     isBoolean: (o) => Object.prototype.toString.call(o) == "[object Boolean]",
//   };
// }

// 类型检查模型
export const CheckType = {
  isArray: (o) => Object.prototype.toString.call(o) == "[object Array]",
  isObj: (o) => Object.prototype.toString.call(o) == "[object Object]",
  isNull: (o) => Object.prototype.toString.call(o) == "[object Null]",
  isFunction: (o) => Object.prototype.toString.call(o) == "[object Function]",
  isDate: (o) => Object.prototype.toString.call(o) == "[object Date]",
  isDocument: (o) => ["[object Document]", "[object HTMLDocument]"].includes(Object.prototype.toString.call(o)),
  isNumber: (o) => Object.prototype.toString.call(o) == "[object Number]",
  isString: (o) => Object.prototype.toString.call(o) == "[object String]",
  isUndefined: (o) => Object.prototype.toString.call(o) == "[object Undefined]",
  isBoolean: (o) => Object.prototype.toString.call(o) == "[object Boolean]",
};

/// 类型检查
export function checkType(o, type) {
  const typeStr = Object.prototype.toString
    .call(o)
    .replace(/\[object (\w+)\]/, "$1");
  return type ? type === (typeStr || typeStr.toLowerCase()) : typeStr;
}

// var isString = isType("String")
// var isFunction = isType("Function")


// const isArray = (val) => Array.isArray(val);

// const isFunction = (val) => typeof val === 'function';
// const isString = (val) => typeof val === 'string';
// const isSymbol = (val) => typeof val === 'symbol';
// const isObject = (val) => val !== null && typeof val === 'object';

// const toTypeString = (value) => Object.prototype.toString.call(value);
// const isMap = (val) => toTypeString(val) === '[object Map]';
// const isSet = (val) => toTypeString(val) === '[object Set]';
// const isDate = (val) => toTypeString(val) === '[object Date]';
// const isPlainObject = (val) => Object.prototype.toString.call(val) === '[object Object]'// isPlainObject 判断是不是普通对象（排除正则、数组、日期、new Boolean、new Number、new String 这些特殊的对象）
// isObject([]); // true
// isPlainObject([]); // false
// const isPromise = (val) => {  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
// }
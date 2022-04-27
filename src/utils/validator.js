
export function utility(){
    return {
        isArray:(o) => Object.prototype.toString.call(o) == "[object Array]",
        isObj:(o) => Object.prototype.toString.call(o) == "[object Object]",
        isNull:(o) => Object.prototype.toString.call(o) == "[object Null]",
        isFunction:(o) => Object.prototype.toString.call(o) == "[object Function]",
        isDate:(o) => Object.prototype.toString.call(o) == "[object Date]", 
        isDocument:(o) => Object.prototype.toString.call(o) =="[object Document]"|| Object.prototype.toString.call(o) == "[object HTMLDocument]",
        isNumber:(o) => Object.prototype.toString.call(o) == "[object Number]", 
        isString:(o) => Object.prototype.toString.call(o) == "[object String]", 
        isUndefined:(o) => Object.prototype.toString.call(o) == "[object Undefined]", 
        isBoolean:(o) => Object.prototype.toString.call(o) == "[object Boolean]", 
    }
  }
  
export function isObj(o){
    return Object.prototype.toString.call(o) == "[object Array]"
}

/// 类型检查
export function checkType(o, type) {
  const typeStr = Object.prototype.toString.call(o).replace(/\[object (\w+)\]/, "$1");
  return type ? type === (typeStr || typeStr.toLowerCase()) : typeStr;
}
// export function isArray(o){
//     return Array.isArray(o)
// }
// function isType(type) {
//     return function(obj) {
//         return {}.toString.call(obj) == "[object " + type + "]"
//     }
// }

// var isString = isType("String")
// var isFunction = isType("Function")
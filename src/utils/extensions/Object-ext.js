
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object


// 数组不为空
if (!Object.prototype.isEmpty) {
  Object.prototype.isEmpty = function () {
    const obj = this;
    const result = Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
    return result;
  }  
}

if (!Object.prototype.deepCopy) {
  Object.prototype.deepCopy = function () {
    return JSON.parse(JSON.stringify(this));
  }
}

if (!Object.prototype.toStringify) {
  /// 转为 json 字符串
  Object.prototype.toStringify = function (reviver) {
    return new Promise((resolve, reject) => {
      try{
        let result = JSON.stringify(this, reviver)
        resolve(result);
      }
      catch(e){
        reject(e);
      }
    });
  }
}


if (!Object.prototype.typeDesc) {
  Object.prototype.typeDesc = function () {
    return Object.prototype.toString.call(o).replace(/\[object (\w+)\]/, "$1");
  }
}

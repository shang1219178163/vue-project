
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object


// 数组不为空
Object.prototype.isEmpty = function () {
  const obj = this;
  const result = Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
  return result;
}


Object.prototype.deepCopy = function () {
  return JSON.parse(JSON.stringify(this));;
}

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
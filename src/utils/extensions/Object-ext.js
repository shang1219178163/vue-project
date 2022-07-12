
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object


// 数组不为空
Object.prototype.isEmpty = function () {
  const obj = this;
  const result = Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
  return result;
}

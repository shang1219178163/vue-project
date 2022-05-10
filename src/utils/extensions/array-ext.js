
// 数组生成
Array.prototype.generator = function (n, block = (i) => { i.toString() }) {
  return Array(n).fill().map((e, i)=> block(i));
}


// 数组去重
Array.prototype.unique = function () {
  const arr = this
  return [...new Set(arr)];
}

// 数组不为空
Array.prototype.isNotEmpty = function () {
  const arr = this
  return Array.isArray(arr) && arr.length > 0
}

// 数组为空
Array.prototype.isEmpty = function () {
  return !this.isNotEmpty;
}

// 两个数组合并
Array.prototype.concat = function (arrNew) {
  const arr = this
  return  [...arr, ...arrNew];
}

// 数组乱序
Array.prototype.shuffle = function () {
  const arr = this
  return arr.sort(() => 0.5 - Math.random());
}


// 从数组中删除虚假值
Array.prototype.removeFalsy = function () {
  const arr = this
  return arr.filter(Boolean)
}

// 根据属性对象数组排序
Array.prototype.sortKey = function (key) {
  if (!key) {
    return this.sort();
  }

  const compare = function (obj1, obj2) {
    const a = obj1[key];
    const b = obj2[key];
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  } 
  return this.sort(compare);
}

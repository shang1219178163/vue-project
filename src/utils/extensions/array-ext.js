
// 数组生成
// Array.prototype.generator = function (n, block = (i) => { i.toString() }) {
//   return Array(n).fill().map((e, i)=> block(i));
// }
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
// Array.prototype.concat = function (arrNew) {
//   const arr = this
//   return  [...arr, ...arrNew];
// }

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

// 从数组中删除 [undefined, null]
Array.prototype.removeNull = function () {
  const arr = this
  return arr.filter((e) => ![undefined, null].includes(e));
}

// 从数组中删除对象
Array.prototype.remove = function (item) {
  const idx = this.findIndex((e) => e === item);
  if (idx !== -1) {
    this.splice(idx, 1);
  }
}

// 从数组中删除索引所在的对象
Array.prototype.removeIndex = function (idx) {
  this.splice(idx, 1);
}

// 根据属性对象数组排序
Array.prototype.sortKey = function (key, cb = (v) => { return v }) {
  if (!key) {
    return this.sort();
  }

  const compare = function (obj1, obj2) {
    const a = cb(obj1[key]);
    const b = cb(obj2[key]);
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  } 
  return this.sort(compare);
}


// 数组转对象
Array.prototype.ObjValue = function () {
  return {...this};
}

// 得到数组的最大值
Array.prototype.max = function () {
  const arr = this;
  // const max = arr.reduce((max, num) => (max > num ? max : num));
  const max = Math.max(...arr);
  return max;
}

// 得到数组的最小值
Array.prototype.min = function () {
  const arr = this;
  // const min = arr.reduce((min, num) => (min < num ? min : num));
  const min = Math.min(...arr);
  return min;
}

// 统计数组成员的个数
Array.prototype.elementCountMap = function () {
  const arr = this;
  return elementCountMap(arr);
}

// 统计数组成员的个数
Array.prototype.elementCountObj = function () {
  const arr = this;
  return elementCountObj(arr);
}

// 统计数组成员的个数
const elementCountMap = (array) => {  
  return array.reduce((acc, it) => (acc.set(it, (acc.get(it) || 0) + 1), acc), new Map());
};

// 统计数组成员的个数
const elementCountObj = (array) => {  
  return array.reduce((obj, e) => {
    if(obj[e]) {
      obj[e]++;
    } else {
      obj[e] = 1;
    }
    return obj
  }, {});

  // let obj = {};
  // arr.map(item => {
  //   obj[item] ? obj[item]++ : obj[item] = 1;
  //   return obj
  // }
  // return obj;
};
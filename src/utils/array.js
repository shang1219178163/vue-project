

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

// 数组乱序
Array.prototype.shuffle = function () {
    const arr = this
    return arr.sort(() => 0.5 - Math.random());
}



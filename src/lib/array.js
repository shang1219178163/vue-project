

// 数组去重
Date.prototype.unique = function () {
    const arr = this
    return [...new Set(arr)];
}

// 数组不为空
Date.prototype.isNotEmpty = function () {
    const arr = this
    return Array.isArray(arr) && arr.length > 0
}

// 数组为空
Date.prototype.isEmpty = function () {
    return !this.isNotEmpty;
}

// 数组乱序
Date.prototype.shuffle = function () {
    const arr = this
    return arr.sort(() => 0.5 - Math.random());
}



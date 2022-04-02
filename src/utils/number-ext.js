

// 检查数字是偶数还是奇数
Number.prototype.isEven = function () {
    const num = this;
    return num % 2 === 0;
}


// 检查数字是偶数还是奇数
Number.prototype.random = function (max) {
    const min = this;
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}

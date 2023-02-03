

// 检查数字是偶数还是奇数
if (!Number.prototype.isEven) {
  Number.prototype.isEven = function () {
    const num = this;
    return num % 2 === 0;
  }
}


//生成随机数
export const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

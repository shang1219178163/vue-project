
// 参数对象
URL.prototype.params = function () {
  const obj = {};

  const searchParams = new URLSearchParams(this.search);
  for (let p of searchParams) {
    // console.log(p[0], p[1]);
    obj[p[0]] = p[1];
  }
  return obj;
};




// 获取元素的文档坐标
if (!HTMLElement.prototype.position) {
  HTMLElement.prototype.position = function () {
    let box = this.getBoundingClientRect();

    return {
      top: box.top + this.pageYOffset,
      left: box.left + this.pageXOffset
    };
  }
}

// 获取元素的文档坐标
// function getCoords(elem) {
//   let box = elem.getBoundingClientRect();

//   return {
//     top: box.top + pageYOffset,
//     left: box.left + pageXOffset
//   };
// }
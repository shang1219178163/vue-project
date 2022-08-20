
// convertToImage.js
import html2canvas from 'html2canvas';
import canvas2image from "canvas2image-2";

// 创建用于绘制的基础canvas画布
function createBaseCanvas(scale) {
  const canvas = document.createElement("canvas");
  canvas.width = width * scale;
  canvas.height = height * scale;

  const context = canvas.getContext("2d");

  // 关闭抗锯齿
  context.mozImageSmoothingEnabled = false;
  context.webkitImageSmoothingEnabled = false;
  context.msImageSmoothingEnabled = false;
  context.imageSmoothingEnabled = false;

  context.scale(scale, scale);

  return canvas;
}

// 生成快照
function convertToImage(container, options = {}) {
    // 设置放大倍数
    const scale = window.devicePixelRatio;

    // 创建用于绘制的基础canvas画布
    const canvas = createBaseCanvas(scale);

    // 传入节点原始宽高
    const width = container.offsetWidth;
    const height = container.offsetHeight;   

    // html2canvas配置项
    const ops = {
        scale,
        width,
        height,
        canvas,
        useCORS: true,
        allowTaint: false,
        ...options
    };

    return html2canvas(container, ops).then(canvas => {
        const imageEl = canvas2image.convertToPNG(canvas, canvas.width, canvas.height);
        return imageEl;
    });
}


export{
  convertToImage
}

// 滚动问题
// 待保存的目标节点（按实际修改👇）
// const container = document.body;
// // 实际的滚动元素（按实际修改👇）
// const scrollElement = document.documentElement;
// // 记录滚动元素纵向偏移量
// const scrollTop = scrollElement.scrollTop;

// // 针对滚动元素是 body 先作置顶
// window.scroll(0, 0);
// convertToImage(container)
//     .then(() => {
//         // ...
//     }).catch(() => {
//         // ...
//     }).finally(() => {
//         // 恢复偏移量
//         window.scroll(0, scrollTop);
//     });

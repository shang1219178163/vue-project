
/// 异步加载图片
function loadImgAsync(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();//创建img标签
    img.src = url;
    img.onload = () => {
      resolve(img);
    }
    img.onerror = () => {
      reject(`'${img}' is not find`)
    }
  })
}

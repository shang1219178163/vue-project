import html2canvas from 'html2canvas'

///获取图片对象
async function getImage(src) {
  return new Promise(async (resolve) => {
    const image = new Image();
    if (typeof(src) === 'string') {
      image.src = await getURLBase64(src);
    } else {
      image.src = src;
    }
    image.crossOrigin = "*";
    image.onload = () => {
      console.log("image:", image);
      resolve(image);
    };
  });
};

/// 获取
async function getURLBase64(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      if (this.status === 200) {
        const blob = this.response;
        const fileReader = new FileReader();
        fileReader.onloadend = function (e) {
          const result = e.target.result;
          resolve(result);
        };
        fileReader.readAsDataURL(blob);
      }
    };
    xhr.onerror = function () {
      reject();
    };
    xhr.send();
  });
};

//获取二维码
async function getQRCodeImage(url, size = 85) {
  return new Promise(async (resolve, reject) => {
    html2canvas(url, {
      backgroundColor: null,
      width: size,
      height: size,
    }).then((img) => {
      const image = new Image();
      image.src = img.toDataURL("image/png");
      image.crossOrigin = "*";
      image.onload = () => {
        resolve(image);
      };
      image.onerror = (error) => {
        console.log("getQRCodeImage", error);
        reject(error);
      };
    });
  });
};

export{
  getQRCodeImage,
  getImage,
  getURLBase64,
}
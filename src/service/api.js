// 测试
// https://syntest.haier.net/resourceTest/myhome/index.html
// 预发布
// https://sybirdyz-oss.haier.net/resource/myhome/index.html
// 生产
// https://sybird-oss.haier.net/resource/myhome/index.html


export const isProd = process.env.NODE_ENV === 'production' &&
 ['https://sybird-oss.haier.net'].includes(window.location.origin);

export const isPre = process.env.NODE_ENV === 'production' && 
['https://sybirdyz-oss.haier.net'].includes(window.location.origin);

export const isLocal = ['localhost:8080'].includes(window.location.origin);


import axios from './interceptors';
import _assign from 'lodash/assign';
import _isEmpty from 'lodash/isEmpty';

/// 网络请求封装
async function axiosRequest({ api = {}, outerParams, outerHeaders, urlBlock = (v) => { v; }}) {

  const { method, path, desc, domainProd, domainPre, domainDev, tokenProd, tokenDev, header, params, } = api;

  let url = '';
  if (domainProd && domainPre && domainDev) {
    if (isProd) {
      url = domainProd + path;
    } else if(isPre) {
      url = domainPre + path;
    } else {
      url = domainDev + path;
    }
  } else {
    url = axios.baseURL + path;
  }

  if (urlBlock) {
    url = urlBlock(url);
  }

  // 合并头部信息
  const headers = _assign({}, header, outerHeaders);
  if (tokenProd && tokenDev) {
    const token = isProd ? tokenProd : tokenDev;
    headers.Authorization = `Bearer ${token}`;
  }

  // 如果没传入参数 则传递默认参数
  const data = _isEmpty(outerParams) ? params : Array.isArray(outerParams) 
  ? outerParams : _assign({}, params, outerParams);

  let options = { url, method, headers, desc,};
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
    options.data = data;
    if (postParams) {
      options.params = postParams;
    }
  } else if (options.method === 'GET') {
    options.params = data;
  }
  return axios(options);
}


/// 上传文件
async function uploadFile({file, url, token, onProgress = (v) => {}, }) {
  // let file = event.target.files[0];
  return new Promise((resolve, reject) => {
    let params = new FormData();
    params.append('file', file, file.name);

    let xhr = new XMLHttpRequest();
    let uploader = xhr.upload;
    uploader.onprogress = (e) => {
      // LOG.log('uploader onprogress', ev)
      const percent = parseInt((e.loaded / e.total) * 100);
      LOG.log('onprogress', percent);
      onProgress(percent + '%');
    };
    xhr.open("POST", url);
    xhr.setRequestHeader("Authorization", token);
    xhr.send(params);

    xhr.onreadystatechange = (e) => {
    if (xhr.readyState === 4 && xhr.status === 200 ) {
        let res = JSON.parse(xhr.responseText);
        resolve(res);
      } else {
        reject(e);
      }
    };
    xhr.onerror = (e) => {
      reject(e);
    };
  });
}


export{
  axiosRequest,
  uploadFile,
}
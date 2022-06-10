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

// restful api 请求方法封装
async function request({ api = {}, id = '', outerParams, outerOptions}) {

  const { method, path, mockPath, desc, domainProd, domainDev, tokenProd, tokenDev, code, isLog } = api;

  let url = '';
  if (isLocal) {
    if (domainDev) {
      url = `${domainDev}${path}`;
    } else {
      url = isMocked ? mockPath : path;
    }
  } else if (domainProd && domainDev) {
    if (isProd) {
      url = domainProd + path;
    } else if(isPre) {
      url = domainPre + path;
    } else {
      url = domainDev + path;
    }
  } else {
    let hostUrl = apiSpecialConfig[specialUrl] + '';
    url = hostUrl.includes('http') ? `${hostUrl}${path}` : isMocked ? `${mockBaseUrl}${path}` : `${prodBaseUrl}${path}`;
  }

  // 如果没传入参数 则传递默认参数
  const data = _isEmpty(outerParams) ? params : Array.isArray(outerParams) 
  ? outerParams : _assign({}, params, outerParams);

  // 合并头部信息
  const headerParams = _assign({}, header, outerOptions);
  if (tokenProd && tokenDev) {
    const token = isProd ? tokenProd : tokenDev;
    headerParams.Authorization = `Bearer ${token}`;
  }

  if (id) {
    url = `${url}/${id}`;
  }

  let options = { url, method, desc, headerParams, api };
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
function uploadFile({file, url, token, onProgress = (v) => {}, }) {
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
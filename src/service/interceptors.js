import axios from 'axios';
import _assign from 'lodash/assign';

import { NET_MSG_ERROR } from '@/service/request/apiMessage';

// axios.defaults.timeout = 10000 //超时取消请求
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// axios.defaults.baseURL = process.env.BASE_URL //挂载在process下的环境常量，在我另一篇文章有详细说明


let instance = axios.create({
  baseURL: 'https://zjhx-test.haier.net',
  timeout: 30000
});

/**
 * @export
 * @param {*} config
 * @returns
 */
function axiosRequestSucessFunc(config) {
  // console.log('config', config)
  // 合并传入的头部信息
  config.headers = _assign(config.headers, config.headerParams);

  return config;
}

/**
 * @export
 * @param {*} error
 * @returns
 */
export function axiosRequestFailFunc(error) {
  return Promise.reject(error);
}

/**
 * @export
 * @param {*} response
 * @returns
 */
export function axiosResponseSucessFunc(response) {
  switch (response.status) {
    case 200:
    case 304:
      return response.data;

    // case 403:
    //     Toast({
    //       message: '登录过期，请重新登录',
    //       duration: 1000,
    //       forbidClick: true
    //   });
    //   // 清除token
    //   // localStorage.removeItem('token');
    //   // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
    //   setTimeout(() => {                        
    //       router.replace({                            
    //           path: '/login',                            
    //           query: { 
    //             redirect: router.currentRoute.fullPath 
    //           }                        
    //       });                    
    //   }, 1000);                    
    //     break; 
    // response success and response data
    // if (responseData.code * 1 === 0 || responseData.code * 1 === 1) {
    //   return responseData.data || {error: false}
    // } else if (responseData.code * 1 === 2 || responseData.code * 1 === 3) {
    //   return responseData.data || {error: false}
    // } else {
    //   return Toast('异常情况')
    // }
    default:
      return Promise.reject(response.data);
  }
}

/**
 * @export
 * @param {*} error
 * @returns
 */
export function axiosResponseFailFunc(error) {

  // console.log("utility", typeof error, validator.isObj(error), error.message)
  if (typeof error === "object" && error.message !== undefined) {
    if (error.message === "Network Error") {
      console.log("axiosResponseFailFunc", error.message, NET_MSG_ERROR);
      return Promise.reject(NET_MSG_ERROR);
    }
    return Promise.reject(error.message);
  }
  return Promise.reject(error);
}

// 注入request拦截器
instance.interceptors.request.use(axiosRequestSucessFunc, axiosRequestFailFunc);
// 注入response拦截器
instance.interceptors.response.use(axiosResponseSucessFunc, axiosResponseFailFunc);

function calculatePercentage(loaded, total) {
  return Math.floor(loaded * 1.0) / total
}

instance.defaults.onUploadProgress = (e) => {
  const percent = calculatePercentage(e.loaded, e.total);
  console.log(e);
  console.log("onUploadProgress", percent);
}

instance.defaults.onDownloadProgress = (e) => {
  const percent = calculatePercentage(e.loaded, e.total);
  console.log(e);
  console.log("onDownloadProgress", percent);
}

export default instance;



/// code 转 message
// const codeMap = new Map([
//   ["S00003", "数据不存在！"], 
//   ["S00004", "分布式锁问题！"], 
//   ["S00001", "系统错误"], 
//   ["S00002", "参数错误 / 具体字段错误（例如省编码不可为空） 视业务情况而定"], 
//   ["S03000", "令牌不可为空"], 
//   ["S03001", "令牌已过期"], 
//   ["S03002", "令牌错误"], 
//   ["S05004", "下发短信验证码失败！"], 
//   ["S06001", "请求用户中心接口错误"], 
//   ["S01001", "appId不能为空"], 
//   ["S01002", "timestamp不能为空"], 
//   ["S01003", "sign不能为空"], 
//   ["S01004", "accessToken不能为空"], 
//   ["S02001", "下单失败，您可以联系客服替您报名"], 
//   ["S04002", "商城-查询场景价格信息异常!"], 
//   ["S04003", "商城-查询场景价格信息返回为空!"], 
//   ["S04004", "商城-查询场景价格组件价格信息缺少!"], 
// ]);


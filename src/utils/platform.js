const ua = window.navigator.userAgent.toLowerCase()

const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  
// android平台
const isAndroid = (() => {
  return /Android|Adr/i.test(ua)
})()

// ios平台
const isIos = (() => {
  return /iPhone|iPod|iPad/i.test(ua)
})()

// ios是否有安全区
const isIPhoneX = (() => {
  return isIos && window.screen.height >= 812;
})();

// 微信生态
const isWechat = (() => {
  return /MicroMessenger/i.test(ua)
})()

// 微信小程序
const isWxmp = (() => {
  return /miniProgram/i.test(ua) || window.__wxjs_environment === 'miniprogram'
})()

// 自家的android客户端
const isInnerAdr = (() => {
  return isAndroid && /sybird/i.test(ua)
})()

// 自家的ios客户端
const isInnerIos = (() => {
  return isIos && /sybird/i.test(ua)
})()

// 智家app
const isZjApp = (() => {
  return /apicloud|uphybrid|uplus/i.test(ua)
})()

// 自家的app客户端或智家app
const isInnerApp = (() => {
  return isInnerAdr || isInnerIos || isZjApp
})()



export default {
  isMobile,
  isAndroid,
  isIos,
  isIPhoneX,
  isWechat,
  isWxmp,
  isInnerAdr,
  isInnerIos,
  isInnerApp,
  isZjApp
}

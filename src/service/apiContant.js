const NET_MSG_ERROR = '网络不可用，请检查网络'; // 无网络toast提示内容
const NET_MSG_ERROR_UI = '网络异常，点击重新加载'; // 无网络缺省页展示内容
const REQUEST_MSG_NO_DATA = '暂无数据'; // 无数据toast提示内容
const REQUEST_MSG_NO_DATA_UI = '暂无内容'; // 无数据缺省页展示内容（每个页面要求可能不一样，如消息页为暂无消息）

/// 网络请求code对象
const STATUE_CODE_OBJ = {
  400: '错误的请求',
  401: '未授权，请重新登录',
  403: '拒绝访问',
  404: '请求错误,未找到该资源' ,
  405: '请求方法未允许',
  408: '请求超时',
  500: '服务器端出错',
  501: '网络未实现',
  502: '网络错误',
  503: '服务不可用',
  504: '网络超时',
  505: 'http版本不支持该请求'
};

export {
  STATUE_CODE_OBJ,
  NET_MSG_ERROR,
  NET_MSG_ERROR_UI,
  REQUEST_MSG_NO_DATA,
  REQUEST_MSG_NO_DATA_UI,
};
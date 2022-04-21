

import  * as LOG from '@/utils/log';

export default {
  install(app) {
    app.config.globalProperties.$log = LOG;

    app.config.errorHandler = (err, vm, info) => {
      // 处理错误
      // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
      console.error('[全局异常] ', err, vm, info);
    };
  }
};

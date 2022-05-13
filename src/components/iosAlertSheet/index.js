import defer from './defer.js';
import iosActionSheet from './iosActionSheet.vue';

export default {
  install(app, options) {   
    app.component("iosActionSheet", iosActionSheet);
 
    // // app.config.globalProperties.$iosActionSheet = function (...buttons){
    // //   app.component("iosActionSheet", iosActionSheet);
    // // };
    // app.config.globalProperties.$iosActionSheet = this;

    function $iosActionSheet(...buttons){
  
      let instance = new iosActionSheet({propsData: {buttons}});
  
      let node = document.createElement('div');
      node.id = 'ios-actionsheet-' + Date.now();
      document.body.appendChild(mount);
  
      instance.$mount(node);
  
      return instance.activate();
    }

    app.provide('$iosActionSheet', $iosActionSheet)
  }
}


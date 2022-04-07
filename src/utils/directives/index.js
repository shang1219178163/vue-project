import pin from './pin'
import focus from './focus'
import throttle from './throttle'
import debounce from './debounce'
import randomColor from './randomColor'
import borderColor from './borderColor'
import tabSelect from './tabSelect';
import itemSelect from './itemSelect';

import draggable from './draggable';
import waterMarker from './waterMarker';
import permission from './permission';
import LazyLoad from './LazyLoad';
import emoji from './emoji';
import copy from './copy';


//自定义指令
const directives = {
    pin,
    focus,
    throttle,
    debounce,
    randomColor,
    borderColor,
    tabSelect,
    itemSelect,

    draggable,
    waterMarker,
    permission,
    LazyLoad,
    emoji,
    copy,
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
        // console.log(key, directives[key]);
        app.directive(key, directives[key])
    })
  },
}
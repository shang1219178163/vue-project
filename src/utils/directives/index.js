
import lazyLoad from './LazyLoad';
import backtop from './backtop';
import color from './color';
import copy from './copy';
import drag from './drag';
import draggable from './draggable';
import ellipsis from './ellipsis';
import emoji from './emoji';
import expandClick from './expandClick';
import field from './field';
import focus from './focus';
import itemSelect from './itemSelect';
import longpress from './longpress';
import permission from './permission';
import pin from './pin';
import randomColor from './randomColor';
import tabSelect from './tabSelect';
import waterMarker from './waterMarker';

//自定义指令
const directives = {
  lazyLoad,
  backtop,
  color,
  copy,
  drag,
  draggable,
  ellipsis,
  emoji,
  expandClick,
  field,
  focus,
  itemSelect,
  longpress,
  permission,
  pin,
  randomColor,
  tabSelect,
  waterMarker
};

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
        // console.log(key, directives[key]);
        app.directive(key, directives[key]);
    });
  },
};
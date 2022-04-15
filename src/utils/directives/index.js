
import lazyLoad from './lazyLoad'
import backtop from './backtop'
import color from './color'
import copy from './copy'
import debounce from './debounce'
import drag from './drag'
import draggable from './draggable'
import ellipsis from './ellipsis'
import emoji from './emoji'
import expandClick from './expandClick'
import focus from './focus'
import itemSelect from './itemSelect'
import longpress from './longpress'
import permission from './permission'
import pin from './pin'
import randomColor from './randomColor'
import tabSelect from './tabSelect'
import throttle from './throttle'
import waterMarker from './waterMarker'

//自定义指令
const directives = {
  lazyLoad,
  backtop,
  color,
  copy,
  debounce,
  drag,
  draggable,
  ellipsis,
  emoji,
  expandClick,
  focus,
  itemSelect,
  longpress,
  permission,
  pin,
  randomColor,
  tabSelect,
  throttle,
  waterMarker
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
        // console.log(key, directives[key]);
        app.directive(key, directives[key])
    })
  },
}
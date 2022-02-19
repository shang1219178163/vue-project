import pin from './pin'
import focus from './focus'
import throttle from './throttle'
import debounce from './debounce'
import randomColor from './randomColor'
import borderColor from './borderColor'
import itemSelect from './itemSelect';

//自定义指令
const directives = {
    pin,
    focus,
    throttle,
    debounce,
    randomColor,
    borderColor,
    itemSelect
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
        // console.log(key, directives[key]);
        app.directive(key, directives[key])
    })
  },
}
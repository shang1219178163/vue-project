import pin from './pin'
import focus from './focus'
import throttle from './throttle'
import debounce from './debounce'
import randomcolor from './randomcolor'
import bordercolor from './bordercolor'

//自定义指令
const directives = {
    pin,
    focus,
    throttle,
    debounce,
    randomcolor,
    bordercolor
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
        // console.log(key, directives[key]);
        app.directive(key, directives[key])
    })
  },
}
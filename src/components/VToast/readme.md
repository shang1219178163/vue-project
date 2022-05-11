# 自定义弹窗 - VToast
主要用于 vant Toast 无法适应项目一些特殊需求；
## 1. 基本属性
```
const props = defineProps({
  type: {
    type: String,
    default: "text",
    validator: (value) => {
      return ['text', 'html'].includes(value); 
    },
    desc: "展示类型 text 或者 html",
  },
  template: {
    type: String,
    default: "默认文本",
    desc: "展示内容, 文字或者 html",
  },
  duration: {
    type: Number,
    default: 1500,
    desc: "持续时间, 0 为不自动消失,需手动调用 clear() 关闭",
  },
  contentTop: {
    type: String,
    default: "50%",
    desc: "内容距离顶部距离(top)",
  },
  contentMargin: {
    type: String,
    default: "0px",
    desc: "内容 margin",
  },
  contentPadding: {
    type: String,
    default: "8px 10px",
    desc: "内容 padding",
  },
  contentColor: {
    type: String,
    default: "#ffffff",
    desc: "内容 文字颜色",
  },
  contentBg: {
    type: String,
    default: "rgb(0,0,0, 0.6)",
    desc: "内容 背景色",
  },
  overlayBg: {
    type: String,
    default: "transparent",
    desc: "背板颜色",
  },
  overlayClick: {
    type: Function,
    desc: "背板点击事件, 一般 duration === 0 时使用",
  },
})
```
## 2.使用示例：
```
const currentInstance = getCurrentInstance();
const { $vtoast } = currentInstance.appContext.config.globalProperties;
// console.log(currentInstance);

const click1 = () => {
  $vtoast.show({
    template: '添加到购物车成功', 
    duration: 1000, 
  });
}

const click2 = () => {
  $vtoast.show({
    type:"html",
    duration: 0, 
    template: "<img src=\"https://www.baidu.com/img/flexible/logo/pc/result.png\" />", 
    contentBg: "green",
    overlayClick: () => { 
      $vtoast.clear();
      console.log("overlayClick"); 
    }
  });

  // setTimeout(() => {
  //   click3();
  // }, 1500)
}

const click3 = () => {
  $vtoast.show({
    type:"html",
    // template: "<img src=\"https://www.baidu.com/img/flexible/logo/pc/result.png\" />", 
    template: `<img width='64' height='64' src="${imgLoading_base64}" />`, 
    // template: `<img width='44' height='44' :src="img_loading_base64" />`, 
    contentBg: "green",
    overlayClick: () => { 
      $vtoast.clear();
      console.log("overlayClick"); 
    }
  });
}

//小茶杯
const click4 = () => {
  $vtoast.loading({});
  setTimeout(() => {
    $vtoast.clear();
  }, 1500)
}
```


## 其他：
更新代码后如果运行报错，执行这两行代码:

npm uninstall -g @vue/cli

npm i vue@3.2.0
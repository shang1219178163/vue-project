//import App from '../App'
import { defineAsyncComponent } from 'vue'

const _import_ = (file) => () => import(`@/views/${file}.vue`);
// const _import_ = (file) => () => import(`@/views/${file}.vue`);

export const H5Router = {
  /// 初始页面
  initial: "/HomePage",
  /// 未知页面/404
  unknown: "",
  /// home页
  home: "/HomePage",
  /// 登录页
  page: "/page/:id",
  ///
  HomePage: "/HomePage",
  ///
  user: "/user",
  ///
  grid: "/grid",
  ///
  girdDemo: "/girdDemo",
  ///
  layoutTest: "/layoutTest",
  ///
  flexDemo: "/flexDemo",
  ///
  tableViewDemo: "/tableViewDemo",
  ///
  layoutDemo: "/layoutDemo",
  ///
  domChange: "/domChange",
  ///
  slotDemo: "/slotDemo",
  ///
  setupDemo: "/setupDemo",
  ///
  dataTransferDemo: "/dataTransferDemo",
  ///
  tableDemo: "/tableDemo",
  ///
  userlist: "/userlist",
  ///
  userlist1: "/userlist1",
};

export const routers = [
  { 
    path: "/", 
    redirect: "/ParseJSON", 
    desc: "为空跳回到首页" 
  },
  {
    path: "/home",
    name: "home",
    component: _import_("HomePage"),
    desc: "首页",
  },
  {
    path: "/ThemeChange",
    name: "ThemeChange",
    component: _import_("ThemeChange"),
    desc: "主题色切换",
  },
  {
    path: "/Lifecycle",
    name: "Lifecycle",
    component: _import_("Lifecycle"),
    desc: "生命周期",
  },
  
  {
    path: "/HookDemo",
    name: "HookDemo",
    component: _import_("HookDemo"),
    desc: "Hook Demo",
  },
  {
    path: "/page/:id",
    name: "page",
    component: _import_("Page"),
    desc: "传参id",
  },
  {
    path: "/pageSetup",
    name: "pageSetup",
    component: _import_("PageSetup"),
    desc: "尝试<script setup>",
  },
  {
    path: "/user",
    name: "user",
    component: _import_("UserList"),
    desc: "用户列表",
  },
  {
    path: "/girdDemo",
    name: "girdDemo",
    component: _import_("GirdDemo"),
    desc: "Grid 布局",
  },
  {
    path: "/flexDemo",
    name: "flexDemo",
    component: _import_("FlexDemo"),
    desc: "Flex 布局",
  },
  {
    path: "/tableViewDemo",
    name: "tableViewDemo",
    component: _import_("TableViewDemo"),
    desc: "cell 布局练习",
  },
  {
    path: "/layoutDemo",
    name: "layoutDemo",
    component: _import_("LayoutDemo"),
    desc: "网页布局",
  },
  {
    path: "/domChange",
    name: "domChange",
    component: _import_("DomChange"),
    desc: "Dom 修改",
  },
  {
    path: "/slotDemo",
    name: "slotDemo",
    component: _import_("SlotDemo"),
    desc: "Slot 插槽",
  },
  {
    path: "/dataTransferDemo",
    name: "dataTransferDemo",
    component: _import_("DataTransferDemo"),
    desc: "emit数据交互",
  },
  {
    path: "/tableDemo",
    name: "tableDemo",
    component: _import_("TableDemo"),
    desc: "Table 标签",
  },
  {
    path: "/userlist",
    name: "userlist",
    component: _import_("UserList"),
    desc: "列表",
  },
  {
    path: "/userlist1",
    name: "userlist1",
    component: _import_("UserList1"),
    desc: "列表",
  },
  {
    path: "/alertSheetDemo",
    name: "AlertSheetDemo",
    component: _import_("AlertSheetDemo"),
    desc: "alert",
  },
  {
    path: "/pullRefreshDemo",
    name: "PullRefreshDemo",
    component: _import_("PullRefreshDemo"),
    desc: "下拉刷新",
  },
  {
    path: "/pullMoreDemo",
    name: "PullMoreDemo",
    component: _import_("PullMoreDemo"),
    desc: "上拉加载更多",
  },
  {
    path: "/PullRefreshCustom",
    name: "PullRefreshCustom",
    component: _import_("PullRefreshCustom"),
    desc: "上拉刷新自定义",
  },
  {
    path: "/sceneList",
    name: "sceneList",
    component: _import_("sceneList"),
    desc: "列表底线自定义",
  },
  {
    path: "/vanConfigProvider",
    name: "VanConfigProvider",
    component: _import_("VanConfigProvider"),
    desc: "Van主题设置",
  },
  {
    path: "/counterDemo",
    name: "CounterDemo",
    component: _import_("CounterDemo"),
    desc: "加减计算器",
  },
  {
    path: "/reactiveDemo",
    name: "ReactiveDemo",
    component: _import_("ReactiveDemo"),
    desc: "Reactive",
  },
  {
    path: "/refDemo",
    name: "RefDemo",
    component: _import_("RefDemo"),
    desc: "Ref",
  },
  {
    path: "/toRefDemo",
    name: "toRefDemo",
    component: _import_("toRefDemo"),
    desc: "toRef",
  },
  {
    path: "/toRefsDemo",
    name: "toRefsDemo",
    component: _import_("toRefsDemo"),
    desc: "toRefs",
  },
  {
    path: "/dynamicCompDemo",
    name: "DynamicCompDemo",
    component: _import_("DynamicCompDemo"),
    desc: "动态组件",
  },
  {
    path: "/attrsFather",
    name: "AttrsFather",
    component: _import_("AttrsFather"),
    desc: "Attrs 传值",
  },
  {
    path: "/teleportDemo",
    name: "TeleportDemo",
    component: _import_("TeleportDemo"),
    desc: "Teleport demo,画中画?",
  },
  {
    path: "/storeDemo",
    name: "StoreDemo",
    component: _import_("StoreDemo"),
    desc: "useStore demo",
  },
  {
    path: "/watchDemo",
    name: "WatchDemo",
    component: _import_("WatchDemo"),
    desc: "vue watch 键值监听",
  },

  {
    path: "/vantComposablesDemo",
    name: "VantComposablesDemo",
    component: _import_("VantComposablesDemo"),
    desc: "vant 组合属性",
  },
  {
    path: "/VanPopupDemo",
    name: "VanPopupDemo",
    component: _import_("VanPopupDemo"),
    desc: "Vant Popup",
  },

  {
    path: "/vantOverlayDemo",
    name: "VantOverlay",
    component: _import_("VantOverlayDemo"),
    desc: "Vant Overlay",
  },
  {
    path: "/callphoneDemo",
    name: "CallphoneDemo",
    component: _import_("CallphoneDemo"),
    desc: "自定义电话弹窗",
  },
  {
    path: "/transformDemo",
    name: "TransformDemo",
    component: _import_("TransformDemo"),
    desc: "transition 动画研究",
  },
  {
    path: "/VCardDemo",
    name: "VCardDemo",
    component: _import_("VCardDemo"),
    desc: "自定义卡片组件",
  },
  {
    path: "/directiveDemo",
    name: "directiveDemo",
    component: _import_("DirectiveDemo"),
    desc: "自定义指令",
  },

  {
    path: "/DataTrackingTest",
    name: "DataTrackingTest",
    component: _import_("DataTrackingTest"),
    desc: "埋点",
  },
  {
    path: "/remodelingHouseRecord",
    name: "remodelingHouseRecord",
    component: _import_("RemodelingHouseRecord"),
    desc: "家装档案",
  },
  {
    path: "/remodelingDrawings",
    name: "remodelingDrawings",
    component: _import_("RemodelingDrawings"),
    desc: "装修图纸",
  },
  {
    path: "/remodelingMaterials",
    name: "remodelingMaterials",
    component: _import_("RemodelingMaterials"),
    desc: "物料清单",
  },
  {
    path: "/remodelingStagers",
    name: "remodelingStagers",
    component: _import_("RemodelingStagers"),
    desc: "装修人员清单",
  },
  {
    path: "/dynamicClassDemo",
    name: "dynamicClassDemo",
    component: _import_("DynamicClassDemo"),
    desc: "动态类名绑定",
  },
  {
    path: "/VNetDemo",
    name: "VNetDemo",
    component: _import_("VNetDemo"),
    desc: "VNet Demo",
  },
  {
    path: "/ArrayTest",
    name: "ArrayTest",
    component: _import_("ArrayTest"),
    desc: "ArrayTest",
  },
  {
    path: "/PositionDemo",
    name: "PositionDemo",
    component: _import_("PositionDemo"),
    desc: "PositionDemo",
  },
  {
    path: "/PositionAbsoluteDemo",
    name: "PositionAbsoluteDemo",
    component: _import_("PositionAbsoluteDemo"),
    desc: "Absolute",
  },
  {
    path: "/PositionStickyDemo",
    name: "PositionStickyDemo",
    component: _import_("PositionStickyDemo"),
    desc: "Sticky",
  },
  {
    path: "/PositionFixedDemo",
    name: "PositionFixedDemo",
    component: _import_("PositionFixedDemo"),
    desc: "Fixed",
  },
  {
    path: "/VImgDemo",
    name: "VImgDemo",
    component: _import_("VImgDemo"),
    desc: "VImgDemo",
  },
  {
    path: "/ImgDemo",
    name: "ImgDemo",
    component: _import_("ImgDemo"),
    desc: "ImgDemo",
  },
  {
    path: "/ExpandContainerDemo",
    name: "ExpandContainerDemo",
    component: _import_("ExpandContainerDemo"),
    desc: "VExpand组件",
  },
  {
    path: "/Base64Demo",
    name: "Base64Demo",
    component: _import_("Base64Demo"),
    desc: "Base64Demo",
  },
  {
    path: "/FontTest",
    name: "FontTest",
    component: _import_("FontTest"),
    desc: "FontTest",
  },
  {
    path: "/FormatNumberDemo",
    name: "FormatNumberDemo",
    component: _import_("FormatNumberDemo"),
    desc: "FormatNumberDemo",
  },
  {
    path: "/AfterService",
    name: "AfterService",
    component: _import_("AfterService"),
    desc: "AfterService",
  },
  {
    path: "/AfterServiceEvaluation",
    name: "AfterServiceEvaluation",
    component: _import_("AfterServiceEvaluation"),
    desc: "AfterServiceEvaluation",
  },
  {
    path: "/AfterServiceBookingResult",
    name: "AfterServiceBookingResult",
    component: _import_("AfterServiceBookingResult"),
    desc: "AfterServiceBookingResult",
  },
  {
    path: "/LogDemo",
    name: "LogDemo",
    component: _import_("LogDemo"),
    desc: "Log 自定义",
  },
  {
    path: "/ServiceProgress",
    name: "ServiceProgress",
    component: _import_("ServiceProgress"),
    desc: "ServiceProgress",
  },
  {
    path: "/VButtonDemo",
    name: "VButtonDemo",
    component: _import_("VButtonDemo"),
    desc: "VButtonDemo",
  },
  {
    path: "/JavaScriptSkillPage",
    name: "JavaScriptSkillPage",
    component: _import_("JavaScriptSkillPage"),
    desc: "JavaScriptSkillPage",
  },
  {
    path: "/VModelDemo",
    name: "VModelDemo",
    component: _import_("VModelDemo"),
    desc: "自定义双向绑定",
  },
  {
    path: "/ExtensionFuncDemo",
    name: "ExtensionFuncDemo",
    component: _import_("ExtensionFuncDemo"),
    desc: "Extension Func Demo",
  },
  {
    path: "/VUploadDemo",
    name: "VUploadDemo",
    component: _import_("VUploadDemo"),
    desc: "VUpload Demo",
  },

  {
    path: "/OffLineTest",
    name: "OffLineTest",
    component: _import_("OffLineTest"),
    desc: "OffLineTest",
  },
  {
    path: "/VanTabsDemo",
    name: "VanTabsDemo",
    component: _import_("VanTabsDemo"),
    desc: "VanTabsDemo",
  },
  {
    path: "/EventDelegateDemo",
    name: "EventDelegateDemo",
    component: _import_("EventDelegateDemo"),
    desc: "事件代理",
  },
  {
    path: "/ColorfulImg",
    name: "ColorfulImg",
    component: _import_("ColorfulImg"),
    desc: "CSS 随意更改img或者background的图片颜色",
  },
  {
    path: "/VPageDemo",
    name: "VPageDemo",
    component: _import_("VPageDemo"),
    desc: "Fixed Demo",
  },
  {
    path: "/DomRef",
    name: "DomRef",
    component: _import_("DomRef"),
    desc: "DomRef",
  },
  {
    path: "/PlatformTest",
    name: "PlatformTest",
    component: _import_("PlatformTest"),
    desc: "PlatformTest",
  },
  {
    path: "/VantListDemo",
    name: "VantListDemo",
    component: _import_("VantListDemo"),
    desc: "列表",
  },
  {
    path: "/VantToastDemo",
    name: "VantToastDemo",
    component: _import_("VantToastDemo"),
    desc: "Toast",
  },
  {
    path: "/VantPopverDemo",
    name: "VantPopverDemo",
    component: _import_("VantPopverDemo"),
    desc: "Popver",
  },
  {
    path: "/DropdownMenuDemo",
    name: "DropdownMenuDemo",
    component: _import_("DropdownMenuDemo"),
    desc: "下拉菜单",
  },
  {
    path: "/StorageDemo",
    name: "StorageDemo",
    component: _import_("StorageDemo"),
    desc: "存储",
  },
  {
    path: "/ToggleDemo",
    name: "ToggleDemo",
    component: _import_("ToggleDemo"),
    desc: "翻转值",
  },
  {
    path: "/useToastDemo",
    name: "useToastDemo",
    component: _import_("useToastDemo"),
    desc: "自定义 Toast",
  },
  {
    path: "/MouseDetectDemo",
    name: "MouseDetectDemo",
    component: _import_("MouseDetectDemo"),
    desc: "鼠标检测",
  },
  {
    path: "/DomMount",
    name: "DomMount",
    component: _import_("DomMount"),
    desc: "dom挂载",
  },
  {
    path: "/VModelValueModifier",
    name: "VModelValueModifier",
    component: _import_("VModelValueModifier"),
    desc: "v-model 修饰符",
    meta: {
      keepAlive: false,
    }
  },
  {
    path: "/InjectDemo",
    name: "InjectDemo",
    component: _import_("InjectDemo"),
    desc: "注入",
  },
  {
    path: "/NetworkStatusDemo",
    name: "NetworkStatusDemo",
    component: _import_("NetworkStatusDemo"),
    desc: "网络状态检测",
  },
  {
    path: "/ClickOutsideDemo",
    name: "ClickOutsideDemo",
    component: _import_("ClickOutsideDemo"),
    desc: "点击外部",
  },
  {
    path: "/TestAndroid",
    name: "TestAndroid",
    component: _import_("TestAndroid"),
    desc: "安卓功能测试",
  },
  {
    path: "/PositionedStackDemo",
    name: "PositionedStackDemo",
    component: _import_("PositionedStackDemo"),
    desc: "Stack 组件",
  },
  {
    path: "/DecorationInstallment",
    name: "DecorationInstallment",
    component: _import_("DecorationInstallment"),
    desc: "家装分期",
  },
  {
    path: "/VantFromDemo",
    name: "VantFromDemo",
    component: _import_("VantFromDemo"),
    desc: "表单",
  },
  {
    path: "/CSSChangeImgColor",
    name: "CSSChangeImgColor",
    component: _import_("CSSChangeImgColor"),
    desc: "CSS 图片颜色渲染",
  },
  {
    path: "/CSSTriangle",
    name: "CSSTriangle",
    component: _import_("CSSTriangle"),
    desc: "三角形",
  },
  {
    path: "/VFoldDemo",
    name: "VFoldDemo",
    component: _import_("VFoldDemo"),
    desc: "折叠",
  },
  {
    path: "/TimelineDemo",
    name: "TimelineDemo",
    component: _import_("TimelineDemo"),
    desc: "时间线",
  },
  {
    path: "/TooltipDemo",
    name: "TooltipDemo",
    component: _import_("TooltipDemo"),
    desc: "Tooltip",
  },
  {
    path: "/SectionDemo",
    name: "SectionDemo",
    component: _import_("SectionDemo"),
    desc: "SectionDemo",
  },
  {
    path: "/TreeDiagramDemo",
    name: "TreeDiagramDemo",
    component: _import_("TreeDiagramDemo"),
    desc: "TreeDiagramDemo",
  },
  {
    path: "/VSteperDemo",
    name: "VSteperDemo",
    component: _import_("VSteperDemo"),
    desc: "VSteperDemo",
  },
  {
    path: "/DotIndicatorDemo",
    name: "DotIndicatorDemo",
    component: _import_("DotIndicatorDemo"),
    desc: "PageIndicator",
  },
  {
    path: "/DropdownDemo",
    name: "DropdownDemo",
    component: _import_("DropdownDemo"),
    desc: "DropdownDemo",
  },
  {
    path: "/StickyDemo",
    name: "StickyDemo",
    component: _import_("StickyDemo"),
    desc: "StickyDemo",
  },
  {
    path: "/StampBorderDemo",
    name: "StampBorderDemo",
    component: _import_("StampBorderDemo"),
    desc: "StampBorderDemo",
  },
  {
    path: "/SteperCountDemo",
    name: "SteperCountDemo",
    component: _import_("SteperCountDemo"),
    desc: "加减steper",
  },
  {
    path: "/ProgressBarDemo",
    name: "ProgressBarDemo",
    component: _import_("ProgressBarDemo"),
    desc: "进度条",
  },
  {
    path: "/URLSearchParamsTest",
    name: "URLSearchParamsTest",
    component: _import_("URLSearchParamsTest"),
    desc: "URL测试",
  },
  {
    path: "/ExpandTapArea",
    name: "ExpandTapArea",
    component: _import_("ExpandTapArea"),
    desc: "扩大点击范围",
  },
  {
    path: "/JSObjectFuncDemo",
    name: "JSObjectFuncDemo",
    component: _import_("JSObjectFuncDemo"),
    desc: "对象相关方法",
  },
  {
    path: "/VantDatePickerDemo",
    name: "VantDatePickerDemo",
    component: _import_("VantDatePickerDemo"),
    desc: "时间选择器",
  },
  {
    path: "/PostionFixedPage",
    name: "PostionFixedPage",
    component: _import_("PostionFixedPage"),
    desc: "兼容小程序",
  },
  {
    path: "/RightSwipeDeleteDemo",
    name: "RightSwipeDeleteDemo",
    component: _import_("RightSwipeDeleteDemo"),
    desc: "左滑删除",
  },
  {
    path: "/useSwipeDemo",
    name: "useSwipeDemo",
    component: _import_("useSwipeDemo"),
    desc: "滑动",
  },
  {
    path: "/CustomTabDemo",
    name: "CustomTabDemo",
    component: _import_("CustomTabDemo"),
    desc: "自定义tab",
  },
  {
    path: "/ImgCenterDemo",
    name: "ImgCenterDemo",
    component: _import_("ImgCenterDemo"),
    desc: "图片居中",
  },
  {
    path: "/SelectList",
    name: "SelectList",
    component: _import_("SelectList"),
    desc: "选择列表",
  },
  {
    path: "/AttrsTestDemo",
    name: "AttrsTestDemo",
    component: _import_("AttrsTestDemo"),
    desc: "数据透传测试",
  },
  {
    path: "/ScrollTest",
    name: "ScrollTest",
    component: _import_("ScrollTest"),
    desc: "Scroll 滚动测试",
  },
  {
    path: "/SwiperDemo",
    name: "SwiperDemo",
    component: _import_("SwiperDemo"),
    desc: "轮播图",
  },
  {
    path: "/VantButtonDeme",
    name: "VantButtonDeme",
    component: _import_("VantButtonDeme"),
    desc: "vant 按钮相关",
  },
  {
    path: "/SelectorFocusDemo",
    name: "SelectorFocusDemo",
    component: _import_("SelectorFocusDemo"),
    desc: "Focus 效果",
  },
  {
    path: "/CSSPriorityLevel",
    name: "CSSPriorityLevel",
    component: _import_("CSSPriorityLevel"),
    desc: "CSS优先级",
  },
  {
    path: "/VantImagePreviewDemo",
    name: "VantImagePreviewDemo",
    component: _import_("VantImagePreviewDemo"),
    desc: "图片预览",
  },
  {
    path: "/CustomeRefDemo",
    name: "CustomeRefDemo",
    component: _import_("CustomeRefDemo"),
    desc: "CustomeRef",
  },
  {
    path: '/cyptoDemo',
    name: 'cryptoDemo',
    component: _import_('cryptoDemo'),
    meta: {
      keepAlive: true,
      title: '加密',
    },
    desc: '加密',
  },
  {
    path: '/dynamicCompAdvanced',
    name: 'dynamicCompAdvanced',
    component: _import_('DynamicCompAdvanced'),
    meta: {
      keepAlive: true,
      title: '动态组件进阶',
    },
    desc: '动态组件进阶',
  },
  {
    path: '/IntersectionObserverDemo',
    name: 'IntersectionObserverDemo',
    component: _import_('IntersectionObserverDemo'),
    meta: {
      keepAlive: true,
      title: '曝光检测',
    },
    desc: '曝光检测',
  },
  {
    path: '/html2PageTest',
    name: 'html2PageTest',
    component: _import_('html2PageTest'),
    meta: {
      keepAlive: true,
      title: '海报生成',
    },
    desc: '海报生成',
  },
  {
    path: '/VScrollDemo',
    name: 'VScrollDemo',
    component: _import_('VScrollDemo'),
    meta: {
      keepAlive: true,
      title: 'VScrollDemo',
    },
    desc: 'VScrollDemo',
  },
  {
    path: '/hightFnTest',
    name: 'hightFnTest',
    component: _import_('hightFnTest'),
    meta: {
      keepAlive: true,
      title: '高阶函数',
    },
    desc: '高阶函数',
  },
  {
    path: '/imgAreaTap',
    name: 'imgAreaTap',
    component: _import_('ImgAreaTap'),
    meta: {
      keepAlive: true,
      title: '图像区域点击',
    },
    desc: '图像区域点击',
  },
  {
    path: '/useDropZoneDemo',
    name: 'useDropZoneDemo',
    component: _import_('useDropZoneDemo'),
    meta: {
      keepAlive: true,
      title: '拖放文件',
    },
    desc: '拖放文件',
  },
  {
    path: '/useWindowScrollDemo',
    name: 'useWindowScrollDemo',
    component: _import_('useWindowScrollDemo'),
    meta: {
      keepAlive: true,
      title: '滚动距离检测 x,y',
    },
    desc: '滚动距离检测 x,y',
  },
  {
    path: '/useVirtualListDemo',
    name: 'useVirtualListDemo',
    component: _import_('useVirtualListDemo'),
    meta: {
      keepAlive: true,
      title: '虚拟列表',
    },
    desc: '虚拟列表',
  },
  {
    path: '/Pictures',
    name: 'Pictures',
    component: _import_('Pictures'),
    meta: {
      keepAlive: true,
      title: '图片列表',
    },
    desc: '图片列表',
  },
  {
    path: '/ErrorHandlerTest',
    name: 'ErrorHandlerTest',
    component: _import_('ErrorHandlerTest'),
    meta: {
      keepAlive: true,
      title: '错误封装',
    },
    desc: '错误封装',
  },
  {
    path: '/useCurrentElementDemo',
    name: 'useCurrentElementDemo',
    component: _import_('useCurrentElementDemo'),
    meta: {
      keepAlive: true,
      title: '当前组件元素',
    },
    desc: '当前组件元素',
  },
  {
    path: '/useDateFormatDemo',
    name: 'useDateFormatDemo',
    component: _import_('useDateFormatDemo'),
    meta: {
      keepAlive: true,
      title: 'useDateFormat 格式化',
    },
    desc: 'useDateFormat 格式化',
  },
  {
    path: '/useQRCodeDemo',
    name: 'useQRCodeDemo',
    component: _import_('useQRCodeDemo'),
    meta: {
      keepAlive: true,
      title: '二维码',
    },
    desc: '二维码',
  },
  {
    path: '/useNetworkDemo',
    name: 'useNetworkDemo',
    component: _import_('useNetworkDemo'),
    meta: {
      keepAlive: true,
      title: 'useNetwork',
    },
    desc: 'useNetwork',
  },
  {
    path: '/useGeolocationDemo',
    name: 'useGeolocationDemo',
    component: _import_('useGeolocationDemo'),
    meta: {
      keepAlive: true,
      title: 'useGeolocation',
    },
    desc: 'useGeolocation',
  },
  {
    path: '/WebWorkDemo',
    name: 'WebWorkDemo',
    component: _import_('WebWorkDemo'),
    meta: {
      keepAlive: true,
      title: 'Work线程',
    },
    desc: 'Work线程',
  },
  {
    path: '/useWebWorkerDemo',
    name: 'useWebWorkerDemo',
    component: _import_('useWebWorkerDemo'),
    meta: {
      keepAlive: true,
      title: 'useWebWorker',
    },
    desc: 'useWebWorker',
  },
  {
    path: '/useWebWorkerFnDemo',
    name: 'useWebWorkerFnDemo',
    component: _import_('useWebWorkerFnDemo'),
    meta: {
      keepAlive: true,
      title: 'useWebWorkerFn',
    },
    desc: 'useWebWorkerFn',
  },
  {
    path: '/DragUpDemo',
    name: 'DragUpDemo',
    component: _import_('DragUpDemo'),
    meta: {
      keepAlive: true,
      title: '上拉抽屉',
    },
    desc: '上拉抽屉',
  },
  {
    path: '/useShoppingCartDemo',
    name: 'useShoppingCartDemo',
    component: _import_('useShoppingCartDemo'),
    meta: {
      keepAlive: true,
      title: '购物车',
    },
    desc: '购物车',
  },
  {
    path: '/PublishSubscribeDemo',
    name: 'PublishSubscribeDemo',
    component: _import_('PublishSubscribeDemo'),
    meta: {
      keepAlive: true,
      title: '发布/订阅模式',
    },
    desc: '发布/订阅模式',
  },
  {
    path: '/DownloadExcelToCsv',
    name: 'DownloadExcelToCsv',
    component: _import_('DownloadExcelToCsv'),
    meta: {
      keepAlive: true,
      title: '下载CSV文件',
    },
    desc: '下载CSV文件',
  },
  {
    path: '/DivBackgroudImageDemo',
    name: 'DivBackgroudImageDemo',
    component: _import_('DivBackgroudImageDemo'),
    meta: {
      keepAlive: true,
      title: 'div 的 backgroud-image',
    },
    desc: 'div 的 backgroud-image',
  },
  {
    path: '/VDropdownItemDemo', // 场景订单-补充取消原因
    name: 'VDropdownItemDemo',
    component: () => import('@/components/VDropdownItem/VDropdownItemDemo.vue'),
    meta: {
      title: 'VDropdownItemDemo',
      keepAlive: true,
    },
    desc: '下拉 VDropdownItemDemo',
  },
  {
    path: '/VTransitionModalDemo', // 场景订单-补充取消原因
    name: 'VTransitionModalDemo',
    component: () => import('@/lib/MyUI/VTransitionModal/VTransitionModalDemo.vue'),
    meta: {
      title: 'VTransitionModalDemo',
      keepAlive: true,
    },
    desc: '模态弹窗',
  },
  {
    path: '/VTransitionModalDemoNew', // 场景订单-补充取消原因
    name: 'VTransitionModalDemoNew',
    component: _import_('VTransitionModalDemoNew'),
    meta: {
      title: 'VTransitionModalDemoNew',
      keepAlive: true,
    },
    desc: '模态弹窗',
  },
  {
    path: '/CustomRefreshDemo', // 场景订单-补充取消原因
    name: 'CustomRefreshDemo',
    component: _import_('CustomRefreshDemo'),
    meta: {
      title: 'CustomRefreshDemo',
      keepAlive: true,
    },
    desc: 'CustomRefreshDemo',
  },
  {
    path: '/VTreeNodeDemo', // 场景订单-补充取消原因
    name: 'VTreeNodeDemo',
    component: () => import('@/components/VTreeNode/VTreeNodeDemo.vue'),
    meta: {
      title: 'VTreeNodeDemo',
      keepAlive: true,
    },
    desc: 'VTreeNodeDemo',
  },
  {
    path: '/TestPageHeight', // 场景订单-补充取消原因
    name: 'TestPageHeight',
    component: _import_('TestPageHeight'),
    meta: {
      title: 'TestPageHeight',
      keepAlive: true,
    },
    desc: '高度测试',
  },
  {
    path: '/ScrollDemo', // 场景订单-补充取消原因
    name: 'ScrollDemo',
    component: _import_('ScrollDemo'),
    meta: {
      title: 'ScrollDemo',
      keepAlive: true,
    },
    desc: '滚动测试',
  },
  {
    path: '/ReflectTest', // 场景订单-补充取消原因
    name: 'ReflectTest',
    component: _import_('ReflectTest'),
    meta: {
      title: 'ReflectTest',
      keepAlive: true,
    },
    desc: 'Reflect 动态映射',
  },
  {
    path: '/VInputChoiceDemo', // 场景订单-补充取消原因
    name: 'VInputChoiceDemo',
    component: _import_('VInputChoiceDemo'),
    meta: {
      title: 'VInputChoiceDemo',
      keepAlive: true,
    },
    desc: 'VInputChoiceDemo 下拉输入框',
  },
  {
    path: '/VSearchDemo', // 场景订单-补充取消原因
    name: 'VSearchDemo',
    component: _import_('VSearchDemo'),
    meta: {
      title: 'VSearchDemo',
      keepAlive: true,
    },
    desc: 'VSearchDemo 下拉输入框',
  },
  {
    path: '/ParseJSON', // 场景订单-补充取消原因
    name: 'ParseJSON',
    component: _import_('ParseJSON'),
    meta: {
      title: 'Json解析',
      keepAlive: true,
    },
    desc: 'Json解析',
  },
  
];

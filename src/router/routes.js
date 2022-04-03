//import App from '../App'

const _import_ = (file) => () => import("@/views/" + file + ".vue");
export const H5Router = {
  /// 初始页面
  initial: "/helloPage",
  /// 未知页面/404
  unknown: "",
  /// home页
  home: "/helloPage",
  /// 登录页
  page: "/page/:id",
  ///
  helloPage: "/helloPage",
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

export const RouterMap = [
  { path: "/", 
    redirect: "/home", 
    desc: "为空跳回到首页" 
  },
  {
    path: "/home",
    name: "home",
    component: _import_("HelloPage"),
    desc: "首页",
  },
  {
    path: "/helloPage",
    name: "helloPage",
    component: _import_("HelloPage"),
    desc: "第二主页面",
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
    desc: "vue watch",
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
    path: "/vCardDemo",
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
    path: "/eventTrackingTest",
    name: "eventTrackingTest",
    component: _import_("EventTrackingTest"),
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
    path: "/dyamicClassDemo",
    name: "dyamicClassDemo",
    component: _import_("DyamicClassDemo"),
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
    path: "/CSSPositionDemo",
    name: "CSSPositionDemo",
    component: _import_("CSSPositionDemo"),
    desc: "CSSPositionDemo",
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
    path: "/LeaveContainerDemo",
    name: "LeaveContainerDemo",
    component: _import_("LeaveContainerDemo"),
    desc: "LeaveContainerDemo",
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
    desc: "LogDemo",
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
];

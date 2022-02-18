//import App from '../App'

const _import_ = file => () => import('@/views/' + file + '.vue')
export const H5Router = {
  /// 初始页面
  initial: "/helloPage",
  /// 未知页面/404
  unknown: "",
  /// home页
  home: "/helloPage",
  /// 登录页
  page: '/page/:id',
  /// 
  helloPage: "/helloPage",
  /// 
  user: "/user",
  /// 
  grid: '/grid',
  /// 
  girdDemo: '/girdDemo',
  /// 
  layoutTest: '/layoutTest',
  /// 
  flexDemo: '/flexDemo',
  /// 
  tableViewDemo: '/tableViewDemo',
  /// 
  layoutDemo: '/layoutDemo',
  /// 
  domChange: '/domChange',
  /// 
  slotDemo: '/slotDemo',
  /// 
  setupDemo: '/setupDemo',
  /// 
  dataTransferDemo: '/dataTransferDemo',
  /// 
  tableDemo: '/tableDemo',
  /// 
  userlist: '/userlist',
  /// 
  userlist1: '/userlist1',
}

export const RouterMap = [
  { path:  '/', redirect: '/home' },
  { path: '/home', name: 'home', component: _import_('HelloPage') },
  // { path: '/helloPage', name: 'helloPage', component: _import_('HelloPage') },
  { path: '/page/:id', name: 'page', component: _import_('Page') },
  { path: '/pageSetup', name: 'pageSetup', component:  _import_('PageSetup') },
  { path: '/user', name: 'user', component:  _import_('UserList') },
  { path: '/grid', name: 'grid', component:  _import_('Grid') },
  { path: '/girdDemo', name: 'girdDemo', component:  _import_('GirdDemo') },
  { path: '/layoutTest', name: 'layoutTest', component:  _import_('LayoutTest') },
  { path: '/flexDemo', name: 'flexDemo', component:  _import_('FlexDemo') },
  { path: '/tableViewDemo', name: 'tableViewDemo', component:  _import_('TableViewDemo') },
  { path: '/layoutDemo', name: 'layoutDemo', component:  _import_('LayoutDemo') },
  { path: '/domChange', name: 'domChange', component:  _import_('DomChange') },
  { path: '/compDemo', name: 'compDemo', component:  _import_('CompDemo') },
  { path: '/slotDemo', name: 'slotDemo', component:  _import_('SlotDemo') },
  { path: '/setupDemo', name: 'setupDemo', component:  _import_('SetupDemo') },
  { path: '/dataTransferDemo', name: 'dataTransferDemo', component:  _import_('DataTransferDemo') },
  { path: '/tableDemo', name: 'tableDemo', component:  _import_('TableDemo') },
  { path: '/userlist', name: 'userlist', component:  _import_('UserList') },
  { path: '/userlist1', name: 'userlist1', component:  _import_('UserList1') },
  { path: '/alertSheetDemo', name: 'AlertSheetDemo', component:  _import_('AlertSheetDemo') },
  { path: '/pullRefreshDemo', name: 'PullRefreshDemo', component:  _import_('PullRefreshDemo') },
  { path: '/pullMoreDemo', name: 'PullMoreDemo', component:  _import_('PullMoreDemo') },
  { path: '/sceneList', name: 'sceneList', component:  _import_('sceneList') },
  { path: '/vanConfigProvider', name: 'VanConfigProvider', component:  _import_('VanConfigProvider') },
  { path: '/counterDemo', name: 'CounterDemo', component:  _import_('CounterDemo') },
  { path: '/reactiveDemo', name: 'ReactiveDemo', component:  _import_('ReactiveDemo') },
  { path: '/refDemo', name: 'RefDemo', component:  _import_('RefDemo') },
  { path: '/toRefDemo', name: 'toRefDemo', component:  _import_('toRefDemo') },
  { path: '/toRefsDemo', name: 'toRefsDemo', component:  _import_('toRefsDemo') },
  { path: '/dynamicDemo', name: 'DynamicDemo', component:  _import_('DynamicDemo') },
  { path: '/attrsFather', name: 'AttrsFather', component:  _import_('AttrsFather') },
  { path: '/teleportDemo', name: 'TeleportDemo', component:  _import_('TeleportDemo') },
  { path: '/storeDemo', name: 'StoreDemo', component:  _import_('StoreDemo') },
  { path: '/watchDemo', name: 'WatchDemo', component:  _import_('WatchDemo') },

  { path: '/vantComposablesDemo', name: 'VantComposablesDemo', component:  _import_('VantComposablesDemo') },
  { path: '/vantOverlayDemo', name: 'VantOverlay', component:  _import_('VantOverlayDemo') },
  { path: '/callphoneDemo', name: 'callphoneDemo', component:  _import_('callphoneDemo') },
  { path: '/transformDemo', name: 'TransformDemo', component:  _import_('TransformDemo') },
  { path: '/decorateMaterialList', name: 'DecorateMaterialList', component:  _import_('DecorateMaterialList') },


]
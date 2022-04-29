<template>
  <div class="scene_container">
    <div class="refresh-list">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onreachBottom"
          class="van_list"
          :immediate-check="false"
        >
          <div class="scene_end" >
            <p>我是有底线的～</p>
            <div>没找到喜欢的场景，让我们为您专属定制吧！</div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SceneList',
  data () {
    return {
      isGuess: true,
      pulldowm: false,
      subTabsSelected: [], // 选中耳机菜单
      fixedHeight: 132,
      oldScrollTop: 0,
      showFliter: true,

      navShow: true, // 是否显示标题栏
      title: '智慧场景', // 导航标题
      isleftarrow: true, // 是否显示左侧返回标题
      dropLoading: false,

      tabs: [],
      stashSubTabs: [],
      subTabs: [],
      tabSelected: 0,
      orderTypes: [
        { id: 1,
          name: '综合排序'
        },
        { id: 3,
          name: '新品优先'
        },
        { id: 2,
          name: '评论最多'
        }
      ],
      orderIndex: 1,
      orderName: '综合排序',
      activeColor: '#FF8900',
      stashFliterArr: [],
      filteredArr: [],
      tab: null,
      subtab: null,
      threeTabs: [],
      filterTabs: [],
      openItem: false,
      likeLeftList: [],
      likeRightList: [],
      currentFilter: [],
      submitFilter: [],
      isRequest: false,
      storeCode: null,
      sku: null,
      mdCode: null,
      // 11
      listLoading: false,
      tabId: null,
      subtabId: null,
      isEmpty: false,
      finished: false,
      loading: false,
      refreshing: false,
      spaceList: [],
      needList: [],
      spaceLists: [],
      needLists: [],
      leftList: [],
      rightList: [],
      leftHeight: 0,
      rightHeight: 0,
      queryParams: {
        index: 0,
        count: 10,
        subtab: null,
        tab: null,
        threeTabs: null,
        storeCode: null,
        sku: null,
        // orderBy: 1 // 1综合，2好评，3新品
      },
      firstLoad: true,
      isloading: false,
      showBack: true,
      // 本地缓存tab数据
      subTabs0: [],
      subTabs1: [],
      subTabs2: [],
      gif: '',
      imgsLength: 74,
      handleReachbottom: false,
      provinceCode: '',
      cityCode: '',
      districtCode: '',
      streetCode: ''
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.showFliter) {
      localStorage.setItem('showFliter', '1')
    }
    next()
  },
  created () {},
  activated () {
    console.log('this.oldScrollTop', this.oldScrollTop)

  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    onreachBottom () {
      // 上拉触底事件1秒钟之内不允许筛选框展示
      this.handleReachbottom = true
      setTimeout(() => {
        this.handleReachbottom = false
      }, 1000)
      this.getSceneLists(this.queryParams)
    },
    // 顶部分类列表获取
    getTopTabList () {
      console.log("getTopTabList")
    },

    // 筛选拉取列表数据
    getList () {
      console.log("getList")

    },
    onRefresh () {
      console.log("onRefresh")

    },
  },
  mounted () {
    console.log('当前页面地址域名', `https://${document.domain}`)
    // 进入页面滚动到顶部
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style  scoped>
.scene_container {
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 99%);
  display: flex;
  flex-direction: column;
}
.nav_block {
  width: 100vw;
  height: 96px;
  position: fixed;
  top: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
}
.refresh-list {
  margin-top: 96px;
  width: 100vw;
  flex: 1;
}
.tabs {
  /* margin-top: 44px; */
  height: 52px;
  line-height: 44px;
  padding: 8px 0 17px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
}
.nav_item {
  flex: 1;
}
.nav_item_name {
  font-size: 0.36rem;
  color: #666666;
  font-weight: 500;
  height: 0.56rem;
  line-height: 0.56rem;
}
.nav_item_name_active {
  font-size: 0.4rem;
  color: #333333;
  font-weight: 500;
}

.nav_item_name_active:after {
  content: '';
  width: 0.40rem;
  height: 0.08rem;
  background: #FF8900;
  border-radius: 1px;
  display: block;
  margin: 0 auto;
  margin-top: 1px;
}
.no_scene {
  width: 100%;
  padding: 1.12rem 0;
  text-align: center;
  background: #f5f5f5;
}
.no_scene img {
  width: 1.44rem;
  height: 1.44rem;
  display: block;
  margin: auto;
  margin-bottom: 0.16rem;
}
.no_text {
  font-size: 0.28rem;
  color: #747474;
}
.van_list {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.scene_end {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.scene_end div{
  font-size: 0.24rem;
  color: #999999;
  margin-top: 6px;
}
.scene_end p {
  font-size: 0.28rem;
  color: #666666;
  font-weight: 500;
  margin: 0;
}
.scene_end button {
  width: 2.24rem;
  height: 0.8rem;
  background: #FFC800;
  border-radius: 0.44rem;
  font-size: 0.24rem;
  color: #333333;
  font-weight: 500;
  line-height: 0.8rem;
  margin: 0.32rem 0 0.72rem 0;
  border: none;
}
/* vant下拉菜单样式修改 */
.van-overlay {
  top: 0.02rem;
}
.van-dropdown-menu__bar {
  height: 48px;
}
/* 猜你喜欢 */
.guess_youlike {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.like_title {
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.34rem;
  color: #333333;
  font-weight: 500;
  text-align: left;
  padding: 0 0.4rem;
  background: #f5f5f5;
}
/* 筛选模块 */
.fixed_top {
  position: fixed;
  top: 96px;
  left: 0;
  background-color: #fff;
  width: 100%;
  z-index: 1;
}
.nav_filter_block {
  padding: 0.24rem 0 0.32rem 0.4rem;
}
.nav_filter_tab {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  width: 100%;
  font-size: 12px;
  margin-bottom: 0.32rem;
  text-align: left;
}
.nav_filter_tab:last-child {
  margin-bottom: 0;
}
::-webkit-scrollbar{
  width: 0;
  height: 0;
  color: transparent;
  display: none;
}
.nav_filter_tab .item{
  border-radius: 0.08rem;
  display: inline-block;
  line-height: 0.56rem;
  padding: 0 0.24rem;
  font-size: 0.24rem;
  color: #333;
  background: #f5f5f5;
  margin-right: 0.16rem;
}
.nav_filter_tab .item.active{
  background: rgba(255,137,0,0.10);
  color: #FF8900;
}
.nav_tab_mb {
  margin-bottom: 0.32rem;
}
.triangle {
  width: 0.32rem;
  height: 0.32rem;
  background: url(../assets/images/icon_selected.png) no-repeat;
  background-size: 100%;
  margin: 0 auto;
  margin-bottom: 0.32rem;
}
.triangle_down {
  background: url(../assets/images/icon_selected.png) no-repeat;
  background-size: 100%;
}
/* 互斥选择项不可选样式 */
.text_disabled {
  color: #cccccc;
  font-size: 0.24rem;
  font-weight: 500;
}
.btn_disabled {
  color: #D9D9D9 !important;
  font-size: 0.24rem;
  font-weight: 400;
  background: #f5f5f5 !important;
}
.no-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-bottom: 40px;
}
.no-content>img {
  width: 3.24rem;
  height: 3.24rem;
}
.no-content>div {
  font-size: 16px;
  color: #333333;
}
</style>

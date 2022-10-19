<template>
  <div class="nav-bar">
    <!-- 页面导航根据页面内容进行配置操作 -->
    <van-nav-bar :fixed="isFixed" >
      <template #left>
        <slot name="left">
          <van-icon 
            v-if="isleftarrow" 
            name="arrow-left" 
            size="18" 
            @click="goback" 
          />
        </slot>
      </template>

      <template #title>
        <slot name="title">
          <span class="van-nav-bar-title">{{ navBarTitle }}</span>
        </slot>
      </template>

      <template #right>
        <slot name="right"></slot>
      </template>
      <!-- <template #right>
        <van-icon v-if="isrightShow" name="ellipsis" size="17" @click="toShare" />
      </template> -->
    </van-nav-bar>
    <!-- 分享面板 -->
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select='selectShare'
    />
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';

const props = defineProps({
  navBarTitle: {// 标题文字
    type: String,
  },
  navLeftText: {// 左侧箭头文字叙述
    type: String,
  },
  isleftarrow: {// 是否显示左侧返回按钮
    type: Boolean,
  },
  isrightShow: {
    type: Boolean,
    default: false,
  }, // 是否显示右侧分享按钮
  closeWebview: {
    type: Boolean,
    default: false,
  }, // 是否关闭webview
  isFixed: {
    type: Boolean,
    default: false,
  }
});

const currentInstance = getCurrentInstance();
const { $platform, $uplus, } = currentInstance.appContext.config.globalProperties;

const showShare = ref(false);

const options = ref(
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' }
    // { name: '微博', icon: 'weibo' },
    // { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' }
  ]
);

function goback () {
  // alert(`isFixed:${this.isFixed} `)
  if ($platform.isInnerApp && props.closeWebview) {
    // 直接关闭容器
    console.log('this.$uplus.closeH5ContainerView();');
    $uplus.closeH5ContainerView();
  } else if ($platform.isWxmp && props.closeWebview) {
    // 返回小程序
    console.log('wx.miniProgram.navigateBack();');
    wx.miniProgram.navigateBack();
  } else {
    console.log('window.history.go(-1)');
    window.history.go(-1);
  }
}

// 分享
function toShare () {
  showShare.value = true;
}

// 选择分享途径
function selectShare (option) {
  console.log('选择分享的途径', option);
}

</script>

<style scoped>
.nav-bar {
  width: 100%;
  z-index: 10;
}

.van-nav-bar-title {
  font-size: 18px;
}

.van-nav-bar .van-icon, .van-nav-bar-title {
  color: #333333;
}

.van-nav-bar__content {
  height: 0.88rem;
}

.van-hairline--bottom::after {
  border-bottom-width: 0;
}
</style>

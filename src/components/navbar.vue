<template>
  <div class="nav-bar">
    <!-- 页面导航根据页面内容进行配置操作 -->
    <van-nav-bar v-bind="$attrs" >
      <template #left>
        <slot name="left">
          <van-icon v-if="isleftarrow" name="arrow-left" size="17" @click="goback" />
        </slot>
      </template>

      <template #title>
        <slot name="title">
          <span class="van-nav-bar-title" @click="onTitle">{{ navBarTitle }}</span>
        </slot>
      </template>

      <template #right>
        <slot name="right">
          <div v-if="rightText">{{rightText}}</div>
        </slot>
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

<script>
import { json } from 'body-parser';

export default {
  name: 'NavBar',
  props: {
    navBarTitle: String, // 标题文字
    leftText: String, // 左侧箭头文字叙述
    rightText: String, // 左侧箭头文字叙述
    isleftarrow: Boolean, // 是否显示左侧返回按钮
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
  },
  data () {
    return {
      showShare: false,
      options: [
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
      ]
    };
  },
  created () {
  },
  methods: {
    // 返回上一页
    goback () {
      // alert(`isFixed:${this.isFixed} `)
      if (this.isInnerApp && this.closeWebview) {
        // 直接关闭容器
        console.log('this.$uplus.closeH5ContainerView();');
        this.$uplus.closeH5ContainerView();
      } else if (this.isWxmp && this.closeWebview) {
        // 返回小程序
        console.log('wx.miniProgram.navigateBack();');
        wx.miniProgram.navigateBack();
      } else {
        console.log('window.history.go(-1)');
        window.history.go(-1);
      }
    },
    // 分享
    toShare () {
      this.showShare = true;
    },
    // 选择分享途径
    selectShare (option) {
      console.log('选择分享的途径', option);
    },
    onTitle () {
      console.log('$attrs', this.$attrs);
      console.log('$attrs', JSON.stringify(this.$attrs));
      console.log(`$attrs['left-arrow']`, this.$attrs['left-arrow']);
    }
  }
};
</script>

<style scoped>
  .nav-bar {
    width: 100%;
    z-index: 10;

  /* border: 1px solid red; */
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

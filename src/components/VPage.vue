// 基础页面布局
/**
 **********************************************
 *  slot name="header"  fiexd 顶部标签        *
 *  *******************************************
 *  *                                         *
 *  *  可滚动容器                               *
 *  *                                         *
 *  *******************************************
 *  slot name="footer"  fiexd 底部标签         *
 **********************************************
 */
 */
<template>
  <div class="container">
    <div class="section-header" v-if="headerHeight" >
      <slot name="header"></slot>
    </div>

    <div class="section-box">
      <slot></slot>
    </div>
    <div></div>

    <div class="section-footer" v-if="footerHeight" >
      <slot name="footer"></slot>
    </div>
  </div>
</template>


<script setup>
import { defineProps } from 'vue';

defineProps({
  isShowNavBar: {
    type: Boolean,
    default: true,
  },
  headerHeight: {
    type: String,
    default: "",
  },
  footerHeight: {
    type: String,
    default: "",
  },
});

</script>


<style scoped lang="scss">
.container {
    height: 100%;

    .section-box{
      overflow-y: auto;

      padding-top: v-bind(headerHeight);
      padding-bottom: v-bind(footerHeight);
      // padding: 46px 0 84px;
    }

    .section-header, .section-footer {
      position: fixed;
      width: 100%;
    }

    .section-header {
      top: 0
    }

    .section-footer {
      bottom: 0;
    }
}

</style>
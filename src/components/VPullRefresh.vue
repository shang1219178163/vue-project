
/*
<VPullRefresh
    class="van-pull-refresh"
    v-model:refreshing="refreshingVal"
    :onRefresh="onRefresh"
    :isSuccess="isSuccess">
    内容控件
</VPullRefresh>
isSuccess : 请求是否成功
onRefresh : 下拉刷新事件
refreshing : 刷新状态
*/

<template>
  <van-pull-refresh
    v-model="refreshingVal"
    @refresh="onRefresh"
    style="transition-duration: 300ms"
    :disabled="disabled"
    head-height="70"
    pull-distance="70"
  >
  <!-- 下拉提示 -->
  <template #normal>
      <div class="v-pull-refresh-content">
        <van-image class="v-pull-refresh-content__logo" :src="img_pull_refresh_base64" />
        <span class="v-pull-refresh-content__title">下拉刷新</span>
      </div>
    </template>
    <!-- 下拉提示 -->
    <template #pulling>
      <div class="v-pull-refresh-content">
        <van-image class="v-pull-refresh-content__logo" :src="img_pull_refresh_base64" />
        <span class="v-pull-refresh-content__title">下拉刷新</span>
      </div>
    </template>
    <!-- 释放提示 -->
    <template #loosing>
      <div class="v-pull-refresh-content">
        <van-image class="v-pull-refresh-content__logo" :src="img_pull_refresh_base64" />
        <span class="v-pull-refresh-content__title">松开刷新</span>
      </div>
    </template>
    <!-- 加载提示 -->
    <template #loading>
      <div class="v-pull-refresh-content">
        <van-image class="v-pull-refresh-content__logo" :src="img_pull_refresh_base64" />
        <span class="v-pull-refresh-content__title">刷新中</span>
      </div>
    </template>
    <!-- 完成提示 -->
    <template #success>
      <div class="v-pull-refresh-content">
        <van-image class="v-pull-refresh-content__logo" :src="img_pull_refresh_base64" />
        <span class="v-pull-refresh-content__title">{{
          isSuccess ? '刷新成功' : '刷新失败'
        }}</span>
      </div>
    </template>
    <slot></slot>
  </van-pull-refresh>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
import img_pull_refresh_base64 from '@/assets/images/img_pull_refresh_base64.js';

const props = defineProps({
  refreshing: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },
  onRefresh: {
    type: Function,
    required: false,
  },
  isSuccess: {
    type: Boolean,
    default: true,
  },
  offsetY: {
    type: String,
    default: '8px',//历史原因导致默认为8px
  },
});
const emits = defineEmits(['update:refreshing']);
const refreshingVal = computed({
  set: (newVal) => {
    if (refreshingVal.value !== newVal) {
      emits('update:refreshing', newVal);
    }
  },
  get: () => props.refreshing,
});
</script>

<style lang="scss" scoped>

.v-pull-refresh-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__logo{
    width: 60px;
    height: auto;
    // margin-top: 8px;
    margin-top: v-bind(offsetY);
  }

  &__title {
    margin-top: -19px;
    font-size: 12px;
    color: #333333;
    font-family: PingFangSC-Regular;
    line-height: normal;
  }
}
</style>

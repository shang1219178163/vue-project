/*
<VRefreshCustom
  v-model:refreshing="refreshing"
  v-model:loading="loading"
  :onRefresh="onRefresh"
  :loadMore="loadMore"
  :finished="finished"
  finishedText="我是有底线的～"
  :netStatus="netStatus"
  :clickVNet="clickVNet"
  :isSuccess="isSuccess"
>
    xxx内容控件
</VRefreshCustom>
refreshing : 下拉刷新状态 
loading : 上拉刷新状态 
onRefresh : 下拉刷新事件 
loadMore : 上拉事件 
finished : 上拉是否最一页 
finishedText : 上拉最后一页msg 
netStatus : 无数据页面状态值 
clickVNet : 无数据页面点击事件 
isSuccess : 请求是否成功 
*/

<template>
  <VNet
    class="VRefreshCustomNew-vnet"
    :status="netStatus"
    nodataMsg="暂无内容"
    :loading="refreshingVal"
    errorMsg="网络异常，点击重新加载"
    @click="clickVNet"
  >
    <VPullRefresh
      class="VRefreshCustomNew-pull-refresh"
      v-model:refreshing="refreshingVal"
      :onRefresh="onRefresh"
      :disabled="refreshDisabled"
      :isSuccess="isSuccess"
    >
      <van-list
        class="VRefreshCustomNew-van-list"
        id="van-list"
        v-model:loading="loadingVal"
        :finished="finished"
        :finished-text="finishedText"
        @load="loadMore"
        :immediate-check="true"
      >
        <slot></slot>
      </van-list>
    </VPullRefresh>
  </VNet>
</template>

<script setup>
import {
  defineComponent,
  onMounted,
  ref,
  watch,
  computed,
} from 'vue';
import VNet from '@/components/VNet.vue';
import VPullRefresh from '@/components/VPullRefresh.vue';

const props = defineProps({
  refreshing: {
    type: Boolean,
    default: false,
  },
  netStatus: {
    type: Number,
    default: 1,
    validator: (value) => {
      // console.log("netStatus", typeof value, value);
      return [-1, 0, 1].includes(value);
    },
  },
  loading: {
    type: Boolean,
    default: false,
  },
  onRefresh: {
    type: Function,
    required: false,
  },
  loadMore: {
    type: Function,
    required: false,
  },
  clickVNet: {
    type: Function,
    required: true,
  },
  finished: {
    type: Boolean,
    default: false,
  },
  finishedText: {
    type: String,
    default: '',
  },
  isSuccess: {
    type: Boolean,
    default: true,
  },
});

const refreshDisabled = ref(false);
const scrollTop = ref(0);
const listRef = ref(null);
const isShowFinishedText = ref(false);
const emits = defineEmits(['update:refreshing', 'update:loading']);

defineComponent({
  VNet,
  VPullRefresh,
});

const refreshingVal = computed({
  set: (newVal) => {
    if (refreshingVal.value !== newVal) {
      emits('update:refreshing', newVal);
    }
  },
  get: () => props.refreshing,
});

const loadingVal = computed({
  set: (newVal) => {
    if (loadingVal.value !== newVal) {
      emits('update:loading', newVal);
    }
  },
  get: () => props.loading,
});

watch( () => props.finished, (val) => {
  if (val && listRef.value?.$el) {
    isShowFinishedText.value = listRef.value.$el.scrollHeight > listRef.value.$el.clientHeight;
  }
});

watch(scrollTop, (val) => {
  if (val <= 10) {
    refreshDisabled.value = false;
  } else {
    refreshDisabled.value = true;
  }
});

onMounted(() => {
  const e = listRef.value?.$el;
  e?.addEventListener('scroll', () => {
    scrollTop.value = e?.scrollTop;
  });
});
</script>

<style lang="scss" scoped>
.VRefreshCustom-vnet {
  width: 100%;
  height: 100%;
  // height:inherit;

  background-color: #f6f6f6;
}

.VRefreshCustom-pull-refresh {
  width: 100%;
  height: 100%;
  // height: inherit;

  overflow: auto;
}

.VRefreshCustom-van-list {
  width: 100%;
  height: 100%;
  // height: inherit;
  background-color: #f6f6f6;

  // overflow: auto;
}

</style>

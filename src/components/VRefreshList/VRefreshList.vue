<template>
  <!-- <slot name="navbar" >
  </slot> -->
  <VRefreshCustom
    v-model:refreshing="refreshing"
    v-model:loading="loading"
    :onRefresh="onRefresh"
    :loadMore="onMore"
    :finished="finished"
    :loadingText="loadingText"	
    :finishedText="finishedText"
    :netStatus="netStatus"
    :clickVNet="clickVNet"
    :isSuccess="isSuccess"
  >
    <slot :list="list"></slot>
  </VRefreshCustom>
  <!-- <div class="van-safe-area-bottom"></div> -->
</template>


<script setup>
import VRefreshCustom from '../VRefreshCustom.vue';

import { getCurrentInstance, ref, reactive, computed, watch, onMounted, onActivated} from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { Toast } from 'vant';

import { NET_MSG_ERROR } from '@/service/request/apiMessage';
import { hasNet, goToPage, goToPageForResult } from '@/utils/uplusApi';


const currentInstance = getCurrentInstance();
const { $platform, $vtoast, } = currentInstance.appContext.config.globalProperties;

onBeforeRouteLeave(() => {
  $vtoast.clear();
  console.log('离开 MessageInteractivePage.vue');
});

const props = defineProps({
  requestFC: {
    type: Function,
    required: true,
    // validator: (value) => {
    //   console.log(`requestFC:${typeof value},${value}`);
    //   return Array.isArray(value);
    // },
    description: '接口请求方法',
  },
  requestErrorFC: {
    type: Function,
    // default: () => false,
    // validator: (value) => {
    //   console.log(`requestError:${typeof value},${value}`);
    //   return [true,].includes(value);
    // },
    description: '接口请求错误回调方法',
  },
  pageIndexInitial: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 30,
  },
  requestParamsChange: {
    type: String,
  },
  loadingText: {
    type: String,
    default: '',
  },
  finishedText: {
    type: String,
    default: '',
  },
});

const pageIndex = ref(props.pageIndexInitial);


// const refreshDisabled = ref(false);

const refreshing = ref(false);
const isSuccess = ref(false);

const loading = ref(false);
const finished = ref(false);

/// -1 请求失败; 0无数据; 1 正常列表,有数据;
const netStatus = ref(1);
const list = reactive([]);


const clickVNet = () => {
  $vtoast.loading({});
  onRefresh();
};

///下拉刷新
const onRefresh = async () => {
  console.log('VRefreshList onRefresh');

  pageIndex.value = props.pageIndexInitial;

  if (!hasNet.value) {
    // netStatus.value = -1;

    refreshing.value = false;// 下拉刷新加载状态结束
    isSuccess.value = false;// 下拉刷新成功失败

    loading.value = false;// 加载状态结束
    finished.value = true;// 数据全部加载完成

    $vtoast.clear();
    Toast(NET_MSG_ERROR);
    return;
  }
  refreshing.value = true;
  loading.value = false;

  requestList(true);
};

// 上拉获取更多
const onMore = async () => {
  console.log('VRefreshList onMore');
  pageIndex.value++;

  refreshing.value = false;
  loading.value = true;
  requestList(false);
};

/// 获取历史消息
const requestList = async () => {
  try {
    netStatus.value = 1;

    const params = {
      isRefresh: refreshing.value,
      page: pageIndex.value,
      pageSize: props.pageSize,
      lastObj: list.length > 0 ? list[list.length - 1] : undefined,
    };

    // console.log(`VRefreshList params:${JSON.stringify(params)}`);
    const items = await props.requestFC(params);
    // console.log(`VRefreshList items:${items.length}`);
    if (refreshing.value) {
      list.splice(0, list.length);
    }
    if (list.length === 0 && items.length === 0) {
      refreshing.value = false;
      isSuccess.value = true;

      loading.value = false;// 加载状态结束
      finished.value = true;// 数据全部加载完成
      netStatus.value = 0;
      return;
    }

    if (items.length) {
      list.push(...items);
    }
    console.log(`${location.hash} list:${list.length}, items:${items.length}`);

    loading.value = false;// 加载状态结束
    finished.value = (items.length < props.pageSize);// 数据全部加载完成

    if(refreshing.value){
      isSuccess.value = true;
    }
    netStatus.value = list.length === 0 ? 0 : 1;

  } catch (error) {
    console.log(`${location.hash} error: ${JSON.stringify(error)}, 
    refreshing: ${refreshing.value},
    hasNet.value:${hasNet.value}`);
    finished.value = true;// 数据全部加载完成
    isSuccess.value = false;// 下拉刷新成功失败

    if (!hasNet.value) {
      netStatus.value = -1;
      // if (refreshing.value) {
      //   isSuccess.value = false;// 下拉刷新成功失败
      // }
    } else {
      netStatus.value = 0;
    }

    if (!error) {
      return;
    }
    props.requestErrorFC && await props.requestErrorFC(error);
    
  } finally {
    $vtoast.clear();

    refreshing.value = false;
    loading.value = false;// 加载状态结束
  }
};

watch(() => props.requestParamsChange, (newValue, oldValue) => {
  console.log('watch requestParamsChange', newValue, oldValue);
  if (newValue !== oldValue) {
    scrollToTop(listEl);
    onRefresh();
  }
});

watch(() => hasNet.value, (newValue, oldValue) => {
  // console.log('hasNet.value', newValue, oldValue);
  if (newValue) {
    onRefresh();
  }
});


let listEl;

onMounted(() => {
  listEl = document.getElementById('van-list');
  // console.log(listEl);
});

// 滚动到顶部
const scrollToTop = (e) => e.scrollIntoView({ block: 'start' });
</script>


<style scoped lang='scss'>

// .navbar{
//   height: 46px;
// }

// :deep .van-pull-refresh{
//   top: 46px;
// }
</style>
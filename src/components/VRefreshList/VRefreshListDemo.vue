<template>
  <navbar
    class="navbar"
    isleftarrow
    navBarTitle="数据透传"
    closeWebview
    isFixed
  >
    <template #title>
      <DropdownMenu activeColor="#333333"	>
        <VDropdownItem 
          activeColor="#333333"
          :options="options"
          :change="change"
        >
        </VDropdownItem>
      </DropdownMenu>
    </template>
  </navbar>
  <VRefreshList
    :requestFC="requestFC"
    :requestErrorFC="requestErrorFC"
    :requestParamsChange="tag"
    :pageIndexInitial="pageIndexInitial"
  >
    <template v-slot="slotProps">
      <MessageInteractiveCell 
        class="page-view__cell"
        v-for="(e, index) in slotProps.list" :key="index"
        :imgUrl="deliverDataObj(e)?.activityUserIcon"
        :imgUrlRight="getResizedAliOSSImageUrl(e, 64)"
        :text="formatContentTitle(e)"
        :detailText="formatContentDetails(e)"
        :tag="formatDateNoYear(e.pushTime)"
        @click="clickCell(e)"
      >
        <!-- MessageInteractiveCell {{ item }} -->
      </MessageInteractiveCell>
      <!-- <div>{{ JSON.stringify(slotProps) }}</div> -->
    </template>
  </VRefreshList>
  <!-- <div class="van-safe-area-bottom"></div> -->
</template>


<script setup>
import navbar from '@/components/navbar.vue';
import VRefreshList from './VRefreshList.vue';

import VDropdownItem from '@/components/VDropdownItem/VDropdownItem.vue';
import MessageInteractiveCell from '@/views/message/components/MessageInteractiveCell.vue';

import { getCurrentInstance, ref, reactive, computed, watch, onMounted, onActivated} from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { Toast } from 'vant';
import { useStore } from 'vuex';

import { DropdownMenu, DropdownItem } from 'vant';

import { NET_MSG_ERROR } from '@/service/request/apiMessage';
import { hasNet, goToPage, goToPageForResult } from '@/utils/uplusApi';
import * as RQ from '@/service/request/request.js';
import * as MessageContant from '@/views/message/MessageContant.js';
import { 
  formatDateWithYear,
  formatDateNoYear,
  jumpURL, 
  getResizedAliOSSImageUrl, 
  deliverDataObj,
} from '@/views/message/MessageCommonUtil';
// import moment from 'moment';


import icon_interactive from '@/assets/images/icon_interactive_base64';
import icon_like from '@/assets/images/icon_like_base64';
import icon_evaluation from '@/assets/images/icon_evaluation_base64';


const store = useStore();
const currentInstance = getCurrentInstance();
const { $platform, $vtoast, $debounce, $gio} = currentInstance.appContext.config.globalProperties;

onBeforeRouteLeave(() => {
  $vtoast.clear();
  console.log('离开 MessageInteractivePage.vue');
});


const options = reactive([
  { 
    idx: 0,
    icon: icon_interactive,
    text: '全部消息', 
    value: '',
  },
  { 
    idx: 1,
    icon: icon_like,
    text: '点赞', 
    value: 'interactive_like_tag',
  },
  { 
    idx: 2,
    icon: icon_evaluation,
    text: '评论', 
    value: 'interactive_evaluation_tag',
  },
]);

const change = (option) => {
  console.log(`demo option: ${option}`);
  tag.value = option.value;
  // test();
  // onRefresh();
};


// 初始创建页面刚进来加载一次
onMounted(() => {
  // console.log('MessageList -> onMounted');
  // $vtoast.loading({});
  // onRefresh();
});

onActivated(() => {
  console.log('ContentList.vue -> onActivated');
  // $vtoast.loading({});
  // onMore();
});

const businessType = ref(store.getters.msgType || '20');

const pageIndexInitial = ref(1);

const tag = ref('');

/// 获取历史消息
async function requestFC(options) {
  const {isRefresh, page, pageSize, lastObj} = options;
  console.log(`VRefreshListDemo requestFC:${JSON.stringify(isRefresh)},${page}`);

  const timestamp = Date.now();
  let msgTime = formatDateWithYear(timestamp);
  if (!isRefresh && lastObj) {
    msgTime = lastObj.pushTime;
  }

  const params = {
    msgTime: msgTime,
    queryTag: 1,
    querySize: pageSize,
    businessType: businessType.value,
    tag: tag.value,
  };

  if (['20'].includes(businessType.value) && 
  store.getters.msgBelong && 
  store.getters.msgBelongType) {
    params.belong = store.getters.msgBelong;
    params.belongType = store.getters.msgBelongType;
  }

  // console.log(`${location.hash} params:${JSON.stringify(params)}`);
  const items = await RQ.getMsgHistory(params);
  // console.log(`${location.hash} items:${items.length}`);
  return items;
}

async function requestErrorFC(error) {
  Toast(JSON.stringify(error));
}

const clickCell = (obj) => {
  if (!hasNet.value) {
    Toast(NET_MSG_ERROR);
    return;
  }

  // 设置消息已读
  // if (readStatus !== 2) {
  //   await RQ.reportStatus({ taskId: taskId });
  //   obj.readStatus = 2;
  // }
  const url = formatContentReviewPage(obj);
  jumpURL(url);
};

function formatContentTitle(e) {
  const activityUserObj = deliverDataObj(e);
  // const result = decodeURIComponent(activityUserObj?.activityUserNickName ?? '');
  const result = decodeURIComponent(e.message.data.body.view?.title ?? '-');
  return result;
}

function formatContentDetails(e) {
  const result = decodeURIComponent(e.message.data.body.view?.title ?? '-');
  return result;

  // if (['20',].includes(businessType.value)) {
  //   return '';//不显示副标题
  // }

  // const result = e.message.data.body.view?.content ?? '';
  // return result;
}

function formatContentReviewPage(e) {
  const result = e.message.data.body.extData?.reviewPage || 
    e.message.data.body.extData?.targetPage;
  return result;
}

</script>


<style scoped lang='scss'>

:deep .van-dropdown-menu{
  min-width: 250px;
}


.page-view{
  position: relative;
  margin-top: 46px;
  height: calc(100vh - 46px);

  overflow: scroll;

  // border: 1px solid blue;
}

// .page-view__cell{
  // height: 84px;

  // border-top: 1px solid red;
// }

// .page-view__cell:last-child{
  // border-bottom: 1px solid red;
// }

.navbar{
  height: 46px;
}

:deep .van-pull-refresh{
  top: 46px;
}
</style>
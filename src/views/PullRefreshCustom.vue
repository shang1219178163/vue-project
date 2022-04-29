<template>
  <div>
    <van-nav-bar fixed title="下拉刷新" left-arrow @click-left="onClickLeft" />
    <van-tabs 
      class="van-tabs"
      v-model:active="active" 
      sticky
    >
      <van-tab title="标签 1">
        <van-pull-refresh 
          v-model="isLoading"
          :head-height="70"
          :pull-distance="70"
          @refresh="onRefresh"
        >
          <!-- 下拉提示 -->
          <template #pulling>
            <div class="pull-content" >
              <img class="pull-content__logo" :src="require('@/assets/images/img_pull_refresh.gif')" />
              <div class="pull-content__title">下拉刷新</div>
            </div>
          </template>

          <!-- 释放提示 -->
          <template #loosing>
            <div class="pull-content">
              <img class="pull-content__logo" :src="require('@/assets/images/img_pull_refresh.gif')" />
              <div class="pull-content__title">松开刷新</div>
            </div>
          </template>

          <!-- 加载提示 -->
          <template #loading>
            <div class="pull-content" >
              <img class="pull-content__logo" :src="require('@/assets/images/img_pull_refresh.gif')" />
              <div class="pull-content__title">刷新中...</div>
            </div>
          </template>
          <template #success>
            <div class="pull-content" >
              <img class="pull-content__logo" :src="require('@/assets/images/img_pull_refresh.gif')" />      
              <div class="pull-content__title">刷新完成</div>
            </div>
          </template>
        <p style="height: 500px; margin:0px; paddding: 0px">刷新次数: {{ count }}</p>
        </van-pull-refresh>
      </van-tab>
      <!-- <van-tab title="标签 2">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell v-for="item in list" :key="item" :title="item" />
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="标签 3">
        <VPullRefresh 
          v-model="refreshing" 
          v-model:loading="isLoading"
          :finished="finished"
          :netStatus="netStatus"
          :netHeight="'calc(100vh - 44px - 46px)'"
          :onRefresh="onRefresh" 
          :onLoad="onLoad"
          :onNet="onNet"
        >
            <van-cell v-for="item in list" :key="item" :title="item" />
        </VPullRefresh>
      </van-tab> -->
    </van-tabs>
  </div>
</template>


<script setup>
import VPullRefresh from '@/components/VPullRefresh.vue';

import { ref, reactive, watch, watchEffect, computed, onActivated } from "vue";

const onClickLeft = () => history.back();

const active = ref(0);


onActivated(() => {
  onRefresh();
});

const list = reactive([]);

const isLoading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

let netStatus = ref(1);
const count = ref(0);
 
watch([count, list], (newValue, oldValue) => {
    console.log('watch', newValue, oldValue);
  },
 { deep: true }
)

watchEffect(() => console.log("count", count.value))
watchEffect(() => console.log("list", list))

// const count = ref(0)
// watch(count, (count, prevCount) => {
//   /* ... */
// })


const onLoad = () => {
  setTimeout(() => {
    if (refreshing.value) {
      list.value = [];
      refreshing.value = false;
    }

    for (let i = 0; i < 30; i++) {
      list.push(list.length + 1);
    }

    isLoading.value = false;

    // if (list.value.length >= 40) {
    //   finished.value = true;
    // }
    finished.value = true;

    netStatus.value = 1;
  }, 2000);
};

const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  // isLoading.value = true;
  // onLoad();
};

const onNet = () => {
  console.log("onNet");

  onRefresh()
}

</script>


<style scoped lang="scss">

// .van-pull-refresh {
//   --van-pull-refresh-head-height: 0;
// }

.van-tabs{
  position: relative;
  top: 46px;
}


.pull-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__logo {
    width: 60px;
    height: 60px;

    margin-top: 8px; 
  }

  &__title {
    // height: 18px;
    line-height: normal;
    margin-top: -18px;
    font-size: 12px;
    color: #333333;
    font-family: PingFangSC-Regular;
  }
}


</style>

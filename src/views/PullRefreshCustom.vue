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
          :head-height="80" 
          @refresh="onRefresh"
        >
          <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
          <template #pulling="props">
            <img
              class="doge"
              :src="require('@/assets/images/img_pull_refresh.gif')"
              :style="{ transform: `scale(${props.distance / 80})` }"
            />
          </template>

          <!-- 释放提示 -->
          <template #loosing>
            <img
              class="doge"
              :src="require('@/assets/images/img_pull_refresh.gif')"
            />
          </template>

          <!-- 加载提示 -->
          <template #loading>
            <img
              class="doge"
              :src="require('@/assets/images/img_pull_refresh.gif')"
            />
          </template>
          <van-list
            v-model:loading="isLoading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <template #loading>
              <img
                class="doge"
                :src="require('@/assets/images/img_pull_refresh.gif')"
              />
            </template>
            <van-cell v-for="item in list" :key="item" :title="item" />
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="标签 2">
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
          v-model="isLoading" 
          v-model:loading="isLoading"
          :finished="finished"
          :netStatus="netStatus"
          :onRefresh="onRefresh" 
          :onLoad="onLoad"
          :onNet="onNet"
        >
            <van-cell v-for="item in list" :key="item" :title="item" />
        </VPullRefresh>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script setup>
import VPullRefresh from '@/components/VPullRefresh.vue';

import { ref, onActivated } from "vue";

const onClickLeft = () => history.back();

const active = ref(2);


onActivated(() => {
  onRefresh();
});

const list = ref([]);
const isLoading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

let netStatus = ref(0);

const onLoad = () => {
  setTimeout(() => {
    if (refreshing.value) {
      list.value = [];
      refreshing.value = false;
    }

    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }
    isLoading.value = false;

    // if (list.value.length >= 40) {
    //   finished.value = true;
    // }
    finished.value = true;
  }, 2000);
};

const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  isLoading.value = true;
  onLoad();
};

const onNet = () => {
  console.log("onNet");
}

</script>


<style scoped>

.van-tabs{
  position: relative;
  top: 46px;
}

.doge {
  width: 60px;
  height: 60px;
  /* margin-top: 8px;
  border-radius: 4px; */
  backgroud-color: green,
}
</style>

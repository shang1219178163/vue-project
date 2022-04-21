<template>
  <div>
    <van-nav-bar 
    fixed 
    title="下拉刷新1" 
    left-arrow 
    @click-left="() => history.back()" 
    right-text="刷新"
    @click-right="refreshing = !refreshing;"
     />
    <van-tabs 
    class="van-tabs"
    v-model:active="active" sticky>
      <van-tab title="标签 1">
        <van-pull-refresh 
          v-model="refreshing" 
          @refresh="onRefresh"
        >
          <van-list
            v-model:loading="isLoading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell v-for="item in list" :key="item" :title="item" />
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="标签 2">
        <van-pull-refresh 
        v-model="refreshing" 
        @refresh="onRefresh">
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
    </van-tabs>
  </div>
</template>

<script setup>
import {ref} from "vue";

const list = ref([]);
const isLoading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

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

      refreshing.value = false;
  }, 1000);
};

const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  isLoading.value = true;
  onLoad();
};

</script>


<style scoped>

.van-tabs{
  position: relative;
  top: 46px;
}

</style>

<template>
    <div>
        <van-nav-bar title="人员清单" 
        left-arrow  
        @click-left="onClickLeft" 
        right-text="刷新" 
        @click-right="onClickRight"/>
        <van-tabs v-model:active="active">
          <van-tab v-for="t in tabTitles" :key="t" :title="t">
            <van-pull-refresh 
              v-model="refreshing" 
              @refresh="onRefresh"
            >
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

<script>
import { ref } from 'vue';

export default {
  setup() {

    const tabTitles = [
    "装修图纸",
    "物料清单",
    "人员清单"
    ]

    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);

    const onClickLeft = () => {
      history.back();
    }

   const onClickRight = () => {
      onRefresh()
    }

    const onLoad = () => {
      setTimeout(() => {
        if (refreshing.value) {
          list.value = [];
          refreshing.value = false;
        }

        for (let i = 0; i < 20; i++) {
          list.value.push(list.value.length + 1);
        }
        loading.value = false;
        // 是否有更多数据
        finished.value = list.value.length >= 60;
      }, 1000);
    };

    const onRefresh = () => {
      // 清空列表数据
      finished.value = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      loading.value = true;
      onLoad();
    };
    return {
      onClickLeft,
      onClickRight,
      tabTitles,
      list,
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing,
    };
  },
};
</script>
<style lang="">
    
</style>
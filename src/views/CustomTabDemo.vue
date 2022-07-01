<template>
  <div class="container">
    <navbar
      class="nav-bar"
      v-if="!isWxmp"
      navBarTitle="埋点demo"
      isleftarrow
      closeWebview
      isFixed
    />
    <van-tabs 
      class="h-van-tabs"
      v-model:active="active">
      <van-tab title="标签 1">
        <template #title>
          <div class="tab-title">
            <div>111</div>
            <div>222</div>
          </div>
        </template>
        <div class="tab">tab</div>
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
    </van-tabs>

  </div>
</template>


<script setup>
import navbar from '@/components/navbar.vue';

import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

const active = ref(0);


const onRefresh = async () => {

};

const onMore = async () => {

};

const tabObjs = reactive([
{
  title: "热门活动",

}
]);

</script>


<style scoped lang='scss'>
.container{
  position: fixed;
  

}

.h-van-tabs{
  padding-top: 46px;
  width: 100vw;
}

.tab-title{
  display: flex;
  flex-direction: column;

  padding: 18px 0 ;
}

</style>
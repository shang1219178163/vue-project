<template>
  <div class="container">
    <navbar
      title="数据透传1"
      left-text="返回1"
      right-text="按钮1"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"

      navBarTitle="数据透传"
      isleftarrow
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </navbar>
    <!-- <navbar
      class="nav-bar"
      v-if="!isWxmp"
      navBarTitle="埋点demo"
      isleftarrow
      closeWebview
      isFixed
    /> -->
    <van-tabs 
      class="h-van-tabs"
      v-model:active="active">
      <van-tab title="标签 1">
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
import { Toast } from 'vant';

const active = ref(0);


const onClickLeft = () => history.back();
const onClickRight = () => Toast('按钮');

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
  // padding-top: 46px;
  width: 100vw;
}

.tab-title{
  display: flex;
  flex-direction: column;

  padding: 18px 0 ;
}

</style>
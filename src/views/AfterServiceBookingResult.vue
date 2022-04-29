<template>
  <div>
    <van-nav-bar 
        title="预约成功" 
        left-arrow  
        @click-left="onClickLeft" 
        @click-right="onRefresh" 
        v-if="props.isShowNavBar"
        />
    <div class="content">
      <van-image 
        width="162" 
        height="124" 
        :src="require('@/assets/images/icon_success.png')"
        />
      <div class="title">售后服务预约成功</div>
      <div class="message">我们会尽快为您安排，请保持手机畅通，耐心等待～</div>

    </div>
  </div>
</template>

<script setup>

import { 
    ref, 
    reactive, 
    getCurrentInstance, 
    watch, 
    computed, 
    defineProps 
    } from 'vue';

const props = defineProps({
    isShowNavBar: {
        type: Boolean,
        default: true
    }
})
</script>


<style scoped lang="scss">
  
.content{
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 60px;
}

.title{
  font-family: PingFangSC-Medium;
  font-size: 17px;
  color: #333333;
  letter-spacing: 0;
  line-height: 24px;
}


.message{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  letter-spacing: 0;
  line-height: 20px;
}
</style>
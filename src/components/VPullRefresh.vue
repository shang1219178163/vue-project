<template>
  <VNet
    class="vnet"
    :status="netStatus"
    :nodataMsg="nodataMsg"
    @click="onNet"
  >
    <van-pull-refresh
      class="h-van-pull-refresh" 
      v-model="modelValueRef" 
      @refresh="onRefresh"
      :disabled="disabled"
      :head-height="70"
      :pull-distance="70"
    >
      <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
      <template #pulling>
          <img class="logo" 
          :src="src"
          />
          <div>下拉刷新</div>
      </template>

      <!-- 释放提示 -->
      <template #loosing>
          <img class="logo" :src="src" />
          <div>松开刷新</div>
      </template>

      <!-- 加载提示 -->
      <template #loading>
          <img class="logo" :src="src" />
          <div>刷新中...</div>
      </template>
      <template #success>
          <img class="logo" :src="src" />
          <div>刷新完成</div>
      </template>
      <slot></slot>
    </van-pull-refresh>
  </VNet>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, computed, onMounted, watch} from 'vue';
// import { Toast } from 'vant;
import * as LOG from "@/utils/log.js";

const src = require('@/assets/images/img_pull_refresh.gif')

const props = defineProps({
  netStatus: {
    type: Number,
    default: 1,
    validator: (value) => {
        // console.log("netStatus", typeof value, value);
        return [-1, 0, 1].includes(value);
    }
  },  
  nodataMsg: {
    type: String,
    default: "暂无内容", //暂无数据，默认显示'暂无内容'
  },
  onNet: {
    type: Function,
    required: true,
  },
  
  modelValue: {
    type: Boolean,
    default: false,
  },
  onRefresh: {
    type: Function,
    required: true,
  },

})

const emit = defineEmits(['update:modelValue', "update:loading"])

const modelValueRef = computed({
  set: (newVal) => {
    if (props.modelValue !== newVal) {
      emit("update:modelValue", newVal);
    }
  },
  get: () => props.modelValue,
});

</script>


<style scoped lang='scss'>

.logo {
  width: 60px;
  height: auto;
  margin-top: 8px;
}

.pull-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__title {
    margin-top: -19px;
    font-size: 12px;
    color: #333333;
    font-family: PingFangSC-Regular;
    line-height: normal;
  }
}
</style>

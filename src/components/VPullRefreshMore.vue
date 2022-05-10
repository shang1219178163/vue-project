<template>
  <VNet
    class="vnet"
    :status="netStatus"
    nodataMsg="暂无内容"
    @click="onNet"
  >
    <van-pull-refresh
      class="van-pull-refresh" 
      v-model="modelValueRef" 
      :head-height="80" 
      @refresh="onRefresh"
      :disabled="!isScrollTop"
    >
      <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
      <template #pulling="props">
          <img class="logo" 
          :src="src"
              :style="{ transform: `scale(${props.distance / 80})` }"
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
      <van-list
        class="van-list"
        ref="listRef"
        v-model="loadingRef"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
          <!-- <template #loading>
              <img class="logo" :src="src" />
          </template> -->
        <slot></slot>
      </van-list>
    </van-pull-refresh>
  </VNet>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, computed, onMounted, watch} from 'vue';
// import { Toast } from 'vant;
import * as LOG from "@/utils/log.js";

const src = require('@/assets/images/img_pull_refresh.gif')


const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },    
    finished: {
        type: Boolean,
        default: false,
    },
    netStatus: {
        type: Number,
        default: 1,
    },
    netHeight: {
        type: String,
        default: "300px",
    },
    onRefresh: {
        type: Function,
        required: true,
    },
    onLoad: {
        type: Function,
        required: true,
    },
    onNet: {
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

const loadingRef = computed({
  set: (newVal) => {
    if (props.loading !== newVal) {
      emit("update:loading", newVal);
    }
  },
  get: () => props.loading,
});

const listRef = ref(null)
const isScrollTop = ref(true)

onMounted(() => {
  const e = listRef.value.$el;
  console.log("onMounted", e)
//   e.addEventListener("touchmove", (event) => {
//     isScrollTop.value = e.scrollTop;
//     console.log("onMounted touchmove", event)
//   });
//   e.addEventListener("touchend", (event) => {
//     isScrollTop.value = e.scrollTop;
//   });

    e.addEventListener("scroll", menu);
});


const menu = () => {
    let percent = 0;
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroll < 250) {
        percent = (scroll / 250);
    } else {
        percent = 1;
    }
    console.log("percent", percent);
}


</script>


<style scoped lang='scss'>

@mixin fillbox{
//   position: absolute;
//   background-color: #f6f6f6;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   overflow: auto;
}

.vnet{
    // width: 100%;
    height: v-bind(netHeight);
    // @include fillbox;
    overflow-y: auto;
}

// .van-pull-refresh{
//     width: 100%;
// }

.logo {
  width: 60px;
  height: 60px;
  margin-top: 8px;
  border-radius: 4px;

  border: 1px solid blue;
}

.van-pull-refresh{
    // width: 100vw;
}

.van-list{
    width: calc(100vw - 140px) ;
    height: 100%;

    overflow: scroll;
}

</style>
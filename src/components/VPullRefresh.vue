<template>
    <vnet
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
        >
            <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
            <template #pulling="props">
                <img class="doge"
                    :src="src"
                    :style="{ transform: `scale(${props.distance / 60})` }"
                />
            </template>
    
            <!-- 释放提示 -->
            <template #loosing>
                <img class="doge" :src="src" />
            </template>
    
            <!-- 加载提示 -->
            <template #loading>
                <img class="doge" :src="src" />
            </template>
            <van-list
                class="van-list"
                v-model:loading="loadingRef"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <template #loading>
                    <img class="doge" :src="src" />
                </template>
                <template #default>
                    <slot>
                    </slot>
                </template>
            </van-list>
        </van-pull-refresh>
    </vnet>
</template>


<script setup>
import { getCurrentInstance, defineProps, defineEmits, ref, reactive, computed, onMounted, watch} from 'vue';
// import { Toast } from 'vant;

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

</script>


<style scoped lang='scss'>

// .vnet{
//     width: 100vw;
// }

// .van-pull-refresh{
//     width: 100%;

// }

.doge {
  width: 60px;
  height: 60px;
  /* margin-top: 8px;
  border-radius: 4px; */
  backgroud-color: green;
  border: 1px solid blue;
}

.van-list{
    width: 100vw;
}

</style>
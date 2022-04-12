<template>
    <van-nav-bar class="navbar" title="售后服务" left-arrow @click-left="onClickLeft" isFixed />
    <van-tabs 
    :class="['van-tabs', {'top': !isWxmp && isShowNavBar }]" 
    v-model:active="active" 
    id="vanTabs"
    line-width="40"	
    line-height="3"
    sticky
    >
        <van-tab title="申请售后">
            <div v-for="(item, index) in 20" :key="index">
                {{ item }}
            </div>
        </van-tab>
        <van-tab title="售后中">
            <div v-for="(item, index) in 20" :key="index">
                {{ item }}
            </div>
        </van-tab>
        <van-tab title="售后完成">
             <div v-for="(item, index) in 20" :key="index">
                {{ item }}
            </div>
        </van-tab>
    </van-tabs>
</template>

<script setup>

import { ref, watch, getCurrentInstance, defineProps } from 'vue';
import { useStore } from 'vuex'
import { Toast } from 'vant';

defineProps({
    isShowNavBar: {
        type: Boolean,
        default: true
    }
})

const currentInstance = getCurrentInstance()
const { $uplus } = currentInstance.appContext.config.globalProperties

const store = useStore()
// console.log("useStore", store)
// console.log("userPhone", store.getters.userPhone)

const active = ref(0);

// watch(active, (newVal, oldVal) => {
//     if (!window.navigator.onLine) {
//         Toast("网络请求失败,请检查网络状态")
//         return
//     }  
// })

</script>


<style scoped lang="scss">

.van-tabs {
    position: fixed;
    overflow: hidden;
    width: 100%;
    // margin-top: 30px;
    // &.top{
    //     margin-top: 46px;
    // }
}

// </style>
// <style lang="scss">
#vanTabs .van-tabs__line {
    // bottom: 20px;
    background: linear-gradient(90deg, #FFC800 2%, rgba(255,200,0,0.00) 100%);
}
</style>
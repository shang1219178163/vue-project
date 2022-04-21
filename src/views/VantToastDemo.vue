<template>
    <div>
    <van-cell-group inset title="Toast用法">
        <van-cell 
            v-for="(e, index) in list" :key="index"
            :title="e.name" 
            :value="e.func"
            @click='this[e.func]()'
        />
    </van-cell-group>
    </div>
</template>


<script setup>
import {getCurrentInstance, ref, reactive, onMounted, watch, defineProps} from 'vue';
// import { Toast } from 'vant';

const instance = getCurrentInstance()
console.log(instance);
const { $toast: Toast, $log: LOG } = instance.appContext.config.globalProperties;


const list = reactive([
    {name: "文字提示", func: "onText", },
    {name: "加载提示", func: "onLoading", },

    {name: "成功提示", func: "onSuccess", },
    {name: "失败提示", func: "onFail", },

    {name: "自定义图标", func: "onIcon", },
    {name: "自定义图片", func: "onImg", },
    {name: "自定义加载图标", func: "onLoadingType", },

    {name: "顶部展示", func: "onTop", },
    {name: "底部展示", func: "onBom", },

    {name: "动态更新提示", func: "onDynamic", },

])

const onText = () => {
    Toast('网络不可用，请检查网络,网络不可用，请检查网络');

    setTimeout(() => {
        console.log("sadf");
    }, 1000);
}

const onLoading = () => {
    Toast.loading({
    message: '加载中...',
    forbidClick: true,
    });
}

const onSuccess = () => {
    Toast.success('成功文案');
}

const onFail = () => {
    Toast.fail('失败文案');
}

const onIcon = () => {
    Toast({
    message: '自定义图标',
    icon: 'like-o',
    });
}

const onImg = () => {
    Toast({
    message: '自定义图片',
    icon: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
    });
}

const onLoadingType = () => {
    Toast.loading({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner',
    });
}

// const rgbToHex = (r, g, b) =>   "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
const onTop = () => {
    Toast({
        message: '顶部展示',
        position: 'top',
    });
}

const onBom = () => {
    Toast({
        message: '底部展示',
        position: 'bottom',
    });
}


const onDynamic = () => {
    const toast = Toast.loading({
    duration: 0,
    forbidClick: true,
    message: '倒计时 3 秒',
    });

    let second = 3;
    const timer = setInterval(() => {
    second--;
    if (second) {
        toast.message = `倒计时 ${second} 秒`;
    } else {
        clearInterval(timer);
        Toast.clear();
    }
    }, 1000);
}


</script>


<style scoped lang='scss'>
.button{
    padding: 5px;
    margin: 8px;
}
</style>
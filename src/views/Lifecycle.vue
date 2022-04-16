<template>
    <div>
        <van-nav-bar
        title="生命周期"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        >
          <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
    </div>
</template>


<script setup>
import { 
    getCurrentInstance, ref, reactive, 
    onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onActivated, 
    onDeactivated, onBeforeUnmount, onUnmounted, onErrorCaptured
    } from 'vue';
import { Toast, Dialog } from 'vant';
import * as LOG from "@/utils/log.js";


onBeforeMount(() => {
    LOG.log("onBeforeMount")
});
//  – 在挂载开始之前被调用：相关的 render 函数首次被调用。

onMounted(() => {
    LOG.log("onMounted")
}); 
// – 组件挂载时调用

onBeforeUpdate(() => {
    LOG.log("onBeforeUpdate")
}); 
// – 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。

onUpdated(() => {
    LOG.log("onUpdated")
}); 
// – 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

onActivated(() => {
    LOG.log("onActivated")
}); 
// – 被 keep-alive 缓存的组件激活时调用。

onDeactivated(() => {
    LOG.log("onDeactivated")
}); 
// – 被 keep-alive 缓存的组件停用时调用。

onBeforeUnmount(() => {
    LOG.log("onBeforeUnmount")
}); 
// – 在卸载组件实例之前调用。在这个阶段，实例仍然是完全正常的。

onUnmounted(() => {
    LOG.log("onUnmounted")
}); 
// – 卸载组件实例后调用。调用此钩子时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载。

onErrorCaptured((err, instance, info) => {
    LOG.log("onErrorCaptured")
}); 
// – 当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。


const onClickLeft = () => history.back();
const onClickRight = () => Toast('按钮');


const handleRouteParams = () => {

};


const onRefresh = async () => {

};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>

</style>
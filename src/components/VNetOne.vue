<template>
    <div class="container">
        <img src="../assets/images/img_no_data.png" 
        @click="click" 
        :width="imgWidth" 
        :height="imgHeight" 
        />
        <div>{{nodataMsg}}</div>
    </div>
</template>


<script setup>
import { defineProps, defineExpose } from 'vue';

const props = defineProps({
    /// 页面状态 1 正常; 0 数据为空; 网络请求失败; 
    status: {
        type: [Number, String],
        default: 1
    },
    content: {
        type: String,
        default: "内容展示"
    },
    imgWidth: {
        type: String,
        default: "162px"
    },
    imgHeight: {
        type: String,
        default: "142px"
    },
    errorMsg: {
        type: String,
        default: "网络异常"
    },
    nodataMsg: {
        type: String,
        default: "暂无数据"
    },
})

const emit = defineExpose(["click"]);

const click = () => {
    emit("click", props.status)
}

</script>


<style scoped>

.container{
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
    background-color: red;
}
.error{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.nodata{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
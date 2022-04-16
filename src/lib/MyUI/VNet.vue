

<template>
     <div class="container">
        <div class="error" v-if="status===-1">
            <div class="item">
                <img src="@/assets/images/img_net_error.png" 
                :width="imageWidth" 
                :height="imageHeight" 
                @click="click" 
                />
                <div>{{errorMsg}}</div>
            </div>
        </div>
        <div class="nodata" v-else-if="status===0">
            <div class="item">
                <img src="@/assets/images/img_no_data.png" 
                :width="imageWidth" 
                :height="imageHeight" 
                @click="click" 
                />
                <div>{{nodataMsg}}</div>
            </div>
        </div>
        <div v-else>
            <slot>
                <div class="content" v-if="content">{{content}}</div>
            </slot>
        </div>
    </div>
</template>


<script setup>
import { ref, defineProps, defineEmits } from 'vue';


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
    imageWidth: {
        type: String,
        default: "162"
    },
    imageHeight: {
        type: String,
        default: "142"
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

const emit = defineEmits(["click"]);

const click = () => {
    emit("click", props.status)
    // alert(props.status)
}

</script>


<style scoped>

.container{
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
    /* background-color: red; */
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
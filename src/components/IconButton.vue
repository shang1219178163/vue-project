<template>
    <div class="content1">
        <div class="left">
            <slot name="left">
                <van-image 
                :src="require('@/assets/images/icon_district.png')" 
                width="18px" 
                height="18px" 
                />
            </slot>
        </div>
        <div>
            <slot>
                <span v-if="title">{{title}}</span>
            </slot>
        </div>
        <div class="right">
            <slot name="right">
                <van-image 
                :src="require('@/assets/images/icon_order_change.png')" 
                width="18px" 
                height="18px" 
                />
            </slot>
        </div>
    </div>
</template>


<script setup>
import { getCurrentInstance, defineProps, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;

defineProps({
    title: {
        type: String,
        default: "IconButton"
    },
})


const onRefresh = async () => {

};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>
.content1{
    display: flex;
    // flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    // height: 55px;
    background-color: green;
}

</style>
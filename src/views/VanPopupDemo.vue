<template lang="">
    <div>
        <van-nav-bar title="标题" left-arrow @click-left="onClickLeft" />
        <div class="tips">设置van-popup overlay 颜色必须使用 rgba 方法,不然会有视觉bug</div>
        <van-cell is-link @click="showPopup">展示弹出层</van-cell>
        <van-popup 
            v-model:show="show" 
            position="bottom" 
            :style="{ height: '55%', overflow: 'hidden' }"
            :overlay-style="{background: 'rgba(0,0,0,0.3)'}" 
            > 
          <!-- 这里是头部-->
            <van-nav-bar
                left-text="选择服务类型"
                class="dback-message"
                :placeholder="true"
                @click-left="onClickLeft"
            >
                <template #left>
                    <div>确定</div>
                </template>
            </van-nav-bar>
            <div class="dback-all" style="height:90%; overflow: auto;">
                    这是内容也是，滚动区域
            </div>
           <!-- 这里是底部  设置一下它的样式 positon:fixed; bottom:0-->
            <!-- <van-field
                v-model="backMessage"
                rows="1"
                :autosize= "{ maxHeight: 80, minHeight: 40 }"
                class="dtextarea"
                type="textarea"
                :placeholder="'你想说点什么...'"
                >
                <template #button>
                    <van-button type="info" @click="onBackSubmit(childTop.id)" class="backSecound">回复</van-button>
                </template>
            </van-field> -->
        </van-popup>
    </div>
</template>


<script setup>
import {getCurrentInstance, ref, reactive, onMounted, watch, defineProps} from 'vue';

const show = ref(false);
const showPopup = () => {
    show.value = true;
};


const userName = ref("?")
const backMessage = ref("回复啊啊啊")


const onClickLeft = () => {
    window.history.go(-1);
}

</script>


<style scoped lang='scss'>
.tips{
    padding: 8px 10px 8px 10px;
}
</style>
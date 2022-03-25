<template lang="">
    <div>
        <van-popup v-model="show" position="bottom" :style="{ height: '95%', overflow: 'hidden' }"> 
          <!-- 这里是头部-->
            <van-nav-bar
                title="全部回复"
                class="dback-message"
                :placeholder="true"
                @click-left="onClickLeft"
            >
            <template #left>
                <van-icon name="cross" size="18"/>
            </template>
            </van-nav-bar>
            <template>
                <div class="dback-all" style="height:90%; overflow: auto;">
                       这是内容也是，滚动区域
                </div>
            </template>
           <!-- 这里是底部  设置一下它的样式 positon:fixed; bottom:0-->
            <van-field
                v-model="backMessage"
                rows="1"
                :autosize= "{ maxHeight: 80, minHeight: 40 }"
                class="dtextarea"
                type="textarea"
                :placeholder="'你想对'+childTop.userName+'说点什么...'"
                >
                <template #button>
                    <van-button type="info" @click="onBackSubmit(childTop.id)" class="backSecound">回复</van-button>
                </template>
            </van-field>
        </van-popup>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
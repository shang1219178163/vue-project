<template>
    <van-nav-bar title="自定义指令" left-arrow  @click-left="onClickLeft"/>
    <h1># 自定义指令</h1>
    <!-- <p v-pin="200" v-randomcolor >Stick me 200px from the top of the page</p> -->
    <div v-font-size="'large'">ffff</div>
    <div v-font-size="'huge'">gggg</div>
    <input type="text" v-focus />
    <div v-demo="{ color: 'white', text: 'hello!' }">v-demo</div>
    <div v-demo="'zzz'" v-random-color>zzz_v-demo</div>
    <p v-random-color>Hello World</p>
    <p v-border-color>bordercolor</p>
    <div v-border-color>bordercolor1111</div>
    <h1># my-tab</h1>
    <my-tab
        :tabData="tabData"
        :initailIndex="initailIndex"
    >
    </my-tab>
</template>


<script setup>
import { ref, defineProps, getCurrentInstance } from 'vue';
import MyTab from '@/components/MyTab.vue';

const onClickLeft = () => history.back();

// const instance = getCurrentInstance();
// console.log(instance.type.__file);

const props = defineProps({
    tabData: {
        type: Array,
        // eslint-disable-next-line vue/require-valid-default-prop
        default: [
            { id: 1, title: "选项1", content: "内容1", },
            { id: 2, title: "选项2", content: "内容2", },
            { id: 3, title: "选项3", content: "内容3", },
            { id: 4, title: "选项4", content: "内容4", },
        ],
    },
    initailIndex: {
        type: [Number, String],
        default: 0
    }
})

</script>


<style lang="">
    
</style>
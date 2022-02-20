<template>
    <van-nav-bar title="自定义指令" left-arrow  @click-left="onClickLeft"/>
    <h1># 自定义指令</h1>
    <!-- <p v-pin="200" v-randomcolor >Stick me 200px from the top of the page</p> -->
    <!-- <div v-font-size="'large'">ffff</div>
    <div v-font-size="'huge'">gggg</div>
    <input type="text" v-focus />
    <div v-demo="{ color: 'white', text: 'hello!' }">v-demo</div>
    <div v-demo="'zzz'" v-random-color>zzz_v-demo</div>
    <p v-random-color>Hello World</p>
    <p v-border-color>bordercolor</p>
    <div v-border-color>bordercolor1111</div> -->
    <!-- <h1># my-tab</h1>
    <my-tab
        :tabData="tabData"
        :initailIndex="initailIndex"
    >
    </my-tab> -->
    <my-tab-select
        :items="items"
        :initailIndex="initailIndex"
        >
    </my-tab-select>
    <my-item-select
        :items="items"
        :initailIndex="initailIndex"
        >
    </my-item-select>
</template>


<script setup>
import { ref, defineProps, getCurrentInstance } from 'vue';
import MyTab from '@/components/MyTab.vue';
import MyTabSelect from '../components/MyTabSelect.vue';
import MyItemSelect from '../components/MyItemSelect.vue';


const onClickLeft = () => history.back();

// const instance = getCurrentInstance();
// console.log(instance.type.__file);

const props = defineProps({
    items: {
        type: Array,
        // eslint-disable-next-line vue/require-valid-default-prop
        default: [
            { id: 1, title: "选项1", content: "内容1", },
            { id: 2, title: "选项2", content: "内容2", },
            { id: 3, title: "选项3", content: "内容3", },
            { id: 4, title: "选项4", content: "内容4", },
            { id: 5, title: "选项5", content: "内容5", },
            { id: 6, title: "选项6", content: "内容6", },

        ],
    },
    initailIndex: {
        type: [Number, String],
        default: 1
    }
})

</script>


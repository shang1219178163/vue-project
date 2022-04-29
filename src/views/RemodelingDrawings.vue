<template>
    <div>

        <navbar isleftarrow=true navBarTitle="家装档案"></navbar>
        <van-nav-bar 
        title="装修图纸" 
        left-arrow 
        @click-left="onClickLeft"
        right-text="请求"  
        @click-right="getData" 
        v-if="props.isShowNavBar"
        />

        <van-cell v-for="e in list" :key="e.id" :title="e.name" is-link @click="goOriginHouserPictures(e)">
        </van-cell>

    </div>
</template>

<script setup>
import navbar from '@/components/navbar.vue'
import { ref, defineProps} from 'vue';
import router from '../router';


const props = defineProps({
    isShowNavBar: {
        type: Boolean,
        default: true
    }
})

const onClickLeft = () => history.back();

const active = ref(0);

const list = [               
    {name: "VR方案", urls: ["https://img.yzcdn.cn/vant/cat.jpeg", "https://img.yzcdn.cn/vant/cat.jpeg"], id: 0, type: false, desc:"",},
    {name: "合同", urls: ["https://img.yzcdn.cn/vant/cat.jpeg", "https://img.yzcdn.cn/vant/cat.jpeg"], id: 1, type: false, desc:"",},
    {name: "拆除墙体示意图", urls: ["https://img.yzcdn.cn/vant/cat.jpeg", "https://img.yzcdn.cn/vant/cat.jpeg"], id: 2, type: false, desc:"",},
    {name: "新建墙体示意图", urls: ["https://img.yzcdn.cn/vant/cat.jpeg", "https://img.yzcdn.cn/vant/cat.jpeg"], id: 3, type: false, desc:"",},
    {name: "给水排水位置图", urls: ["https://img.yzcdn.cn/vant/cat.jpeg", "https://img.yzcdn.cn/vant/cat.jpeg"], id: 4, type: false, desc:"",},
    {name: "强/电插座布置及开关位置图", urls: ["https://img.yzcdn.cn/vant/cat.jpeg", "https://img.yzcdn.cn/vant/cat.jpeg"], id: 5, type: false, desc:"",},
    {name: "照明控制及位置布置图", urls: ["https://img.yzcdn.cn/vant/cat.jpeg", "https://img.yzcdn.cn/vant/cat.jpeg"], id: 6, type: false, desc:"",},
]

const clickTab = () => {
    alert(active.value)
}

const getData = (v) => {
  console.log(v);
}
</script>


<style scoped>


</style>
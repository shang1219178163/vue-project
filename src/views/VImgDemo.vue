<template>
    <van-nav-bar title="导航标题" left-arrow @click-left="onClickLeft"/>
    <div class="container">
        <!-- <h1>vimg</h1> -->
        <vimg
        text="我标签" 
        align="bottomCenter"
        :src="require('@/assets/images/img_net_error.png')"
        :width="100"
        :height="200"
        @clickTag="clickTag"
        >
        </vimg>
    </div>
</template>


<script setup>
// import vimg from '@/components/VImg.vue';
// import vnetone from '@/components/VNetOne.vue';
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    location: {
        type: String,
        default: "leftTop"
    },
    iconWidth: {
        type: String,
        default: "162px"
    },
    iconHeight: {
        type: String,
        default: "142px"
    }
})


const api =  {
      name: 'qualityPictures',//获取用户中心应用级token
      method: 'POST',
      path: `/osyn/v1/warranty/desc/image/url`,
      mockPath: `/osyn/v1/warranty/desc/image/url`,
      params: {},
      desc: '授权图片查询接口',
      header: {},
      domainDev: "https://sybirdyz.haier.net", // 开发
      domainCheck: "https://sybirdyz.haier.net",// 验收
      domainProd: "https://sybirdyz.haier.net", // 生产
      code: "00000",
      isLog: true,
    }

console.log("aaa_", api["aaa"], "_");
console.log(`aaa_${undefined + ''}_`);

const clickTag = (e) => {
    console.log(e);
}

const a = "012345678910"
console.log(a.substring(0, 10));

let b;
// let b = a.split("")

console.log(">b", b);
const list = Array.isArray(b) ? b.filter(e => e == 2 ) : [];
console.log(">list", list);

</script>

<style scoped>

/* img{
    border: 1px solid red;
}
.container{
    border: 1px solid red;
}

.tag{
    position: absolute;

    width: 50px;
    height: 30px;
    background-color: red;
} */

.container{
    height: calc(100% - 46px);
    /* background-color: red; */

    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
}

/* vimg{
    height: calc(100% - 46px);
} */
</style>
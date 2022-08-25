<template>
  <div class="container">
    <navbar 
      v-if="hasNavBar" 
      isleftarrow 
      :navBarTitle="title" 
      isFixed 
    />
    <div :class="['content', {mp: !hasNavBar}]">
      <van-image
        class="h-van-image"
        v-for="(item, index) in list"
        :key="index"
        fit="contain"
        :src="item"
        v-lazy
      >
      <!-- <template #loading>
        <img :src="require('@/assets/images/img_underReview.png')" style="margin-top: 46px;" alt="">
      </template> -->
      </van-image>
    </div>
  </div>
</template>


<script setup>
import navbar from "@/components/navbar.vue";

import {getCurrentInstance, ref, reactive, onMounted, watch, computed} from "vue";


onMounted(() => {
  onRefresh();
});

const props = defineProps({
  isShowNavBar: {
    type: Boolean,
    default: true,
  },
});

const currentInstance = getCurrentInstance();
const { $platform, } = currentInstance.appContext.config.globalProperties;
// LOG.log(currentInstance.type.__file);


/// -1 请求失败; 0无数据; 1 正常,有数据;
let netStatus = ref(1);
let title = ref("图片展示");
// let list = reactive([
//   "https://haier-zjdz-private.oss-cn-qingdao.aliyuncs.com/userprofile/ccefad45db2d4f51b288621ba9e75a90.jpg?Expires=1962243060&OSSAccessKeyId=LTAI4GGZTDwKzRSVGaF16qz7&Signature=SbgWyFIoJwKQYVMZ4D0zvgTpbf8%3D",
//   "https://haier-zjdz-private.oss-cn-qingdao.aliyuncs.com/userprofile/ce9d970df66640a28c5cecf73900877e.jpg?Expires=1962243160&OSSAccessKeyId=LTAI4GGZTDwKzRSVGaF16qz7&Signature=yU%2FrJ3NIwSCU02PBhCwva6Aq05E%3D",
//   "https://haier-zjdz-private.oss-cn-qingdao.aliyuncs.com/userprofile/abb60749ae204e7c9f46720d7d74d2d1.jpg?Expires=1962243052&OSSAccessKeyId=LTAI4GGZTDwKzRSVGaF16qz7&Signature=jfgptJiEUBrgXFAydtqkg8CLyhs%3D",
//   "https://haier-zjdz-private.oss-cn-qingdao.aliyuncs.com/userprofile/37a4f18ee6dc4a7087753c55266070ff.jpg?Expires=1962243070&OSSAccessKeyId=LTAI4GGZTDwKzRSVGaF16qz7&Signature=EE%2Fa6s8h9XifFgoKXwsD%2B3LgVBk%3D",
//   "https://haier-zjdz-private.oss-cn-qingdao.aliyuncs.com/test/SYN2022030700017Mon%20Mar%2007%2011%3A27%3A42%20CST%202022/%E6%84%8F%E5%90%91%E9%87%91%E5%90%AB%E8%AE%BE%E8%AE%A1%E5%AE%9A%E9%87%91%E5%90%88%E5%90%8C_1.jpg?Expires=1962242862&OSSAccessKeyId=LTAI4GGZTDwKzRSVGaF16qz7&Signature=70GnanNAxZChJ7jTBeTWoRbMJRE%3D",
// ]);

let list = reactive([
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-5.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-6.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-7.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-8.jpeg',

]);

 


const hasNavBar = computed(() => {
  // return false;
  return !$platform.isWxmp && props.isShowNavBar;
});


const onRefresh = () => {
  
};

</script>


<style scoped lang="scss">

$spacing: 12px;

.container{
  height: inherit;
}

.content {
  position: relative;

  height: calc(100vh - 46px - $spacing * 2);
  background-color: green;
  background-color: #f6f6f6;

  padding: $spacing;

  top: 46px;

  &.mp {
    height: calc(100vh - $spacing * 2);
    top: 0;
  }
}

.h-van-image {
  margin-bottom: 8px;
  width: calc(100vw - $spacing * 2);
  // height: 20%;
}
.h-van-image :deep img{
  @include syn-box-shadow;
  border-radius: 8px;
}

</style>

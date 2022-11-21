<template>
  <navbar
    class="nav-bar"
    v-if="!isWxmp"
    navBarTitle="家装分期"
    isleftarrow
    closeWebview
    isFixed
  />
  <vnet
    class="vnet"
    :status="netStatus"
    :loading="loading"
    @click="clickVNet"
  >
    <div class="content-box">
      <img
        src="@/assets/images/img_installment_banner@3x.png"
        alt="加载中"
        class="ad-space_img"
        srcset=""
      />
      <div class="ad-space">
        <div class="apply-box">
          <div class="user">user</div>
          <div class="section-detail">
            <img 
              class="detail-img" 
              v-for="(img, i) in imageList" 
              :key="i" 
              :src="img"
            />
          </div>
        </div>
      </div>
    </div>
  </vnet>
</template>

<script setup>
import navbar from '@/components/navbar.vue';

import { getCurrentInstance, ref, reactive, onActivated} from 'vue';
import { Toast, Dialog } from 'vant';
import { useStore } from 'vuex';

import { useRoute } from 'vue-router';

import { CheckType } from "@/utils/validator"

const store = useStore();

const currentInstance = getCurrentInstance();
const { $uplus, $gio } = currentInstance.appContext.config.globalProperties;
// LOG.log(currentInstance.type.__file);

// const route = useRoute();
// 
// onActivated(() => {
//   $gio.track($gio.pages[route.name]);
//   // console.log('onActivated', route);
// });


const loading = ref(false);
const finished = ref(false);
// const refreshing = ref(false);

/// -1 请求失败; 0无数据; 1 正常列表,有数据;
let netStatus = ref(1);
const list = reactive([]);

const clickVNet = () => {
  onRefresh();
};

// 校验函数返回 true 表示校验通过，false 表示不通过
const validator = (val) => !/[^\u4e00-\u9fd5]/.test(val);

const userInfo = reactive({
  phone: store.getters.userPhone,
  name: '',
});

const onSubmit = (values) => {
  console.log('submit', values);

};

const imageList = reactive([
  // require('@/assets/images/img_no_data.png'),
  require('@/assets/images/introduce.jpg'),
]);

const gioTrack = async (eventId, variable = {}) => {

  console.log('>>> gioTrack:', eventId, variable);

  console.log('>>> gioTrack:', eventId, utility().isObj(variable));
  console.log('>>> gioTrack:', eventId, checkType(variable, "Object"));


};

gioTrack()
</script>



<style scoped lang="scss">

.vnet{
  position: relative;

  margin-top: 46px;
  // height: calc(100vh - 46px);

  // border-radius: 0.16rem;
  // @include syn-box-shadow;
}

.content-box {
  // margin-top: 46px;
  // height: calc(100vh - 46px);
  // margin-bottom: 20px;

  
  // overflow: scroll;
}

.ad-space {
  position: relative;

  background: green;

  &_img {
    width: 100vw;
    // height: 100vw;
  }
}

.apply-box {
  position: absolute;

  bottom: -3.3rem;

  left: 0.24rem;
  right: 0.24rem;
  background: #fff;

  border-radius: 0.16rem;

  // border: 1px solid blue;
}

.user{
  width: calc(100vw - 24px) ;
  height: 100vw;

  background: green;
}

.section-detail{
  margin: .24rem 0 .24rem 0;
  padding: 0px;
  border-radius: 0.16rem;

  @include syn-box-shadow;

  // border: 1px solid blue;
}

.detail-img {
  width: 100%;
  // height: auto;
  // display: inline-block;
  // border: 1px solid red;
}

// .detail-img:last-child{
//   margin-bottom: 46px;
// }

.dialog-close {
  position: absolute;
  top: 4px;
  right: 8px;
}
</style>

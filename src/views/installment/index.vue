<template>
  <navbar
    class="nav-bar"
    v-if="!isWxmp"
    navBarTitle="家装分期"
    isleftarrow
    closeWebview
    isFixed
  />
  <VNet
    class="vnet"
    :status="netStatus"
    :loading="loading"
    @click="clickVNet"
  >
    <div class="vnet-content">
      <img
        class="vnet-content_bg"
        src="@/assets/images/img_ocean.png"
        alt="加载中"
        srcset=""
      />
      <div class="vnet-content-sections">
        <ApplyBox
          class="vnet-content-sections_zero"
          v-model:name="userInfo.name"
          v-model:phone="userInfo.phone"
          isReadonlyPhone
          @submit="onSubmit"
        />
        <div class="vnet-content-sections-one">
          <img 
            class="vnet-content-sections-one_img" 
            v-for="img in imageList" 
            v-lazy="img" 
            :key="img" 
          />
        </div>
      </div>
    </div>
  </vnet>
</template>

<script setup>
import navbar from '@/components/navbar.vue';
import ApplyBox from '@/views/installment/components/ApplyBox.vue';

import { getCurrentInstance, ref, reactive, onActivated} from 'vue';
import { Toast, Dialog } from 'vant';
import { useStore } from 'vuex';
// import { NET_MSG_ERROR } from '@/service/request/apiMessage';

// import {
//   requestInstallmentDecoration,
// } from '@/service/api/modules/installment.js';

const store = useStore();

const currentInstance = getCurrentInstance();
const { $uplus, $gio, $vtoast } = currentInstance.appContext.config.globalProperties;
// LOG.log(currentInstance.type.__file);

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

  requestApplay({
    userAccount: userInfo.phone,
    nickName: userInfo.name,
  });
};

const imageList = reactive([
  // require('@/assets/images/img_no_data.png'),
  // require('@/assets/images/introduce.jpg'),
  require('@/assets/images/img_ocean.png'),
]);


const requestApplay = async (params = {userAccount, nickName}) => {
  // $gio.track($gio.events.BD20466.value);

  // console.log('userInfo.phone', userInfo.phone);
  // if (!$uplus.isOnline.value) {
  //   loading.value = false;
  //   // netStatus.value = -1;
  //   return Toast(NET_MSG_ERROR); 
  // }
  // try {
  //   $vtoast.loading({});
    
  //   loading.value = true;

  //   const res = await requestInstallmentDecoration(params);
  //   const title = '申请成功';
  //   const message = '工商银行工作人员将稍后联系您沟通方案，请保持电话畅通哦！';
  //   Dialog.alert({
  //     title: title,
  //     message: message,
  //   });

  //   $gio.track($gio.events.BD20467.value);
  // } catch (error) {
  //   const message = error.toString() || NET_MSG_ERROR;
  //   // netStatus.value = message.includes('暂无') ? 0 : -1;
  //   if (netStatus.value !== 0) {
  //     Toast(message);
  //   }
  // } finally {
  //   loading.value = false; // 加载状态结束
  //   finished.value = true; // 数据全部加载完成

  //   $vtoast.clear();
  // }
  // return undefined;
};

</script>

<style scoped lang="scss">

.nav-bar{
  z-index: 100;
}
.vnet{
  position: relative;

  margin-top: 46px;
}

.vnet-content {
  position: relative;
  overflow: scroll;

  // width: 100vw;
  // height: 100vh;
}

.vnet-content_bg{
  position: absolute;

  height: 55vh;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 0;
}

.vnet-content-sections {
  position: relative;
  // z-index: 1;

  margin-top: 24vh;

  padding-left: 0.24rem;
  padding-right: 0.24rem;
}

.vnet-content-sections_zero{
  border-radius: 0.16rem;

  @include syn-box-shadow;
}

.vnet-content-sections-one{
  margin: .24rem 0 .24rem 0;
  padding: 0px;
  border-radius: 0.16rem;

  // border: 1px solid blue;
}

.vnet-content-sections-one_img {
  width: 100%;

  border-radius: 0.16rem;
  margin: 0 0 0.24rem 0;

  @include syn-box-shadow;
}

.vnet-content-sections-one_img:last-child{
  margin: 0;
}
</style>

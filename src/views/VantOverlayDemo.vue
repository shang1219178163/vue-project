
<template>
  <div class='container'>
    <van-nav-bar title="人员清单" left-arrow  @click-left="onClickLeft"/>
    <!-- <van-button type="primary" text="显示遮罩层" @click="show = true" />
    <van-overlay :show="show" @click="show = false" /> -->
    <van-cell is-link title="Overlay" @click="show = true" />
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block" @click="click" >
          <div class="item item0">
            <div class="callphone">
              <!-- <img width="24" height="24" src="@/assets/images/icon_call_phone.png" /> -->
              <van-image :src="require('@/assets/images/icon_call_phone.png')" />
              <div>呼叫 188 8888 8888</div>
            </div>
          </div>
          <div class="item">取消</div>
        </div>
      </div>     
    </van-overlay>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Toast } from 'vant';

const onClickLeft = () => history.back();

const show = ref(false);

// const actions = [
//     { name: '选项一' },
//     { name: '选项二' },
//     { name: '选项三' },
// ];
// const onSelect = (item) => {
//     // 默认情况下点击选项时不会自动收起
//     // 可以通过 close-on-click-action 属性开启自动收起
//     show.value = false;
//     Toast(item.name);
// };
const click = () => {
    show.value = false;
    console.log("block");
    // Toast("block");
};
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: calc(100% - 16px);
  height: 126px;
  /* background-color: green; */

  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  align-self: flex-end;
  /* align-items: stretch; */
  justify-content: space-between;
}

.item{
  height: 58px;
  background-color: white;
  /* margin-top: 8px;
  margin-bottom: 8px; */

  border-radius: 12px;
  /* text-align: center; */
  font-size: 20px;
  color: #007aff;
  letter-spacing: 0;
  font-weight: 400;
  font-family: PingFangSC-Regular;

  /* 垂直水平居中 */
  display:flex;
  justify-content:center;
  align-items: center;
}

.item:first-child{
  /* padding-right: 50; */
  /* padding-left: -50px; */
  /* background-color: aquamarine; */
  padding-left: -50px;
}

.item:last-child{
  margin-top: 8px;
  font-weight: 600;
}

/* .item0{
  background-color: aquamarine;
  padding-right: 50;
  padding-left: -50;
} */

.van-image{
  width: 24px;
  height: 24px;
  padding-right: 13px;
  /* background-color: red; */
}

.callphone{
  display:flex;
  justify-content:center;
  align-items: center;

  width: auto;
  /* background-color: red; */
  margin-left: -30px;
}

</style>
<template>
  <navbar
    class="nav-bar"
    v-if="!isWxmp"
    navBarTitle="家装分期"
    isleftarrow
    closeWebview
    isFixed
  />
  <van-form
  class="h-van-form" 
  @submit="onSubmit"
  >
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
        v-field="/[^\u4E00-\u9FA5]/g"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>


<script setup>
import navbar from "@/components/navbar.vue";

import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;


const username = ref('');
const password = ref('');
const onSubmit = (values) => {
  console.log('submit', values);
};

</script>


<style scoped lang='scss'>
.h-van-form{
  margin-top: 46px;
}
</style>
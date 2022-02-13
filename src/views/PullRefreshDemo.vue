<template>
    <div>
        <!-- <van-nav-bar title="下拉刷新" left-arrow  @click-left="onClickLeft"/> -->
    <van-pull-refresh v-model="loading" @refresh="onRefresh" style="transition-duration: 300ms;
">
    <p>刷新次数: 22</p>
    </van-pull-refresh>
    </div>
</template>

<script>
// import { ref } from 'vue';
// import { Toast } from 'vant';

export default {
//   setup() {
//     const count = ref(0);
//     const loading = ref(false);

//     const onClickLeft = () => {
//       history.back();
//     }

//     const onRefresh = () => {
//       setTimeout(() => {
//         Toast('刷新成功');
//         loading.value = false;
//         count.value++;
//       }, 1000);
//     };

//     return {
//       count,
//       loading,
//       onClickLeft,
//       onRefresh,
//     };
//   },
  methods: {
    onRefresh() {
        console.log(111)
    //   setTimeout(() => {
    //     Toast('刷新成功');
    //     // loading.value = false;
    //     // count.value++;
    //   }, 1000);
    }
  }
};
</script>
<style lang="">
    
</style>
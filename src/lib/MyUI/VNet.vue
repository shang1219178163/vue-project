<template>
  <div class="container">
    <div class="item error" v-if="status === -1">
      <img 
        :src="errorSrc" 
        :width="imageWidth" 
        :height="imageHeight" 
        @click="click" 
      />
      <div class="msg">{{ errorMsg }}</div>
    </div>
    <div class="item nodata" v-else-if="status === 0">
      <img 
        :src="nodataSrc" 
        :width="imageWidth" 
        :height="imageHeight" 
        @click="click" 
      />
      <div class="msg">{{ nodataMsg }}</div>
    </div>
    <div class="normal" v-else>
      <slot>
          <div class="message" v-if="message">{{ message }}</div>
      </slot>
    </div>
  </div>
</template>


<script setup>
import { getCurrentInstance, watch } from 'vue';

const currentInstance = getCurrentInstance();
const { $vtoast } = currentInstance.appContext.config.globalProperties;
// console.log(currentInstance);

const props = defineProps({
  /// 页面状态 1 正常; 0 数据为空; -1 网络请求失败; 
  status: {
    type: Number,
    default: 1,
    validator: (value) => {
      console.log("netStatus", typeof value, value);
      return [-1, 0, 1].includes(value); 
    }
  },
  loading: {
    type: Boolean,
    default: false,
    desc: 'true 展示茶杯, false 隐藏茶杯',
  },
  message: {
    type: String,
    default: '', //
  },
  imageWidth: {
    type: String,
    default: "162"
  },
  imageHeight: {
    type: String,
    default: "142"
  },
  errorMsg: {
    type: String,
    default: "网络异常"
  },
  errorSrc: {
    type: String,
    default: require('@/assets/images/img_net_error.png') //
  },
  nodataMsg: {
    type: String,
    default: "暂无数据"
  },
  nodataSrc: {
    type: String,
    default: require('@/assets/images/img_no_data.png') //暂无数据
  },
})

const emit = defineEmits(["click"]);


watch(() => props.loading, (newValue, oldValue) => {
  // console.log('watch props.loading', newValue, oldValue);
  if (newValue) {
    $vtoast.loading({});
  } else {
    $vtoast.clear();
  }
});

const click = () => {
  emit('click', props.status);
};

</script>


<style scoped>

.container{
  width: 100%;
  /* height: 100%; */
  height: inherit;
  background-color: #F5F5F5;
  /* background-color: red; */
}
.item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.msg {
  font-size: .28rem;
  margin-left: .4rem;
  margin-right: .4rem;
  color: #666666;
}
</style>
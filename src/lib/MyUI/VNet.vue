

<template>
     <div class="container">
        <div class="item error" v-if="status===-1">
          <img 
            src="@/assets/images/img_net_error.png" 
            :width="imageWidth" 
            :height="imageHeight" 
            @click="click" 
          />
          <div class="msg">{{ errorMsg }}</div>
        </div>
        <div class="item nodata" v-else-if="status===0">
          <img 
            :src="nodataSrc"
            :width="imageWidth" 
            :height="imageHeight" 
            @click="click" 
          />
          <div class="msg">{{ nodataMsg }}</div>
        </div>
        <div v-else>
            <slot>
                <div class="content" v-if="content">{{content}}</div>
            </slot>
        </div>
    </div>
</template>


<script setup>
import { ref, defineProps, defineEmits } from 'vue';


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
    content: {
        type: String,
        default: "内容展示"
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

const click = () => {
    emit("click", props.status)
    // alert(props.status)
}

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
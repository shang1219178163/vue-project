<template>

  <div class="content">
    <div class="top">
        <after-service-evaluation-cell
            v-for="e in list"
            :key="e.uid"
            :headUrl="e.headUrl"
            :name="e.name"
            :tag="e.job"
            :experience="e.experience"
            :des="e.des"
            @click="callphone(e)"
            />
             
    </div>
    <div class="rate">
        <div class="text-center">售货评价</div>
        <van-rate
        class="van-rate"
        v-model="rate"
        :size="20"
        color="#ffd21e"
        void-icon="star"
        void-color="#eee"
        />
    </div>
    <!-- <van-cell-group inset> -->
    <van-field
        class="van-field"
        v-model="message"
        rows="2"
        autosize
        label=""
        label-width="0"	
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
    />
    <!-- </van-cell-group> -->

    <div class="bom">
      <div 
      class="button"
      @click="actionSubmit"
      >提交</div>
    </div>
  </div>
</template>


<script setup>

import { 
    ref, 
    reactive, 
    getCurrentInstance, 
    watch, 
    computed, 
    defineProps 
    } from 'vue';
import { Toast } from 'vant';
import AfterServiceEvaluationCell from '@/components/AfterServiceEvaluationCell.vue';
import { Dialog } from 'vant';

// eslint-disable-next-line no-undef
defineProps({
  headUrl: String,
  name: String,
  tag: String,
  experience: String,
  des: String,
  status: String,
})

// eslint-disable-next-line no-undef
defineEmits(
  ["click",]
)

const rate = ref(3);
const message = ref("asdfsadfasdf")

const list = reactive([
  {
    uid: 0,
    name: "厨房局改焕新",
    headUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
    job: "智慧场景",
    experience: "10年",
    phone: 16666666666,
    des: "我们是最棒的服务!",
  },
]);



const VanDialog = Dialog.Component;

const actionSubmit = () => {
    showAlertConfirm()
    // showAlertResult(false)
}

const showAlertResult = (val) => {
    const message = val === true ? '您已提交成功！' : '抱歉您提交失败！';
    Dialog.alert({
        title: '提示',
        message: message,
        }).then(() => {
        // on close
        });
}

const showAlertConfirm = (val) => {
    Dialog.confirm({
        title: '标题',
        message:
            '如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。',
        })
        .then(() => {
            // on confirm
        })
        .catch(() => {
            // on cancel
        });
}

</script>

<style scoped lang="scss">

$spacing: 10px;

@mixin line-limit-length {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

div {
  /* font-size: 12px; */
  text-align: left;
//   border: 0.3px solid blue; 
}

.content{
  // border: 0.3px solid blue; 
    background-color: white;
}

.text-center{
    @include flex-center;

}

.van-rate{
    margin-left: $spacing;
}

.rate{
    display: flex;
    flex-direction: row;
    margin-left: $spacing;
    margin-top: 20px;
    margin-bottom: 20px;
}

.van-field{
    width: calc(100% - $spacing*2) ;
    background-color: #F5F5F5;
    margin-left: $spacing;
}
.top {
  border-bottom: 1px solid #eeeeee;
}


.bom{
  display: flex;
  justify-content: flex-end;

  margin: $spacing $spacing $spacing;
}

.button{
  width: 100vw;
  height: 44px;
  background: #FFC800;
  border-radius: 22px;

  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #333333;
  letter-spacing: 0;
  line-height: 16px;

  @include flex-center;
}

</style>
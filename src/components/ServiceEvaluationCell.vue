<template>
  <div class="content">
    <div class="top">
      <div class="left">
        <van-image class="headUrl" :src="headUrl" fit="cover" radius="32ppx">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </div>
      <div class="mid">
        <div class="line0">
          <div class="font-bold"> {{ name }} </div>
          <div class="tag-job"> {{ tag }} </div>
        </div>
        <div class="line1" v-if="experience">
          <!-- <div>岗位:{{ job }}</div> -->
          <div v-if="experience">专属管家： {{ experience }}</div>
        </div>
        <div v-if="experience">服务状态： {{ experience }}</div>
        <div v-if="experience">申请原因： {{ experience }}</div>
      </div>
      <div class="right">
        <div>2020-11-11</div>
      </div>
    </div>
    <div class="bom" v-if="buttonTitlte">
      <div class="button" @click="$emit('click', buttonTitlte)">{{buttonTitlte}}</div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

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

</script>

<style scoped lang="scss">

$spacing: 8px;
$padding-left: 16px;
$padding-right: 8px;

$headImage: 52px;
$rightWidth: 70px;

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
  border: 0.3px solid blue; 
}

.content{
  // border: 0.3px solid blue; 


}

.top {
  display: flex;
  justify-content: space-between;
  /* margin: 0; */
  /* padding: 8px; */
  /* background-color: aquamarine; */
  // height: 68px;
  // border-bottom: 1px solid #eeeeee;

  background-color: #ffffff;
  // border-radius: 8px;

  margin: $spacing $spacing $spacing;
  padding: 16px $padding-right 16px $padding-left;

  background: rgba(255,255,255, 0.60);
  // box-shadow: inset -0.5px -0.5px 0px 0px rgba(0,0,0,0.15);
  // box-shadow: inset 0.5px 0.5px 0px 0px rgba(255,255,255,1);
  // box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.08);
  // border-radius: 8px;

  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #333333;
  letter-spacing: 0.08px;
  line-height: 20px;
  font-weight: 400;
}


.bom{
  display: flex;
  justify-content: flex-end;

  margin: $spacing $spacing $spacing;
}

.line0{
  display: flex;
  align-items: center;
}

.font-bold{
  font-family: PingFangSC-Medium;
  font-size: 10px;
  color: #666666;
  letter-spacing: 0;
  line-height: 20px;
  font-weight: 600;

  flex-shrink: 1;

  @include line-limit-length;
}

.tag-job{
  // background-image: linear-gradient(136deg, #005AAA 0%, #46A7F1 100%);
  // box-shadow: inset -0.5px -0.5px 0px 0px rgba(0,0,0,0.15);
  // border-radius: 3px;
  // color: #FFFFFF;

  background: #F5F5F5;
  border-radius: 4px;

  height: 14px;

  /* margin-left: 8px; */

  font-family: PingFangSC-Regular;
  font-size: 12px;
  font-weight: 400;

  letter-spacing: 0.05px;
  line-height: 10px;

  display: flex;
  align-self: center;
  flex-shrink: 0;

  // -webkit-transform: scale(0.7);
  font-size: 8px;

  padding: 5px 3px 2px;
  margin-left: 8px;

  @include line-limit-length;
}

.line1 {
  display: flex;
  justify-content: space-evenly;
  justify-content: flex-start;
}

.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.left {
  width: $headImage;
  height: 48px;
} 

.mid {
  width: calc(100vw - $spacing - $padding-left - $headImage - $spacing - $spacing - $rightWidth - $spacing - $spacing - 16px);

  padding: 0 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 200px; */
  flex-grow: 1;
}

.right {
  width: $rightWidth;
  display: flex;
  /* align-items: center; */
  align-self: flex-start;

  @include line-limit-length;

}


.headUrl{
  display: flex;
  align-self: flex-start;

  width: $headImage;
  height: $headImage;
  border-radius: 32px;

  /* border: 0.3px solid red; */
}

.des{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}


.button{
  width: 74px;
  height: 28px;
  background: #FFC800;
  border-radius: 14px;

  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #333333;
  letter-spacing: 0;
  line-height: 16px;

  @include flex-center;
}

</style>
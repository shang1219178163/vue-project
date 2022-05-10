<template>
  <div class="cell">
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
        <div class="tag-job"> {{ job }} </div>
      </div>
      <div class="line1" v-if="experience">
        <!-- <div>岗位:{{ job }}</div> -->
        <div v-if="experience">从业经验:  {{ experience }}</div>
      </div>
      <div class="des">服务宗旨:  {{ des }}</div>
    </div>
    <div class="right">
      <van-image 
      :src="require('@/assets/images/call_phone_circle.png')" 
      fit="fill" 
      class="img-callphone"
      @click="$emit('click', phone)"
       />
      <!-- <div class="right" @click="$emit('click', phone)">呼叫</div> -->
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

// eslint-disable-next-line no-undef
defineProps({
  headUrl: String,
  name: String,
  job: String,
  experience: String,
  phone: String,
  des: String,
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

$headImage: 48px;
$phoneImage: 42px;

@mixin line-limit-length {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


div {
  /* font-size: 12px; */
  text-align: left;
  // border: 0.3px solid blue; 
}

.cell {
  display: flex;
  justify-content: space-between;
  /* margin: 0; */
  /* padding: 8px; */
  /* background-color: aquamarine; */
  // height: 68px;
  border-bottom: 1px solid #eeeeee;

  background-color: #ffffff;
  border-radius: 8px;

  margin: $spacing $spacing $spacing;
  padding: 16px $padding-right 16px $padding-left;

  background: rgba(255,255,255, 0.60);
  box-shadow: inset -0.5px -0.5px 0px 0px rgba(0,0,0,0.15);
  box-shadow: inset 0.5px 0.5px 0px 0px rgba(255,255,255,1);
  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.08);
  border-radius: 8px;

  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #333333;
  letter-spacing: 0.08px;
  line-height: 20px;
  font-weight: 400;
}

.line0{
  display: flex;
  align-items: center;
}

.font-bold{
  font-family: PingFangSC-Semibold;
  font-size: 15px;
  color: #333333;
  letter-spacing: 0.1px;
  line-height: 20px;
  font-weight: 600;

  flex-shrink: 1;

  @include line-limit-length;
}

.tag-job{
  background-image: linear-gradient(136deg, #005AAA 0%, #46A7F1 100%);
  box-shadow: inset -0.5px -0.5px 0px 0px rgba(0,0,0,0.15);
  border-radius: 3px;
  color: #FFFFFF;

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
  width: calc(100vw - $spacing - $padding-left - $headImage - $spacing - $spacing - $phoneImage - $spacing - $spacing - 16px);

  padding: 0 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 200px; */
  flex-grow: 1;
}

.right {
  width: $phoneImage;
  display: flex;
  /* align-items: center; */
  align-self: flex-start;
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

.img-callphone{
  width: $phoneImage;
  height: $phoneImage;
}

</style>
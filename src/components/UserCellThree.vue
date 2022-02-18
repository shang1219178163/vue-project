<template>
  <div class="cell">
    <div class="left">
      <van-image class="headUrl" :src="headUrl" fit="contain">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </div>
    <div class="mid">
      <div>{{ name }}</div>
      <div class="flex-row">
        <div>岗位:{{ job }}</div>
        <div>从业经验:{{ experience }}</div>
      </div>
      <div>服务宗旨:{{ des }}</div>
    </div>
    <div class="right">
      <div class="right" @click="$emit('click', phone)">呼叫</div>
    </div>
  </div>
</template>


<script setup>
import { defineProps } from 'vue'

// eslint-disable-next-line no-undef
defineProps({
  headUrl: String,
  name: String,
  job: String,
  experience: String,
  phone: Number,
  des: String,
})

// eslint-disable-next-line no-undef
defineEmits(
  ["click",]
)


</script>

<!-- <script>
export default {
  name:'UserCellOne',
  props:{
      name:String,
      job:String,
      experience:String,
      phone:Number,
      des:String,}
}
</script> -->


<style scoped>
div {
  /* font-size: 12px; */
  text-align: left;
  /* border: 0.3px solid blue; */
}

ul,
ol {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  /* line-height: 35px; */
}

li {
  /* list-style: none; */
  border-bottom: 1px solid #eeeeee;
}

/* .container {
  font-size: 14px;
  margin: 0;
  padding: 0;
  background-color: yellow;
} */

.cell {
  display: flex;
  justify-content: space-between;
  /* margin: 0; */
  /* padding: 8px; */
  /* background-color: aquamarine; */
  height: 80px;
  border-bottom: 1px solid #eeeeee;

  background-color: #ffffff;
  border-radius: 8px;

  margin: 8px 8px 8px;

  background: rgba(255,255,255, 0.60);
  box-shadow: inset -0.5px -0.5px 0px 0px rgba(0,0,0,0.15);
  box-shadow: inset 0.5px 0.5px 0px 0px rgba(255,255,255,1);
  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.08);
  border-radius: 8px;
}

.flex-row {
  display: flex;
  justify-content: space-between;
}

.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.left {
  width: 48px;
  height: 48px;
  border: 1px solid red;
  display: flex;
  align-self: auto;
}

.mid {
  padding: 0 8px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 200px; */
  flex-grow: 1;
}

.right {
  display: flex;
  /* align-items: center; */
  align-self: flex-start;
}


.headUrl{
  display: flex;
  align-self: flex-start;

  width: 48px;
  height: 48px;
}

</style>
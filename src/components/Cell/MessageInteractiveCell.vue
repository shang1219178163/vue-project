<template>
  <div class="cell">
    <div class="cell-left">
      <!-- <div class="cell-left__stack">
        <van-image 
          class="cell-left__img" 
          :src="img_placeholder" 
          error-icon="img_placeholder"
          fit="cover" 
        >
          <template #loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>

        <img 
          class="cell-left__stack__positioned" 
          :src="icon_like_red_base64" 
        >
      </div> -->

      <VStack
        class="cell-left__stack" 
        bottom="0"
        right="0"
      >
        <van-image 
          :src="img_placeholder" 
          error-icon="img_placeholder"
          fit="cover" 
        >
          <template #loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>

        <template #positioned>
          <img 
            class="cell-left__stack_positioned" 
            :src="icon_like_red_base64" 
          >
        </template>
      </VStack>
    </div>
    <div class="cell-mid">
      <div class="cell-mid__row-one">
        <div class="cell-mid__row-one__title"> {{ name }} </div>
        <div class="cell-mid__row-one__tag"> {{ tag }} </div>
      </div>
      <div class="cell-mid__row-two" v-if="detailText">
        <div class="cell-mid__row-two__detailText"  v-if="detailText"> {{ detailText }}</div>
      </div>
    </div>
    <div class="cell-right">
      <van-image
        class="cell-right__img"
        :src="require('@/assets/images/icon_call_phone_circle.png')" 
        fit="fill" 
        @click="$emit('clickPhone', phone)"
       />
    </div>
  </div>
</template>


<script setup>

import { ref } from 'vue';

import img_placeholder from '@/assets/images/img_placeholder_activity_base64';
import icon_like_red_base64 from '@/assets/images/icon_like_red_base64';
import icon_evaluation_gold_base64 from '@/assets/images/icon_evaluation_gold_base64';

// eslint-disable-next-line no-undef
defineProps({
  imgUrl: {
    type: String,
  },
  name: {
    type: String,
    default: '如何搭建组件库的最小原型阅读完需',
  },
  tag: {
    type: String,
    default: '2022-10-13 08:08:56',
  },
  detailText: {
    type: String,
    default: '评论了你的“青岛海尔博物馆等你来打卡…”',
  },
  phone: {
    type: String,
  },
});

// eslint-disable-next-line no-undef
defineEmits(['clickPhone',]);

</script>


<style scoped lang="scss">

$spacing: 0.16px;
$padding-left: 16px;
$padding-right: 8px;

$leftImgWH: .88rem;
$rightImgWH: .88rem;

// div {
//    border: 0.3px solid blue; 
// }

.cell {  
  box-sizing: border-box; 

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #eeeeee;

  background-color: #ffffff;

  width: 100vw;
}

.cell-left {
  width: $leftImgWH;
  height: $leftImgWH;

  margin: 0 0.16rem 0 0.32rem;
  padding: 0;
} 

.cell-mid {
  width: calc(100vw - ($leftImgWH + 0.16rem + 0.32rem)*2);
  height: $leftImgWH;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  // flex-grow: 1;
  // flex-shrink: 1;
}

.cell-right {
  width: $rightImgWH;
  margin: 0 0.32rem 0 0.16rem;

  display: flex;
  align-items: center; 
}

.cell-left__img{
  display: flex;
  align-self: flex-start;

  width: $leftImgWH;
  height: $leftImgWH;
  border-radius: $leftImgWH * 0.5;

  // border: 0.3px solid red;
}

.cell-left__stack{
  display: flex;
  align-self: flex-start;

  width: $leftImgWH;
  height: $leftImgWH;
  border-radius: $leftImgWH * 0.5;

  border: 1px solid red;
}

.cell-left__stack_positioned{
  width: .32rem;
  height: .32rem;

  right: 0;
  bottom: 0;
}

.cell-mid__row-one{
  display: flex;
  align-items: center;
}

.cell-mid__row-one__title{
  font-family: PingFangSC-Semibold;
  font-size: 15px;
  color: #333333;
  letter-spacing: 0.1px;
  line-height: 20px;
  font-weight: 600;

  @include line-limit-length;
}

.cell-mid__row-one__tag{
  margin-left: 0.16px;

  font-family: PingFangSC-Regular;
  font-size: 10px;
  color: #999999;
  letter-spacing: 0;
  text-align: justify;
  line-height: 10px;
  font-weight: 400;

  flex-shrink: 0;

  @include line-limit-length;
}

.cell-mid__row-two {
  margin-top: $spacing;

  // display: flex;
}

.cell-mid__row-two__detailText{
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  letter-spacing: 0;
  text-align: justify;
  line-height: 12px;
  font-weight: 400;
}

.cell-mid__row-three{
  display: flex;
  justify-content: flex-start;

  &__title{
    flex-shrink: 0;
  }

  &__value{
    @include syn-text-ellipsis($row: 3);
  }
}

.cell-right__img{
  width: $rightImgWH;
  height: $rightImgWH;
}

</style>
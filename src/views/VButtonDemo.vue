<template>
  <div>
    <VButton 
      class="VButton" 
      @click="click"
    >默认样式
    </VButton>

    <VButton 
      class="VButton" 
      type="highlighted" 
      @click="click"
    >高亮样式
    </VButton>

    <VButton 
      class="VButton" 
      color="red" 
      @click="click"
    >红色默认
    </VButton>
    <VButton
      class="VButton"
      color="red"
      type="highlighted"
      @click="click"
    >红色高亮
    </VButton>

    <VButton 
      class="VButton" 
      disabled 
      @click="click"
    >默认不可点击态
    </VButton>

    <VButton 
      class="VButton" 
      type="highlighted" 
      disabled 
      @click="click"
    >高亮不可点击态
    </VButton>


    <VButton
      class="VButton"
      color="red"
      type="highlighted"
      classHighlighted="Highlightedone"
      @click="click"
    >自定义高亮样式
    </VButton>

    <VButton
      class="VButton"
      :isHighlighted="isHighlighted"
      @click="click"
    >
      点击切换样式
    </VButton>

    <VButtonIcon hasEnd> </VButtonIcon>

    <VButtonIcon hasEnd direction="column">
      <template #start>
        <van-image
          :src="require('@/assets/images/icon_district.png')"
          width="30px"
          height="30px"
        />
      </template>
      <template #end>
        <van-image
          :src="require('@/assets/images/icon_manager.png')"
          width="30px"
          height="30px"
        />
      </template>
    </VButtonIcon>

    <VStackText
      class="VStackText"
      text="我是标签"
      bottom="0px"
      left="0px"
      borderRadius="4px"
      backgroud="#BE965A"
    >
      <VButtonIcon class="VButtonIcon" hasEnd direction="column">
        <template #start>
          <van-image
            :src="require('@/assets/images/icon_district.png')"
            width="30px"
            height="30px"
          />
        </template>
      </VButtonIcon>
    </VStackText>
  </div>
</template>

<script setup>
import {ref, reactive, onMounted, watch} from "vue";

let isHighlighted = ref(false)


const click = (e) => {
  console.log(">>>", e.target);
  isHighlighted.value = !isHighlighted.value;
};
</script>

<style scoped lang="scss">

.VButton {
  margin: 8px;
  padding: 3px 5px;
}
// .VButton:hover{
//   color: green;
//   border: 1px solid green;
// }

.Highlightedone {
  color: blue;
  background: seagreen;
}
.VButtonIcon {
  width: 100px;
}
.VStackText {
  width: 100px;
  border: 1px solid red;
}
</style>

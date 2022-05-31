<template>
  <!-- <h1>Stack</h1> -->
  <div class="wrapper">
    <div class="wrapper-section0">
    wrapper-section0
    </div>
    <VStack
      class="wrapper-section2" 
      top="0px" 
      right="0px"
      borderRadius="4px 18px 4px 4px"
    >
      <div class="VStack-content">VStack-content</div>
      <template #tag>
        <div class="VStack-absolute">
          VStack-absolute
        </div>
      </template>
    </VStack>
    <VStackText
      class="wrapper-section3" 
      text="我是标签"
      bottom="0px" 
      left="0px"
      borderRadius="4px"
      backgroud="#BE965A"
    >
      <div class="VStackText-content">VStack-content</div>
    </VStackText>
    <VStackImg
      class="wrapper-section4" 
      top="10px" 
      width="30px"
      height="30px" 
      borderRadius="4px"
    >
      <div class="VStackText-content">VStack-content</div>
    </VStackImg>
    <div class="wrapper-section1">
    wrapper-section1
    </div>
  </div>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;
// import VStack from '@/components/VStack.vue';
// import VStackText from '@/components/VStackText.vue';
// import VStackImg from '@/components/VStackImg.vue';


onMounted(() => {
  onRefresh();
});

const props = defineProps({
  top: {
    type: String,
    default: "0px",
  },
  left: {
    type: String,
    default: "'0px'",
  },
  bottom: {
    type: String,
    default: undefined,
  },
  right: {
    type: String,
    default: undefined,
  },
  width: {
    type: String,
    default: "100px",
  },
  height: {
    type: String,
    default: "100px",
  },
  overflow: {
    type: String,
    default: "hidden",
  },
})

const onRefresh = async () => {

};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>

.wrapper{
  width: calc(100% - 30px);
  height: calc(100% - 30px);

  display: flex;
  flex-direction: column;

  padding: 15px;;
}

.wrapper-section0{
  flex-grow: 1;

  background: yellow;
}

.wrapper-section1{
  flex-grow: 1;

  background: yellowgreen;
}
.wrapper-section2{
  flex-grow: 1;

  background: lightblue;
}

.wrapper-section3{
  flex-grow: 1;

  background: purple;
}

.wrapper-section4{
  flex-grow: 1;

  background: green;
}


.VStack-content{
  height: 100%;
  width: 100%;

  border-radius: 4px 18px 4px 4px;
  background: cyan;
}

.VStack-absolute{
  background: orange;

  width: 100px;
  height: 35px;

  padding: 2px 3px;
}



</style>
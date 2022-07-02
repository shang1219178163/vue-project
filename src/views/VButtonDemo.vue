<template>
  <div>
    <VButton class="VButton" @click="click"> </VButton>
    <VButton class="VButton" type="highlighted" @click="click"> </VButton>

    <VButton class="VButton" disabled @click="click"> </VButton>
    <VButton class="VButton" type="highlighted" disabled @click="click"> </VButton>

    <VButton
      class="VButton"
      background="linear-gradient(90deg, #FFC800 2%, rgba(255,200,0,0.00) 100%)"
      :fontSize="'12px'"
      @click="click"
    >
      <div>asdfasdf</div>
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
import {
  ref,
  reactive,
  onMounted,
  watch,
} from "vue";
// import { Toast } from 'vant;
import { useRouter, useRoute } from "vue-router";
// import VButton from '@/components/VButton.vue';

const router = useRouter();
const route = useRoute();

onMounted(() => {
  onRefresh();
});

watch(
  () => route.params,
  (params, previousParams) => {
    if (Object.keys(params).length === 0) {
      return;
    }
    handleRouteParams();
  }
);

const handleRouteParams = () => {};

const onRefresh = async () => {};

const onMore = async () => {};

const click = (e) => {
  console.log(">>>", e.target);
};
</script>

<style scoped lang="scss">
// .VButton{
// margin: 20px;

// width: 80px;
// height: 36px;

// background-color: red;
// }

.VButton{
  margin: 8px;
  padding: 3px 5px;
}
.VButtonIcon{
  width: 100px;
}
.VStackText{
  width: 100px;
  border: 1px solid red;
}
</style>

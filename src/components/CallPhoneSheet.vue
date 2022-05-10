<template>
  <van-action-sheet
    cancel-text="取消"
    close-on-click-action
    @cancel="onCancel"
    safe-area-inset-bottom
  >
    <van-cell :title="phone" @click="clickThis(phone)">
      <template #icon>
        <img class="van-cell-icon" src="@/assets/logo.png" width="15" height="15" />
      </template>
    </van-cell>
  </van-action-sheet>
</template>

<script setup>
import { ref, reactive, computed, } from "vue";
import { Toast } from "vant";

const onCancel = () => Toast("取消");


const emit = defineEmits(["click", ])

const clickThis = (v) => {
  emit('click', v)
  // closeSheet();
}

// eslint-disable-next-line no-undef
defineProps({
  phone: String,
})

</script>

<style scoped>
.van-cell {
  font-size: 16px;
  font-weight: bolder;
  margin-top: 15px;
}
.van-cell-icon {
  /* border: 0.3px solid blue; */
  padding: 5px 18px 0;
}
</style>
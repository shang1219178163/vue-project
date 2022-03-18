<template>
  <div class="container">
    <van-overlay :show="props.show">
      <div class="wrapper" @click.stop>
        <transition name="goon" @after-leave="afterLeave">
          <div class="block" @click="click">
            <div class="item item0">
              <div class="callphone">
                <!-- <img width="24" height="24" src="../assets/images/call_phone.png" /> -->
                <van-image :src="require('../assets/images/call_phone.png')" />
                <div>呼叫 {{ props.phone || "-" }}</div>
              </div>
            </div>
            <div class="item" @click="cancell">取消</div>
          </div>
        </transition>
      </div>
    </van-overlay>
  </div>
</template>

<script setup>
import {ref, defineProps, defineEmits} from "vue";

// console.log("CallPhone.vue");

const props = defineProps({
  phone: {
    type: String,
    // default: undefined,
    required: true,
    validator: (val) => {
      return val != undefined && val != null;
    },
  },
  show: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const emit = defineEmits(["click", "cancell"]);

const click = () => {
  emit("click", props.phone);
};

const cancell = () => {
  emit("cancell");
};

const afterLeave = () => {
  console.log("afterLeave");
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: calc(100% - 16px);
  height: 126px;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  align-self: flex-end;
  /* align-items: stretch; */
  justify-content: space-between;

  background-color: yellow;
}

.item {
  height: 58px;
  background-color: white;
  /* margin-top: 8px;
  margin-bottom: 8px; */

  border-radius: 12px;
  /* text-align: center; */
  font-size: 20px;
  color: #007aff;
  letter-spacing: 0;
  font-weight: 400;
  font-family: PingFangSC-Regular;

  /* 垂直水平居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.item:first-child {
  /* padding-right: 50; */
  /* padding-left: -50px; */
  /* background-color: aquamarine; */
  padding-left: -50px;
}

.item:last-child {
  margin-top: 8px;
  font-weight: 600;
}

/* .item0{
  background-color: aquamarine;
  padding-right: 50;
  padding-left: -50;
} */

.van-image {
  width: 24px;
  height: 24px;
  padding-right: 13px;
  /* background-color: red; */
}

.callphone {
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  /* background-color: red; */
  margin-left: -30px;
}

.goon-enter-active,
.goon-leave-active {
  transition: all 0.8s ease;
}

.goon-enter,
.goon-leave-to {
  /* opacity: 0; */
  transform: translateY(100%);
}
</style>

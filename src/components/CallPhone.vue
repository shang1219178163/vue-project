
<template>
  <div class='container'>
    <van-overlay :show="show">
     <!-- <transition @after-leave="afterLeave"> -->
        <div class="wrapper" @click.stop>
            <div class="block" @click="click" >
                <div class="item item0">
                    <div class="callphone">
                    <van-image :src="require('@/assets/images/icon_call_phone.png')" />
                    <div>呼叫 {{ props.phone || '-' }}</div>
                    </div>
                </div>
                <div class="item" @click.stop="cancell">取消</div>
            </div>
        </div>
     <!-- </transition> -->
    </van-overlay>
  </div>
</template>

<script setup>

const props = defineProps({
    phone: {
        type: String,
        // default: undefined,
        required: true,
        validator: (val) => {
          return val !== undefined && val !== null;
        }
    },
    show: {
        type: Boolean,
        required: true,
        default: false,
    }
});

const emit = defineEmits(['click', "cancell"]);

const click = () => {
    emit("click", props.phone);
};

const cancell = () => {
    emit("cancell");
};

// const afterLeave = () => {
//     console.log("afterLeave");
// };


</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  z-index: 9999;
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
}

.item{
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
  display:flex;
  justify-content:center;
  align-items: center;
}

.item:first-child{
  /* padding-right: 50; */
  /* padding-left: -50px; */
  /* background-color: aquamarine; */
  padding-left: -50px;
}

.item:last-child{
  margin-top: 8px;
  font-weight: 600;
}

/* .item0{
  background-color: aquamarine;
  padding-right: 50;
  padding-left: -50;
} */

.van-image{
  width: 24px;
  height: 24px;
  padding-right: 13px;
  /* background-color: red; */
}

.callphone{
  display:flex;
  justify-content:center;
  align-items: center;

  width: auto;
  /* background-color: red; */
  margin-left: -30px;
}

</style>

<template>
  <!-- <div class='container'> -->
    <transition @after-leave="afterLeave">
    <!-- <van-overlay :show="props.show"> -->
      <div class="overlay" v-if="props.show" @click="dismiss">
        <div class="wrapper">
            <div class="block">
                <div class="item item0" @click.stop="click" >
                    <div class="callphone">
                    <!-- <img width="24" height="24" src="@/assets/images/callPhone.png" /> -->
                    <van-image :src="require('@/assets/images/call_phone.png')" />
                    <div>呼叫 {{ props.phone || '-' }}</div>
                    </div>
                </div>
                <div class="item" @click.stop="cancell">取消</div>
            </div>
        </div>
      </div>
    <!-- </van-overlay> -->
  </transition>
  <!-- </div> -->
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';

// console.log("CallPhone.vue");
const instance = getCurrentInstance()
console.log(`**************${instance.type.__file}**************`);

const props = defineProps({
    phone: {
        type: String,
        default: undefined
    },
    show: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(["dismiss", 'click', "cancell"])


const dismiss = () => {
    emit("dismiss")
}

const click = () => {
    emit("click", props.phone)
};

const cancell = () => {
    emit("cancell")
};

const afterLeave = () => {
    console.log("afterLeave");
};


</script>


<style scoped>
.overlay{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10600;
}

/* .wrapper{
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 11000;
  width: 100%;
  transform: translate3d(0,0,0);
} */
.wrapper {
  /* display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; */
  z-index: 11000;
}

.block{
  /* position: absolute;
  left: 10;
  bottom: 0;
  z-index: 11000;
  width: 100%;
  transform: translate3d(0,0,0); */

  width: calc(100% - 16px);
  height: 126px;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  align-self: flex-end;
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


.overlay.v-enter{
  opacity: 0;
}
.overlay.v-enter-active{
  transition: opacity .4s;
}
.overlay.v-leave-active{
  opacity: 0;
  transition: opacity .4s;
}
.overlay *{
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

.block.v-enter-active, .block.v-leave-active {
  transition: all .3s ease;
}
.block.v-enter, .block.v-leave-to{
  transform: translateY(100%);
}

</style>
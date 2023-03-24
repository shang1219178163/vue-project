<template>
  <div class="box">
    <van-form 
      :show-error-message="false"
    >
      <van-cell-group inset>
        <van-field
          class="input-box"
          v-model="phoneVal"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :readonly="isReadonlyPhone"
        />
        <van-field
          class="input-box"
          autocomplete="off"
          v-model="nameVal"
          name="姓名"
          label="真实姓名"
          placeholder="请输入您的姓名"
          :readonly="isReadonlyName"
          :rules="[{required: true, message: '请输入您的姓名', validator: validatorHanzi}]"
          :formatter="formatterHanzi"
        />
      </van-cell-group>
      <van-checkbox
        v-if="prompt"
        class="h-van-checkbox" 
        v-model="checked" 
      >
      {{prompt}}
      </van-checkbox>
      <van-button
        class="h-van-button"  
        round 
        block 
        type="primary" 
        :disabled="!name"
        @click="submit"
      >
        立即申请
      </van-button>
    </van-form>
  </div>
</template>


<script setup>
import { ref, computed, watchEffect} from 'vue';
import { Toast } from 'vant';

const props = defineProps({
  phone: {
    type: String,
    default: '',
    validator: (val) => {
      return val.trim !== '';
    }
  },
  name: {
    type: String,
    default: '',
    validator: (val) => {
      return val.trim !== '';
    }
  },
  isReadonlyPhone: {
    type: Boolean,
    default: false,
  },
  isReadonlyName: {
    type: Boolean,
    default: false,
  },
  // checked: {
  //   type: Boolean,
  //   default: false,
  // },
  prompt: {
    type: String,
    default: '您知晓并同意，在您点击申请后，平台会将您的姓名、手机号码发送给银行方，以便银行与您取得联系并为您提供相关服务。',
  },
  // onSubmit: {
  //   type: Function,
  // },
});

const emit = defineEmits(['update:phone', 'update:name', 'update:checked', 'submit']);

const phoneVal = computed({
  set: (newVal) => {
    if (phoneVal.value !== newVal) {
      emit('update:phone', newVal);
    }
  },
  get: () => props.phone,
});

const nameVal = computed({
  set: (newVal) => {
    if (nameVal.value !== newVal) {
      emit('update:name', newVal);
    }
  },
  get: () => props.name,
});

const checked = ref(false);

// const checkedVal = computed({
//   set: (newVal) => {
//     if (checkedVal.value !== newVal) {
//       emit('update:checked', newVal);
//     }
//   },
//   get: () => props.checked,
// });

const submit = () => {
  console.log(`nameVal_${nameVal.value}_`);
  if (!nameVal.value) {
    Toast('请输入您的姓名'); 
    return;
  }
  
  console.log(`checked_${checked.value}_`);
  if (!checked.value) {
    Toast('请阅读并同意申请须知'); 
    return;
  }

  emit('submit');
};


const validatorHanzi = (val) => !/[^\u4e00-\u9fd5]/.test(val);

const formatterHanzi = (value) => {
  const reg = /[^\u4E00-\u9FA5]/g;

  // console.log("formatterHanzi", value.replace(reg, ''));
  return value.replace(reg, '');
};

// watchEffect(() => console.log(nameVal.value));

</script>


<style scoped lang='scss'>

.box {
  padding: .32rem .24rem;
}

.input-box {
  margin-top: 0.16rem;

  border-radius: 0.08rem;
  height: 0.88rem;
  background: #F5F5F5;

  font-family: PingFangSC-Medium;
  font-size: 0.3rem;
  letter-spacing: 0;
  font-weight: 500;
}

.van-field:first-child{
  margin-top: 0;
}

.h-van-checkbox{
  margin: .24rem 0 0 0;
}

.h-van-button{
  margin: .24rem 0 0 0;
}

.van-form :deep .van-cell-group--inset{
  margin: 0;
}

.van-form :deep .van-checkbox__label{
  color: #666666;
  line-height: 14px;
}


.van-form :deep .van-button__text{
  font-weight: 500;
}

</style>
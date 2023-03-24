<template>
  <div class="box">
    <input type="button" value="-" @click="sub" />
    <span>{{ aCount }}</span>
    <input type="button" value="+" @click="add" />
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, getCurrentInstance } from "vue";

const props = defineProps({
  step: {
    type: Number,
    default: 1,
  },
  count: {
    type: Number,
    default: 9,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  obj: {
    type: Object,
  },
  num: {
    type: Boolean,
    default: false,
  },
});

// eslint-disable-next-line no-undef
const emit = defineEmits(["add", "sub", "change", "min", "max"]);

// const instance = getCurrentInstance()
// console.log(instance.type.__file, instance) ;

const aCount = ref(props.count);

const go = (val) => {
  // console.log(parseInt(val));

  const aValue = aCount.value + parseInt(val);
  if (aValue > props.max) {
    emit("max", props.max);
    return;
  }

  if (aValue < props.min) {
    emit("min", props.min);
    return;
  }
  aCount.value = aValue;
  // console.log("aCount", aCount.value);

  emit("change", aCount.value, props.obj);
  if (val > 0) {
    emit("add", val, props.obj);
  } else {
    emit("sub", val, props.obj);
  }
};

const add = () => {
  go(props.step);
};

const sub = () => {
  go(-props.step);
};

// const a88 = ref("aa")
// const b88 = ref(true)
// defineExpose({
//   a88,b88
// })

watch(() => props.num, (newValue, oldValue) => {
  console.log('watch props.num__1', newValue, oldValue);

});

// watch(() => props.num, (newValue, oldValue) => {
//   console.log('watch props.num', newValue, oldValue);

// }, { deep: true });

</script>

<style scoped>
.box {
  width: 100px;
  margin: auto;
  padding: 8px;
}

span {
  padding: 0px 5px 0px;
}
</style>

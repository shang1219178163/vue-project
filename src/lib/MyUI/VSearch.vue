<template>
  <div class="vsearch">
    <slot name="input">
      <input 
        class="vsearch-input"
        :placeholder="placeholder" 
        :value='text'
      />
    </slot>
    <div class="vsearch-list">
      <slot name="option">
        <div 
          class="vsearch-list-cell"
          v-for="(item, index) in props.options" :key="index"
          @click="onSelect(item, index)"
        >{{ item.text }}
       </div>
      </slot>
    </div>
  </div>
</template>


<script setup>
import { ref, reactive, computed, watch, onMounted, } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '请输入查询条件',
  },
  options: {
    type: Array,
    required: true,
    default: () => [],
    validator: (val) => {
      return val.every(e => Object.keys(e).includes('text'));
    }
  },
  onSelect: {
    type: Function,
  },
  onChange: {
    type: Function,
  },
  borderWidth: {
    type: String,
    default: '0.5px',
  },
  borderColor: {
    type: String,
    default: '#4e4e4e',
  },
  optionPadding: {
    type: String,
    default: '12px',
  },
});


// const emits = defineEmits(['update:text', ]);
// const textVal = computed({
//   set: (newVal) => {
//     if (showVal.value !== newVal) {
//       emits('update:text', newVal);
//     }
//   },
//   get: () => props.text,
// });


const selectValue = ref('');

watch(() => selectValue.value, (newValue, oldValue) => {
  console.log('watch', newValue, oldValue);
});

// watch(() => props.text, (newValue, oldValue) => {
//   console.log('watch', newValue, oldValue);

//   isExpand.value = !isExpand.value;
// });
</script>


<style scoped lang='scss'>

$padding: 12px;

$borderWidth: v-bind(borderWidth);
$borderColor: v-bind(borderColor);
$optionPadding: v-bind(optionPadding);

.vsearch {
  border-radius: 4px;
  background-color: #fff;
  
  display: flex;
  flex-direction: column;
  overflow: auto;

  border: $borderWidth solid $borderColor;
}
.vsearch .vsearch-input {
  padding: 12px;
  width: 100%;

  border: none;
  outline: none;
  font-size: 14px;
}

.vsearch-list {
  position: absolute;
  margin-top: 24px + 20px;
  width: 100%;

  overflow: auto;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  max-height: 0px;
  overflow: hidden;
}

// .vsearch:focus-within .vsearch-list, .vsearch-list:hover {
.vsearch:focus-within .vsearch-list {
  max-height: 50vh;
  transition: max-height 1s ease-in-out;

  width: calc(100% - $borderWidth * 2);
  border: $borderWidth solid $borderColor;

  overflow: auto;
}

// .vsearch-list:hover {
//   max-height: 50vh;
//   overflow: auto;
// }
.vsearch-list-cell{  
  padding: $optionPadding;

  display: flex;
  align-items: center;
}
</style>
<template>
  <div class="vsearch">
    <slot name="header">
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
import { ref, reactive, computed, onMounted, } from 'vue';

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
  }
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


</script>


<style scoped lang='scss'>

.vsearch {
  position: absolute;
  padding: 12px 0px 0px 0px;
  width: 300px;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: auto;

  border: 0.5px solid #4e4e4e;
}
.vsearch .vsearch-input {
  margin: 0px 12px 12px 12px;
  width: calc(100% - 28px);
  border: none;
  outline: none;
  font-size: 14px;
}

.vsearch-list {
  padding-left: 12px;
  overflow: auto;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  max-height: 0px;
  overflow: hidden;
}

.vsearch:focus-within .vsearch-list, .vsearch-list:hover {
  max-height: 200vh;
  transition: max-height 1s ease-in-out;
}
.vsearch-list:hover {
  max-height: 50vh;
  overflow: auto;
}

.vsearch-list-cell{
  height: 30px;
}
</style>
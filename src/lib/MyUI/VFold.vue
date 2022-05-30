<template>
  <div class="fold__item" >
    <div class="fold__header" @click="clickHeader">
      <slot name="header">
        <div :class="['fold__toggle', isFoldRef === true ? 'arrow_bottom' : 'arrow_right']"
          v-if="arrowPosition === 'leading'"
        ></div>
        <div class="fold__title">{{title}}</div>
        <div :class="['fold__toggle', isFoldRef === true ? 'arrow_bottom' : 'arrow_right']"
          v-if="arrowPosition === 'tailing'"
        ></div>
      </slot>
    </div>
    <div class="fold__content" v-if="isFoldRef">
      <slot name="content">
        fold content
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, } from "vue";

const props = defineProps({
  arrowPosition: {
    type: String,
    default: 'leading',
    validator: (value) => {
      return ['leading', 'tailing', 'none'].includes(value); 
    }
  },
  arrowColor: {
    type: String,
    default: '#ff7f0b',
  },
  isFold: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: '-',
  },
  headerPadding: {
    type: String,
    default: '16px 12px',
  },
  contentPadding: {
    type: String,
    default: '16px 12px',
  },
  dividerColor: {
    type: String,
    default: '#e4e4e4',
  },
});


const isFoldRef = ref(props.isFold);

const clickHeader = () => {
  isFoldRef.value = !isFoldRef.value;
};

</script>

<style scoped lang="scss">
// .fold {
//   /* Border */
//   // border: 1px solid #e4e4d4;
//   border-bottom-color: transparent;
//   border-radius: 4px;
// }

.fold__item {
  border-bottom: 1px solid v-bind(dividerColor);
}

.fold__header {
  /* Center the content horizontally */
  align-items: center;
  display: flex;

  cursor: pointer;
  padding: v-bind(headerPadding);
}

.fold__toggle {
  margin-right: 12px;

  &.arrow_right {
    @include triangle($size: 8px, $color: v-bind(arrowColor), $deg: 90deg);
  }

  &.arrow_bottom {
    @include triangle($size: 8px, $color: v-bind(arrowColor), $deg: 180deg);
  }
}

.fold__title {
  /* Take remaining width */
  flex: 1;
}

.fold__content {
  // display: none;

  border-top: 1px solid v-bind(dividerColor);
  padding: v-bind(contentPadding);
}

.fold__content--selected {
  /* For selected item */
  display: block;
}

</style>

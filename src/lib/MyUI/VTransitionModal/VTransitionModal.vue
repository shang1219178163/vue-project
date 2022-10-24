<template>
  <Teleport to="body">
    <Transition name="modal">
      <div 
        v-if="showVal" 
        :class="['modal-mask', showMask ? '' : 'hide']"
        @click="closeMask"
      >
        <div class="modal-wrapper">
          <slot>
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">default header</slot>
              </div>
              <div class="modal-body">
                <slot name="body">default body</slot>
              </div>
              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button
                    class="modal-default-button"
                    @click="close"
                  >OK</button>
                </slot>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  show: Boolean,
  showMask: {
    type: Boolean,
    default: true,
  },
  maskCloseable: {
    type: Boolean,
    default: false,
  },
  // maskbg: {
  //   type: String,
  //   default: 'rgba(0, 0, 0, 0.3)',
  // },
  verticalAlign: {
    type: String,
    default: 'middle',
  },
});


const showVal = computed({
  set: (newVal) => {
    if (props.show !== newVal) {
      emit('update:show', newVal);
    }
  },
  get: () => props.show,
});

const emit = defineEmits(['update:show', "close"]);


const close = () => {
  showVal.value = false;
  emit('close');
};

const closeMask = () => {
  if (!props.maskCloseable) {
    return;
  }
  close();
};

</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: table;
  transition: opacity 0.3s ease;

  &.hide{
    background-color: transparent;
  }
}

.modal-wrapper {
  display: table-cell;
  // vertical-align: middle;
  vertical-align: v-bind(verticalAlign);
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * 对于 transition="modal" 的元素来说
 * 当通过 Vue.js 切换它们的可见性时
 * 以下样式会被自动应用。
 *
 * 你可以简单地通过编辑这些样式
 * 来体验该模态框的过渡效果。
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);

  // transform: translate(0, 100%);
}
</style>
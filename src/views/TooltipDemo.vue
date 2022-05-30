<template>
  <div class="container">
    <!-- The tooltip content -->
    <div class="container__content">提示信息</div>

    <!-- The tooltip arrow -->
    <div class="container__arrow" />

    <!-- The trigger element -->
    ...
  </div>
</template>

<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted } from "vue";
// import { Toast } from 'vant;
</script>

<style scoped lang="scss">
.container {
  /* Used to position the arrow */
  position: relative;

margin: 50px;
  border: 1px solid blue;
}

/* Show the arrow and content and restore pointer events when hovering the trigger element */
.container:hover .container__arrow,
.container:hover .container__content {
  opacity: 1;
  pointer-events: initial;
}

.container__arrow {
  /* Invisible by default */
  opacity: 0;

  /* To prevent accidental interactions with other elements  */
  pointer-events: none;

  /* Border */
  border: 8px solid transparent;
  border-top-color: #00439e;

  /* Position */
  bottom: 100%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, 8px);

  /* Zero size */
  height: 0;
  width: 0;

  /* Displayed on top of other element */
  z-index: 10;
}

.container__content {
  /* Invisible by default */
  opacity: 0;

  /* To prevent accidental interactions with other elements  */
  pointer-events: none;

  /* Background color, must be the same as the border color of arrow */
  background-color: green;
  border-radius: 2px;

  /* Position */
  bottom: 100%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -8px);

  /* Displayed on top of other element */
  z-index: 10;

  padding: 3px 5px;
}
</style>

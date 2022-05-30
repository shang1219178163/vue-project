<template>
  <div>
    <h1>css 箭头</h1>
    <p class="button__arrow--top"></p>
    <p class="button__arrow--right"></p>
    <p class="button__arrow--bottom"></p>
    <p class="button__arrow--left"></p>

    <div style="border: 0.3px solid #e4e4e4"></div>
    <h1>button__arrow </h1>
    <!-- arrow button -->
    <button class="button">
        top
        <div class="button__arrow--top"></div>
    </button>

    <!-- Right arrow button -->
    <button class="button">
        right
        <div class="button__arrow--right"></div>
    </button>

    <!-- Down arrow button -->
    <button class="button">
        <div class="button__arrow--bottom"></div>
        bottom
    </button>

    <!-- Left arrow button -->
    <button class="button">
        <div class="button__arrow--left"></div>
        left
    </button>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">

.button {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    gap: 8px;
    /* Spacing */
    padding: 8px;
}
.button__arrow--top {
  @include arrowTop;
}

.button__arrow--right {
  @include arrowRight;
}

.button__arrow--bottom {
  @include arrowBottom;
}

.button__arrow--left {
  @include arrowLeft;
}

</style>

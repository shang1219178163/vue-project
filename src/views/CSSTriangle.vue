<template>
  <div>
    <p class="arrow_top"></p>
    <br />
    <p class="arrow_right"></p>
    <br />
    <p class="arrow_bottom"></p>
    <br />
    <p class="arrow_left"></p>
    <br /><br />
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">


.arrow_top {
  @include triangle;
}

.arrow_right {
  @include triangle($deg: 90deg);
}

.arrow_bottom {
  @include triangle($deg: 180deg);
}

.arrow_left {
  @include triangle($deg: 270deg);
}

</style>

<template>
  <div>
    <h1>css 箭头</h1>
    <p class="button__arrow--top"></p>
    <p class="button__arrow--right"></p>
    <p class="button__arrow--bottom"></p>
    <p class="button__arrow--left"></p>

    <div style="border: 0.3px solid #e4e4e4"></div>
    <h1>button arrow</h1>
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

    <div style="border: 0.3px solid #e4e4e4"></div>
    <h1>popover-arrow</h1>
    <div class="container">
      <!-- The content -->
      ...

      <!-- Top left arrow -->
      <div class="container__arrow container__arrow--tl"></div>

      <!-- Top center arrow -->
      <div class="container__arrow container__arrow--tc"></div>

      <!-- Top right arrow -->
      <div class="container__arrow container__arrow--tr"></div>

      <!-- Right top arrow -->
      <div class="container__arrow container__arrow--rt"></div>

      <!-- Right center arrow -->
      <div class="container__arrow container__arrow--rc"></div>

      <!-- Right bottom arrow -->
      <div class="container__arrow container__arrow--rb"></div>

      <!-- Bottom left arrow -->
      <div class="container__arrow container__arrow--bl"></div>

      <!-- Bottom center arrow -->
      <div class="container__arrow container__arrow--bc"></div>

      <!-- Bottom right arrow -->
      <div class="container__arrow container__arrow--br"></div>

      <!-- Left top arrow -->
      <div class="container__arrow container__arrow--lt"></div>

      <!-- Left center arrow -->
      <div class="container__arrow container__arrow--lc"></div>

      <!-- Left bottom arrow -->
      <div class="container__arrow container__arrow--lb"></div>
    </div>
    <div style="border: 0.3px solid #e4e4e4"></div>
    <h1>Price tag</h1>
    <div class="price-tag">99.99$</div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.button {
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  gap: 8px;
  /* Spacing */
  padding: 8px;
  margin: 8px;
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

/** popover-arrow */
.container {
  /* Used to position the arrow */
  position: relative;

  /* Border */
  border: 1px solid rgba(0, 0, 0, 0.3);

  width: 200px;
  height: 200px;

  margin: 20px;
  padding: 0;
}

.container__arrow {
  /* Size */
  height: 16px;
  width: 16px;

  background-color: #fff;
  position: absolute;
}

.container__arrow--tl {
  /* Position at the top left corner */
  left: 32px;
  top: 0px;

  /* Border */
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  transform: translate(50%, -50%) rotate(45deg);
}

.container__arrow--tc {
  /* Position at the top center */
  left: 50%;
  top: 0px;

  /* Border */
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%) rotate(45deg);
}

.container__arrow--tr {
  /* Position at the top right corner */
  right: 32px;
  top: 0px;

  /* Border */
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%) rotate(45deg);
}

.container__arrow--rt {
  /* Position at the right top corner */
  right: 0;
  top: 32px;

  /* Border */
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  transform: translate(50%, 50%) rotate(45deg);
}

.container__arrow--rc {
  /* Position at the right center */
  right: 0;
  top: 50%;

  /* Border */
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  transform: translate(50%, -50%) rotate(45deg);
}

.container__arrow--rb {
  /* Position at the right bottom corner */
  bottom: 32px;
  right: 0;

  /* Border */
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  transform: translate(50%, -50%) rotate(45deg);
}

.container__arrow--bl {
  /* Position at the bottom left corner */
  bottom: -16px;
  left: 32px;

  /* Border */
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  transform: translate(50%, -50%) rotate(45deg);
}

.container__arrow--bc {
  /* Position at the bottom center */
  bottom: -16px;
  left: 50%;

  /* Border */
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%) rotate(45deg);
}

.container__arrow--br {
  /* Position at the bottom right corner */
  bottom: -16px;
  right: 32px;

  /* Border */
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%) rotate(45deg);
}

.container__arrow--lt {
  /* Position at the left top corner */
  left: 0;
  top: 32px;

  /* Border */
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  transform: translate(-50%, 50%) rotate(45deg);
}

.container__arrow--lc {
  /* Position at the left center */
  left: 0;
  top: 50%;

  /* Border */
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%) rotate(45deg);
}

.container__arrow--lb {
  /* Position at the left bottom corner */
  bottom: 32px;
  left: 0;

  /* Border */
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%) rotate(45deg);
}

/** price-tag */

$--price-tag-background: #999999;
$--price-tag-height: 0.4rem;

.price-tag {
  /* Used to position the triangle */
  position: relative;

  /* Center the price */
  display: flex; 
  align-items: center;
  justify-content: center;

  background: $--price-tag-background;
  color: #fff;

  /* Size */
  width: 60px;
  height: $--price-tag-height;

  margin: 20px;
}

/* The triangle */
.price-tag::before {
  content: "";

  border-color: transparent $--price-tag-background transparent transparent;
  border-style: solid;
  border-width: calc($--price-tag-height / 2)
    calc($--price-tag-height / 2) calc($--price-tag-height / 2) 0rem;

  /* Position */
  left: 0px;
  position: absolute;
  top: 0px;
  transform: translate(-100%, 0px);
}

/* The dot */
.price-tag::after {
  content: "";

  /* Make it like a cirle */
  background: #fff;
  border-radius: 9999rem;

  /* Position */
  left: 0;
  position: absolute;
  top: 50%;
  transform: translate(- calc($--price-tag-height / 4), -50%);

  /* Size */
  height: calc($--price-tag-height / 4);
  width: calc($--price-tag-height / 4);
}
</style>

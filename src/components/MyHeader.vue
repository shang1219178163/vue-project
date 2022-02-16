<template>
  <div>
    <h1 class="header-title">
      <slot name="title" />
    </h1>
    <h2 class="title-author">
      <slot name="author" />
    </h2>
  </div>
</template>


<style scoped>
html, body, * {
    font-size: 1.2em;
    background: #fafafa;
}
</style>
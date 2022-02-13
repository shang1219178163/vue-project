<template>
  <div class="container">
    <div class="sidebar">
      <div>Min: 150px</div>
      <div>Max: 25%</div>
    </div>
    <p class="content">
      {{msg}}</p>
  </div>
</template>

<script setup>

const msg = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla architecto maxime modi nisi. Quas saepe dolorum, architecto quia fugit nulla! Natus, iure eveniet ex iusto tempora animi quibusdam porro?'

</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: minmax(100px, 25%) 1fr;
}

.sidebar {
  width: 100%;
  height: 100vh;
  background: lightpink;
  text-align: center;
  font-size: 12px;
}

.content {
  padding: 2rem;
}

</style>

<template>
  <div class="fixed">
    <div class="absolute">absolute</div>
    <div class="relative">relative</div>
    <div class="one">fixed</div>

  </div>
</template>


<script>


</script>


<style scoped>
.fixed{
  position: absolute;
  overflow: auto;

  width: 100%;
  height: 100%;

  background-color: green;
}
.absolute{
  position: fixed;

  top: 5px;
  left: 5px;
  width: 20px;
  height: 40px;

  background-color: orange;
}
.relative{
  position: relative;

  width: 20%;
  height: 20%;

  top: 20px;
  left: 10px;

  background-color: yellow;
}

.sticky{
  position: -webkit-sticky;
  position: sticky;
  top: 20px;

  /* width: 20px;
  height: 40px; */

  background-color: cyan;
}

.one{
  position: absolute;
  overflow: auto;

  width: 100px;
  height: 200px;

  background-color: lightskyblue;
}
</style>
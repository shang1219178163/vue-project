<template>
  <div class="container">
    <div v-for="(item, index) in 20" :key="index">{{item}}</div>
    <div class="sticky">
      <div class="item" v-for="(item, index) in 3" :key="index">{{item}}{{item}}{{item}}</div>
    </div>
    <div v-for="(item, index) in 25" :key="index">{{item}}</div>
  </div>
  
</template>

<script></script>

<style scoped lang="scss">

div{
  width: 100%;
  height: 45px;
}

.container {
  /* position: relative; */
  width: 100%;
  height: 100vh;
  margin: auto;
  // border: 1px solid #333;
  overflow: auto;
  line-height: 42px;
}

.sticky {
  position: sticky;
  top: 10px;

  height: auto;

  background: lightskyblue;
}
.item{
  width: 90%;

  margin: 0px;
  padding: 0px;
  // background-color: aqua;
  // width: 90%;

  text-align: center;

  border: 0.3px solid red;
}

</style>

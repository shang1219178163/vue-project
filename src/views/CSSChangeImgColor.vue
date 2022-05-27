
<template>
  <div class="box">
    <img 
    :src="require('@/assets/images/icon_tip.png')" 
    class="pic"/>
  </div>
</template>


<script setup>


</script>


<style scoped>

.box{
  width: 40px;
  height: 40px;
  border: 1px solid red;
  margin: 200px auto;
  text-indent: -40px;
  overflow: hidden;
}
.pic{
  filter: drop-shadow(40px 0px orange);
}

</style>
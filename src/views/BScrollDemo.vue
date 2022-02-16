<template lang="">
    <!-- <van-nav-bar title="人员清单" left-arrow @click-left="onClickLeft" /> -->
    <div class="wrapper" ref="wrapper">
      <ul class="content">
          <li v-for="(item, index) in 80" :key="index" >{{ item }}</li>
      </ul>
    <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
name: 'BScrollDemo',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  }
}
</script>
<style lang="">
    
</style>
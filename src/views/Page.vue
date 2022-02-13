<template>
  <div>
    <div>{{page}}</div>
    <div>params:{{params}}</div>
    <div>query:{{query}}</div>
  </div>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {
      page: '路由-page1',
      params: '',
      query: ''
    }
  },
  // props: {},
  // methods: {},
  created () {
    this.params = this.$route.params
    this.query = this.$route.query
    console.log('params:', this.$route.params)
    console.log('query:', this.$route.query)
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter', to)
    console.log('beforeRouteEnter', from)
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate', to)
    console.log('beforeRouteUpdate', from)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave', to)
    console.log('beforeRouteLeave', from)
    next()
  }
}
</script>

<style scoped></style>

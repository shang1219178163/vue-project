<template>
    <div>
        <input type="text" v-model="text">
        <button @click="add">添加</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    add () {
      this.$emit('add', this.text)
    }
  }
}
</script>
<style>

</style>

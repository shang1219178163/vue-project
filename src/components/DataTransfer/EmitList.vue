<template>
    <div>
        <li v-for="item in list" :key="item.id" @click="del(item)">
            {{item.title}}
        </li>
    </div>
</template>
<script>
export default {
  props: {
    list: Array
  },
  methods: {
    del (val) {
      this.$emit('del', val)
    }
  }
}
</script>
<style>

</style>

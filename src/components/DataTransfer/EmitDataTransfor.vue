<template>
    <div>
        <EmitInput @add="add"></EmitInput>
        <EmitList :list="list" @del="del"></EmitList>
    </div>
</template>

<script>
import EmitInput from './EmitInput.vue'
import EmitList from './EmitList.vue'

export default {
  components: { EmitInput, EmitList },
  name: 'emitdata',
  data () {
    return {
      list: [
        {id: 1, title: '标题1'},
        {id: 2, title: '标题2'}
      ]
    }
  },
  methods: {
    add (val) {
      if (val.trim().length === 0) {
        alert('标题不能为空')
        return
      }
      this.list.push(
        {id: Math.random, title: val}
      )
    },
    del (val) {
      var result = confirm(`确认删除:${val.title}`)
      if (result === false) {
        return
      }
      this.list.pop(val)
    }
  }
}
</script>

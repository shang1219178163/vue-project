<template>
  <div>
    <div class="box">
        <div class="box-left">
          <div class="img">

          </div>
        </div>
        <div class="box-right">
          <div class="Grid-cell">{{name}}</div>
          <div class="Grid-h">
            <div class="Grid-cell">职位:{{job}}</div>
            <div class="Grid-cell">经验:{{experience}}</div>
          </div>
          <div class="Grid-cell">宣言:{{des}}</div>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'GridDemo',
  created () {},
  data () {
    return {
      uid: 0,
      name: '张三',
      headUrl: '',
      job: '项目管家',
      experience: '10年',
      phone: 1888888888,
      des: '我们是最棒的服务!'
    }
  },
  props: {},
  methods: {}
}
</script>

<style scoped>
div{
  border: 0.3px solid blue;
}
.box {
  display: -webkit-flex; /* Safari */
  display: flex;
  height: 100px;
  /* flex-direction: row-reverse; */
  /* flex-direction: column; */
  /* flex-direction: column-reverse;  */
  /* justify-content: center;
  align-content: center;
  align-items: center; */
}

.box-left {
  flex-grow: 1;
}

.box-right{
  flex-grow: 1;
  flex-direction: column;
  background-color: green;
  padding: 10px 0 8px;
  /* justify-content: space-between; */
}

.Grid-h {
  display: flex;
  justify-content: space-between;
}

.Grid-cell {
  display: flex;
  background-color: yellow;
  /* text-align: center; */
}

</style>

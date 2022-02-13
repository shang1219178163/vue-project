<template>
  <div class='container'>
    <ol>
      <li v-for='e in list' :key='e.id'>
        <div class='cell' ref='kkkk' @click='tap(e)'>
          <!-- <div class='cell-left'>
          </div> -->
          <div class='cell-right'>
            <div class='name'>{{e.name}}</div>
            <div class='name'>{{e.des}}</div>
          </div>
        </div>
      </li>
    </ol>
  </div>

</template>

<script setup>
import { useContext } from 'vue';

const list = [
        {name: '样式1', des: '描述', isSelected: false, id: 1},
        {name: '样式2', des: '描述', isSelected: false, id: 2},
        {name: '样式3', des: '描述', isSelected: false, id: 3},
        {name: '样式4', des: '描述', isSelected: false, id: 4},
        {name: '样式5', des: '描述', isSelected: false, id: 5},
        {name: '样式6', des: '描述', isSelected: false, id: 6}
      ]

const tap = (e) => {
      // alert(e.name)
      console.log(e.name);
      e.isSelected = !e.isSelected
      // 默认样式不生效,只有删除 style 的 scoped, 后续影响待观察
      tap[e.id - 1].innerHTML = e.isSelected ? '点<br>击' : `
        <div class='cell-right'>
            <div class='name'>${e.name}</div>
            <div class='name'>${e.des}</div>
        </div>`

      // this.$refs.tap[e.id-1].style = .cell-right
    }

</script>

<!-- <style scoped> -->
<style scoped>
/* div{
  border: 0.3px solid blue;
} */

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  /* display: inline-block; */
  /* margin: 0 10px; */
  margin: 0;
  padding: 0.9375rem 0;
  text-align: -webkit-match-parent;
  list-style: none;
  border-bottom: 0.0625rem solid;
}

.container{
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 0;
  margin: 0;
}

.cell {
  background-color: #4ba946;
  /* display: flex; */
  width: 100vw - 8px*2;
  margin: 0 0.5rem 0 0.5rem;
  align-items: center;
}

.cell-left {
  background-color: yellow;

}

.cell-right{
  width: 100%;
  margin: 8px;
  background-color: yellow;
}

.cell-right >>> .name{
  text-overflow: ellipsis;
  display: -webkit-box;
}

.icon{
  width: 44px;
  height: 44px;
  overflow: hidden;
  border-radius: 6px;
}

.name{
  text-overflow: ellipsis;
  display: -webkit-box;
}

.button-box{
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
}
.buttons{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.button-outline{
  width: 5rem;
  /* height: 1.75rem; */
  line-height: 1.75rem;
  font-family: PingFangSC-Regular;
  font-size: .75rem;
  font-weight: 400;
  color: #333;
  text-align: center;
  border: 0.0625rem solid #ddd;
  border-radius: 0.875rem;
  margin-right: 0.625rem;
}

</style>

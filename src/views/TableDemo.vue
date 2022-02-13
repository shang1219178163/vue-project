<template>
  <div class='container'>
    <ol id='ol'>
      <li>
        <div class='cell' @click='tap'>
          <div class='name'>样式1</div>
          <TableDemo1 class="TableDemo1"></TableDemo1>
        </div>
      </li>
      <li>
        <div class='cell' @click='tap'>
          <div class='name'>样式2</div>
          <TableDemo2></TableDemo2>
        </div>
      </li>
    </ol>
  </div>

</template>

<script setup>

import TableDemo1 from '@/components/Table/TableDemo1'
import TableDemo2 from '@/components/Table/TableDemo2'

const list = [
        {name: 'TableDemo1', des: '样式1'},
        {name: 'TableDemo2', des: '样式2'},
      ]
const tap = () => {
      alert('tap')
    }
const tap1 = () => {
      alert('tap1')
    }

</script>

<style scoped>
div{
  border: 0.3px solid blue;
}

.container{
  margin: 10px;
}

.TableDemo1{
  margin: 10px;
}

</style>

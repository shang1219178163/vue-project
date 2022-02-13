<template>
  <div class='container'>
    <ol id='ol'>
      <li>
        <div class='cell' @click='tap'>
          <div class='name'>样式1</div>
          <grid1>grid1</grid1>
        </div>
      </li>
      <li>
        <div class='cell' @click='tap'>
          <div class='name'>样式2</div>
          <grid2>grid2</grid2>
        </div>
      </li>
      <li>
        <div class='cell' @click='tap'>
          <div class='name'>样式3</div>
          <grid3>grid3</grid3>
        </div>
      </li>
      <li>
        <div class='cell' @click='tap'>
          <div class='name'>样式4</div>
          <grid4>grid4</grid4>
        </div>
      </li>
      <li>
        <div class='cell' @click='tap'>
          <div class='name'>样式5</div>
          <grid5>grid5</grid5>
        </div>
      </li>
      <li>
        <div class='cell' @click='tap'>
          <div class='name'>样式6</div>
          <grid6>grid6</grid6>
        </div>
      </li>
      <li>
        <div class='cell' @click='tap1' ref='tap1' id='tap1'>
          <div class='name'>样式7</div>
          <grid6>grid6</grid6>
        </div>
      </li>
    </ol>
  </div>

</template>

<script setup>
// import Grid1 from '@/components/Grid/Grid_1.vue'
// import grid2 from '@/components/Grid/Grid_2.vue'
// import grid3 from '@/components/Grid/Grid_3.vue'
// import grid4 from '@/components/Grid/Grid_4.vue'
// import grid5 from '@/components/Grid/Grid_5.vue'
// import grid6 from '@/components/Grid/Grid_6.vue'

// const  list = [
//         {name: '样式1', tag: 'grid1'},
//         {name: '样式2', tag: 'grid2'},
//         {name: '样式3', tag: 'grid3'},
//         {name: '样式4', tag: 'grid4'},
//         {name: '样式5', tag: 'grid5'},
//         {name: '样式6', tag: 'grid6'}
//       ]

const tap = () => {
      alert('tap')
    }
const tap1 = () => {
      alert('tap1')
    }

</script>

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

</style>

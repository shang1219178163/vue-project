<template>
  <div class='container'>
    <ol id='ol'>
      <li>
        <div class='cell' @click='tap'>
          <div class='name'>LineLayout</div>
          <LineLayout></LineLayout>
        </div>
      </li>
      <li>
        <div class='cell' @click='tap'>
          <div class='name'>TwoColumns</div>
          <TwoColumns></TwoColumns>
        </div>
      </li>
      <li>
        <div class='cell' @click='tap'>
          <div class='name'>ThreeColumns</div>
          <ThreeColumns></ThreeColumns>
        </div>
      </li>
      <li>
        <div class='cell' @click='tap'>
          <div class='name'>Sandwich</div>
          <Sandwich></Sandwich>
        </div>
      </li>
      <li>
        <div class='cell' @click='tap'>
          <div class='name'>Grail</div>
          <Grail></Grail>
        </div>
      </li>
      <li>
        <div class='cell' @click='tap'>
          <div class='name'>GrailOne</div>
          <GrailOne></GrailOne>
        </div>
      </li>
    </ol>
  </div>

</template>

<script setup>
import LineLayout from '@/components/Layout/LayoutLine'
import TwoColumns from '@/components/Layout/LayoutTwoColumns'
import ThreeColumns from '@/components/Layout/LayoutThreeColumns'

import Sandwich from '@/components/Layout/LayoutSandwich'
import Grail from '@/components/Layout/LayoutGrail'
import GrailOne from '@/components/Layout/LayoutGrailOne'

const list = [
        {name: 'LineLayout', des: '线性布局'},
        {name: 'TwoColumns', des: '两栏布局'},
        {name: 'ThreeColumns', des: '三栏布局'},
        {name: 'Sandwich', des: '三明治布局'},
        {name: 'Grail', des: '圣杯布局'},
        {name: 'GrailOne', des: '圣杯布局1'}
      ]

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

<template>
  <!-- <div class="container">
    <ol id="ol">
      <li>
        <div class="cell" @click="tap">
          <div class="name">样式1</div>
          <flex1>flex1</flex1>
        </div>
      </li>
      <li>
        <div class="cell" @click="tap">
          <div class="name">样式2</div>
          <flex2>flex2</flex2>
        </div>
      </li>
    </ol>
  </div> -->
  <div class="box">
    <div class="column">
      <span class="item"></span>
      <span class="item"></span>
    </div>
    <div class="column">
      <span class="item"></span> 
      <span class="item"></span>
    </div>
  </div>
</template>

<script setup>
import flex1 from "@/components/Flex/Flex_1.vue";
import flex2 from "@/components/Flex/Flex_2.vue";

// const list = [
//         {name: '样式1', tag: 'grid1'},
//         {name: '样式2', tag: 'grid2'}
//       ]

const tap = () => {
  alert("tap");
};
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

.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 0;
  margin: 0;
}

.cell {
  background-color: #4ba946;
  /* display: flex; */
  width: 100vw - 8px * 2;
  margin: 0 0.5rem 0 0.5rem;
  align-items: center;
}

.box {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  background-color: green;
}
.column {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
}
.item{
  margin: 8px;
  width: 10px;
  height: 10px;
  background-color: red;
}
</style>

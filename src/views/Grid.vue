<template>
  <div>
    <div class='Grid'>
      <div class='Grid-cell'>
        <div class='Grid-cell'>1/1</div>
      </div>
      <div class='Grid-cell'>
        <div class='Grid-cell'>1/2</div>
        <div class='Grid-cell'>2/2</div>
      </div>
      <div class='Grid-cell'>
        <div class='Grid-cell'>1/3</div>
        <div class='Grid-cell'>2/3</div>
        <div class='Grid-cell'>3/3</div>
      </div>
      <div class='Grid-cell'>
        <div class='Grid-cell'>1/4</div>
        <div class='Grid-cell'>2/4</div>
        <div class='Grid-cell'>3/4</div>
        <div class='Grid-cell'>4/4</div>
      </div>
      <div class='Grid-cell'>
        <div class='Grid-cell'>{{flexDes}}</div>
        <div class='Grid-cell'>{{flexGrowDes}}</div>
      </div>
      <div class='Grid-cell'>
        <div class='Grid-cell'>{{justifyContent}}</div>
        <div class='Grid-cell'>{{alignItems}}</div>
      </div>
    </div>
  </div>

</template>

<script setup>

const msg = 'GridDemo'
const flexDes = 'flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。'
const flexGrowDes = '如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。'
const justifyContent = 'justify-content属性定义了项目在主轴上的对齐方式。justify-content: flex-start | flex-end | center | space-between | space-around;'
const alignItems = 'align-items属性定义项目在交叉轴上如何对齐。align-items: flex-start | flex-end | center | baseline | stretch;'

</script>

<style scoped>
div{
  border: 0.3px solid blue;
}
.Grid {
  display: -webkit-flex; /* Safari */
  display: flex;
  /* justify-content: baseline; */
  flex-direction: column;
}
.Grid-cell {
  display: flex;
  flex-grow: 1;
}
</style>

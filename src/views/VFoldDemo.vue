<template>
  <!-- Container -->
  <div class="fold">
    <!-- Each fold item -->
    <div 
      class="fold__item" 
      v-for="(e, i) in list" :key="i"
    >
      <!-- Heading -->
      <div class="fold__header" @click="clickHeader(e)">
        <!-- The toggle icon -->
        <div :class="['fold__toggle', e.isOpen === true ? 'arrow_bottom' : 'arrow_right']"></div>

        <!-- The title -->
        <div class="fold__title">{{e.title}}</div>
      </div>

      <!-- The content -->
      <div class="fold__content" v-if="e.isOpen">
        <div v-for="(item, index) in e.items" :key="index">
          section {{i}}, row {{index}}, {{item.title}}
        </div>
      
      </div>
    </div>

    <!-- Repeat other item -->
    ...

    <h1>VFold</h1>
    <VFold
      v-for="(e, i) in list" :key="i"
      :title="e.title"
    >
      <template #content>
        <div v-for="(item, index) in e.items" :key="index">
          section {{i}}, row {{index}}, {{item.title}}
        </div>
      </template>
    </VFold>



    <div class="arrow-right arrow-box">
      <p class="right">
        <i class="right-arrow1"></i>
        <i class="right-arrow2"></i>
      </p>
    </div>

  </div>
</template>

<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted } from "vue";
// import { Toast } from 'vant;
import { useRouter, useRoute } from "vue-router";


const list = reactive([
  {
    isOpen: false,
    title: "名称",
    subtitle: "名称",
    items: [
      {
        title: "item1",
      },
    ]
  },
  {
    isOpen: false,
    title: "种类",
    subtitle: "名称",
    items: [
      {
        title: "item1",
      },
      {
        title: "item2",
      },
    ]
  },
  {
    isOpen: false,
    title: "数量",
    subtitle: "名称",
    items: [
      {
        title: "item1",
      },
      {
        title: "item2",
      },
      {
        title: "item3",
      },
    ]
  },
]);

const clickHeader = (e) => {
  // console.log(e, JSON.stringify(e));
  e.isOpen = !e.isOpen;

};

</script>

<style scoped lang="scss">
.fold {
  /* Border */
  // border: 1px solid #e4e4d4;
  border-bottom-color: transparent;
  border-radius: 4px;
}

.fold__item {
  border-bottom: 1px solid #e4e4d4;
}

.fold__header {
  /* Center the content horizontally */
  align-items: center;
  display: flex;

  cursor: pointer;
  padding: 16px 12px;
}

.fold__toggle {
  margin-right: 12px;

  &.arrow_right {
    @include triangle($size: 8px, $deg: 90deg);
  }

  &.arrow_bottom {
    @include triangle($size: 8px, $deg: 180deg);
  }
}

.fold__title {
  /* Take remaining width */
  flex: 1;
}

.fold__content {
  /* For not selected item */
  // display: none;

  border-top: 1px solid #e4e4d4;
  padding: 16px;
}

.fold__content--selected {
  /* For selected item */
  display: block;
}


.arrow_top {
  @include triangle;
}

.arrow_right {
  @include triangle($deg: 90deg);
}

.arrow_bottom {
  @include triangle($deg: 180deg);
}

.arrow_left {
  @include triangle($deg: 270deg);
}

.arrow-box {
  position: relative;

  width: 30px;
  height: 30px;
  margin: 20px auto;
}

/*右箭头*/
.right {
  position: absolute;

  width: 20px;
  height: 20px;
  left: 0;
  top: 0;
}

.right-arrow1,
.right-arrow2 {
  // display: block;
  position: absolute;

  width: 0;
  height: 0;
  left: 0;
  top: 0;
  border-top: 10px transparent dashed;
  border-right: 10px transparent dashed;
  border-bottom: 10px transparent dashed;
  // border-left: 10px white solid;
  overflow: hidden;
}

.right-arrow1 {
  left: 1px;
  /*重要*/
  border-left: 10px red solid;
}

.right-arrow2 {
  border-left: 10px white solid;
}
</style>

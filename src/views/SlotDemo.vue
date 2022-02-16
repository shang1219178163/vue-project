<template>
  <div class='container'>
    <ol id='ol'>
      <li>
        <div class='cell'>
            <div>新插槽 v-slot 代替具名插槽 作用于插槽
                <todo-list @click="tap">
                    <!-- <template #todo="{obj: e, test: t}">
                        <div class="todocell" @click = tap(e)>
                            {{e.text}} {{ t}}  111
                        </div>
                    </template> -->
                </todo-list>
            </div >
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue';
import todoList from "@/components/TodoList.vue";

const instance = getCurrentInstance()
console.log(instance);

const tap = (e) => {
  alert(typeof e, JSON.stringify(e))
  console.log(e.text)
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

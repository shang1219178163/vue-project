<template>
  <div class='container'>
    <ol id='ol'>
      <li>
        <div class='cell'>
            <div>新插槽 v-slot 代替具名插槽 作用于插槽
                <todo-list>
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

    <VCard
      :margin="'12px'" 
      :padding="'19px 8px 19px'" 
      :borderRadius="'8px'"
    >
      <template #header>
          <h1>Here might be a page title</h1>
      </template>

      <template #default>
          <p>A paragraph for the main content.</p>
          <p>And another one.</p>
      </template>
      <template #footer>
          <p>Here's some contact info</p>
      </template>
  </VCard>
  </div>

</template>

<script setup>
import { ref, reactive } from 'vue';
import todoList from "@/components/TodoList.vue";
// import VCard from '@/components/VCard.vue';

const tap = (val) => {
  // alert(val.name)
  console.log(val.text)
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

<template>
  <div class="tree-diagram">
    <ul>
      <li>
        <!-- Content -->
        node
        <!-- Sub items -->
        <ul>
          <li>
            <!-- Content -->
            node
            <!-- Sub items -->
            <ul>
              <li>node</li>
              <li>node</li>
            </ul>
          </li>
          <li>node</li>
        </ul>
      </li>
      <!-- Repeat other items -->
      
    </ul>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted } from "vue";
// import { Toast } from 'vant;

const onRefresh = async () => {};

const onMore = async () => {};
</script>

<style scoped lang="scss">
.tree-diagram ul {
  display: flex;
  position: relative;

  /* Reset */
  list-style-type: none;
  margin: 0;
  padding: 1rem 0.5rem 0rem 0.5rem;
}

.tree-diagram ul ul::before {
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  content: "";

  /* Position */
  position: absolute;
  top: 0;
  right: 50%;

  /* Size */
  height: 1rem;
  width: 50%;
}

.tree-diagram li {
  padding: 1rem 0.5rem 0rem 0.5rem;
  position: relative;

  /* Center the content */
  align-items: center;
  display: flex;
  flex-direction: column;
}

.tree-diagram li::before {
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  content: "";

  /* Position */
  position: absolute;
  top: 0;
  right: 50%;

  /* Size */
  height: 1rem;
  width: 50%;
}

.tree-diagram li::after {
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  content: "";

  /* Position */
  position: absolute;
  top: 0;
  right: 0;

  /* Size */
  width: 50%;
}

.tree-diagram li:first-child::before,
.tree-diagram li:last-child::after {
  /* Remove the top of border from the first and last items */
  border-top: none;
}

/* Add a root item if you want */
li.tree-diagram__root::before {
  border-right: none;
}
</style>

<template>
  <div class="wizard">
    <!-- Step -->
    <div class="wizard__step" 
      v-for="(item, index) in 3" :key="index"
    >
      <div class="wizard__dot">
        <!-- The start connector -->
        <div class="wizard__connector--leading"></div>

        <!-- The step number -->
        <slot name="number">
          <div class="wizard__number" >{{index}}</div>
        </slot>
        <!-- The end connector -->
        <div class="wizard__connector--tailing"></div>
      </div>

      <!-- Title of step -->
      <slot name="content">
        <div class="wizard__step--content">content of step</div>
      </slot>
    </div>

    <!-- Repeat other steps -->
  </div>
</template>

<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted } from "vue";
// import { Toast } from 'vant;

const onRefresh = async () => {};

const onMore = async () => {};
</script>

<style scoped lang="scss">

.wizard {
  display: flex;
}

.wizard__step {
  /* Make all steps have the same width */
  flex: 1;
}

.wizard__dot {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 0;
}

.wizard__connector--leading,
.wizard__connector--tailing
{
  flex: 1;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.3);
}

.wizard__step:first-child .wizard__connector--leading,
.wizard__step:last-child .wizard__connector--tailing {
  background-color: transparent;
}

.wizard__number {
  /* Center the content */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Rounded border */
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 9999px;
  height: 32px;
  width: 32px;

  /* OPTIONAL: Spacing between it and connectors */
  margin-left: 4px;
  margin-right: 4px;
}

.wizard__step--content{
  border: 1px solid blue;
  margin: 0 3px;
}
</style>

<template>
  <div class="box">
    <div class="bg">
      <div class="percent" ref="percentRef">
      {{percent}}%
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, watchEffect} from 'vue';

const props = defineProps({
  percent: {
    type: Number,
    default: 0,
    validator: (v) => {
      return v >= 0 && v <= 100;
    }
  },

  width: {
    type: String,
    default: "auto"
  },
  indicatorMinWidth: {
    type: String,
    default: "15%"
  },
  height: {
    type: String,
    default: "auto"
  },
  padding: {
    type: String,
    default: "8px"
  },
  indicatorColor: {
    type: String,
    default: "rgb(53, 126, 221)"
  },
  color: {
    type: String,
    default: "#ffffff"
  },
  indicatorBg: {
    type: String,
    default: 'rgba(0, 0, 0, 0.1)'
  },
});

const emit = defineEmits(['finished',]);

const percentRef = ref(null);

onMounted(() => {
  watchEffect(() => {
    percentRef.value.style.width = `${props.percent}%`;
    if (props.percent >= 100) {
      emit('finished',);
    }
  })
});

</script>


<style scoped lang='scss'>

$padding: v-bind(padding);
$width: v-bind(width);
$height: v-bind(height);
$indicatorBg: v-bind(indicatorBg);
$color: v-bind(color);

$indicatorMinWidth: v-bind(indicatorMinWidth);
$indicatorColor: v-bind(indicatorColor);


.box{
  padding: $padding;

  height: $height;
  width: $width;
}

.bg{
  background: $indicatorBg;
  border-radius:9999px;
}

.percent{
  box-sizing: border-box;

  display: flex; 
  justify-content: center; 
  align-items: center; 

  color: $color; 
  background: $indicatorColor; 
  border-radius: 9999px; 
  
  font-size: 12px; 

  height: 100%; 
  min-width: $indicatorMinWidth;
  // padding: 4px; 
}
</style>
<template>
    <div>
        <div>
            <h2>object-fit: fill</h2>
            <img :src="url" alt="MDN Logo" class="fill"/>

            <img :src="url" alt="MDN Logo" class="fill narrow"/>

            <h2>object-fit: contain</h2>
            <img :src="url" alt="MDN Logo" class="contain"/>

            <img :src="url" alt="MDN Logo" class="contain narrow"/>

            <h2>object-fit: cover</h2>
            <img :src="url" alt="MDN Logo" class="cover"/>

            <img :src="url" alt="MDN Logo" class="cover narrow"/>

            <h2>object-fit: none</h2>
            <img :src="url" alt="MDN Logo" class="none"/>

            <img :src="url" alt="MDN Logo" class="none narrow"/>

            <h2>object-fit: scale-down</h2>
            <img :src="url" alt="MDN Logo" class="scale-down"/>

            <img :src="url" alt="MDN Logo" class="scale-down narrow"/>

            </div>

    </div>
</template>


<script setup>
import { ref } from 'vue';

const url = ref("https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png")


</script>

<style scoped>
 h2 {
  font-family: Courier New, monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 940px;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
}

.narrow {
  width: 100px;
  height: 150px;
  margin-top: 10px;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.none {
  object-fit: none;
}

.scale-down {
  object-fit: scale-down;
}
   
</style>
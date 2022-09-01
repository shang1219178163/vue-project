
<template>
  <h1>{{ $route.meta.title }}</h1>
  <pre>{{
   coordsInfo
  }}</pre>

  <!-- <div>{{ coordsInfo }}</div> -->
</template>


<script setup>
import { ref } from 'vue';
import { useGeolocation } from '@vueuse/core';

const { coords, locatedAt, error } = useGeolocation();

const coordsInfo = ref(JSON.stringify(
    {
      coords: {
        accuracy: coords.accuracy,
        latitude: coords.latitude,
        longitude: coords.longitude,
        altitude: coords.altitude,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed,
      },
      locatedAt,
      error: error ? error.message : error,
    },
    null,
    2,
  ));

</script>
<script setup>
  import Layout from '@/components/layout/Layout.vue';
  import WeatherCard from '@/components/WeatherCard.vue';
  import ForecastCard from '@/components/ForecastCard.vue';
  import { onMounted } from 'vue';
  import { slideIn } from '@/components/animations/slideIn';
  
  onMounted(() => {
    slideIn({
      targets: ['#weather-section', '#forecast-section'],
      translate: [80, 0],
      opacity: [0, 0.2, 0.5, 0.7, 1],
      duration: 700,
      ease: 'inOut',
    });
  });
</script>

<template>
  <Layout>
    <WeatherCard id="weather-section"/>
    <ForecastCard id="forecast-section"/>
  </Layout>
</template>

<style scoped>

</style>
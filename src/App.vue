<script setup>
  import Layout from '@/components/layout/Layout.vue';
  import SearchBar from '@/components/ui/SearchBar.vue';
  import WeatherCard from '@/components/WeatherCard.vue';
  import ForecastCard from '@/components/ForecastCard.vue';
  import { onMounted, ref } from 'vue';
  import { slideIn } from '@/components/animations/slideIn';
  import { getWeatherData } from '@/utils/api/getWeatherData';

  const currentWeatherData = ref(null);

  const fetchWeatherForCity = async (city = 'Toronto') => {
    const data = await getWeatherData(city);
    currentWeatherData.value = data;
  };

  const handleSearch = async (city) => {
    await fetchWeatherForCity(city);
  };

  onMounted(async () => {
    await fetchWeatherForCity();

    slideIn({
      targets: ['#weather-section', '#forecast-section', '#search-bar'],
      translate: [80, 0],
      opacity: [0, 0.2, 0.5, 0.7, 1],
      duration: 700,
      ease: 'inOut',
    });
  });
</script>

<template>
  <Layout>
    <SearchBar
      id="search-bar" 
      @search="handleSearch"
    />
    <WeatherCard 
      id="weather-section"
      :weather-data="currentWeatherData"
    />
    <ForecastCard 
      id="forecast-section"
    />
  </Layout>
</template>

<style scoped>

</style>
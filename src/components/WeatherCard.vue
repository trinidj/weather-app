<script setup>
  import MetricCard from '@/components/ui/MetricCard.vue';
  import { MapPin, Droplets, Wind, Eye } from 'lucide-vue-next';
  import { onMounted, ref, computed } from 'vue';
  import { getWeatherData } from '@/utils/api/getWeatherData';
  import weatherCodes from '@/utils/weatherCodes.json';
  import { breathing } from '@/components/animations/breathing';
  import SearchBar from '@/components/ui/SearchBar.vue';


  const currentWeatherData = ref(null);

  const weatherData = computed(() => ({
    temp: currentWeatherData.value?.data?.values?.temperature,
    desc: weatherCodes.weatherCode[currentWeatherData.value?.data?.values?.weatherCode],
    feelsLike: currentWeatherData.value?.data?.values?.temperatureApparent,
  }));

  const metrics = ref({
    humidity: 'Humidity', 
    wind: 'Wind',
    visibility: 'Visibility',
  });

  const metricValues = computed(() => ({
    humidity: currentWeatherData.value?.data?.values?.humidity,
    wind: currentWeatherData.value?.data?.values?.windSpeed,
    visibility: currentWeatherData.value?.data?.values?.visibility,
  }));

  const cityName = computed(() => {
    const fullLocation = currentWeatherData.value?.location?.name;

    return fullLocation ? fullLocation.split(',')[0].trim() : 'Loading...';
  });

  onMounted(async () => {
    const data = await getWeatherData();
    currentWeatherData.value = data;
    breathing('#animatedBox');
  });

</script>

<template>
  <section id="weather-section">
    <div class="search-bar">
      <SearchBar />
    </div>


    <div id="weather-container" class="weather-container">
      <div class="weather-location">
        <MapPin 
          :size="25"
        />
        <h2>{{ cityName }}</h2>
      </div>
      
      <div class="weather-today">
        <div class="temp-details">
          <div class="current-temp">
            <p>{{ weatherData.temp }}°</p>
          </div>

          <div class="temp-description">
            <p>{{ weatherData.desc }}</p>
          </div>

          <div class="feels-like-temp">
            <p>Feels like {{ weatherData.feelsLike }}</p>
          </div>
        </div>

        <div id="animatedBox" class="temp-image">
          <img src="../assets/images/cloud-icon.jpg" alt="Cloud" />
        </div>
      </div>

      <div class="weather-metrics">
        <MetricCard :metric="metrics.humidity" :value="metricValues.humidity">
          <Droplets />
        </MetricCard>

        <MetricCard :metric="metrics.wind" :value="metricValues.wind">
          <Wind />
        </MetricCard>
        
        <MetricCard :metric="metrics.visibility" :value="metricValues.visibility">
          <Eye />
        </MetricCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #weather-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .weather-container {
    display: flex;
    flex-direction: column;
    background: hsl(from rgb(255, 255, 255) h s l / 0.1);
    border-radius: 15px;
    justify-content: center;
    border: 2px solid hsl(from var(--secondary-light) h s l / 0.3);

  }

  .weather-location {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-sm);
    color: var(--text-color);
    padding: var(--spacing-2xl);
    padding-bottom: 0;
  }

  .weather-location h2 {
    font-size: var(--text-xl);
    font-weight: 500;
  }

  .weather-today {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-7xl);
    margin-block: var(--spacing-lg);
    justify-content: space-between;
    padding-inline: var(--spacing-2xl);
  }

  .temp-details {
    display: flex;
    flex-direction: column;
  }

  .current-temp p {
    color: var(--text-color);
    font-size: var(--text-8xl);
    font-weight: 500;
  }

  .temp-description p {
    color: var(--text-color);
    font-size: var(--text-lg);
  }

  .feels-like-temp p {
    color: hsl(from var(--text-color) h s l / 0.7);
    font-size: var(--text-base);
  }

  .temp-image img {
    border-radius: 20%;
    width: 150px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .weather-metrics {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-3xl);
    justify-content: center;
    align-items: center;
    padding: var(--spacing-2xl);
    padding-top: 0;
  }
</style>
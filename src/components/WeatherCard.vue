<script setup>
  import MetricCard from '@/components/ui/MetricCard.vue';
  import { MapPin, Droplets, Droplet, Wind, Eye,  } from 'lucide-vue-next';
  import { onMounted, ref, computed } from 'vue';
  import anime from 'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js';
  import { getWeatherData } from '@/utils/api/getWeatherData';
  import weatherCodes from '@/utils/weatherCodes.json';

  const currentWeatherData = ref(null);

  const weatherData = computed(() => ({
    temp: currentWeatherData.value?.data?.values?.temperature || '--',
    desc: weatherCodes.weatherCode[currentWeatherData.value?.data?.values?.weatherCode] || 'Unknown',
    feelsLike: currentWeatherData.value?.data?.values?.temperatureApparent || '--',
  }));

  const metrics = ref({
    humidity: 'Humidity', 
    wind: 'Wind',
    visibility: 'Visibility',
    precipitation: 'Percipitation',
    uvIndex: 'UV Index'
  });

  const metricValues = computed(() => ({
    humidity: currentWeatherData.value?.data?.values?.humidity || '--',
    wind: currentWeatherData.value?.data?.values?.windSpeed || '--',
    visibility: currentWeatherData.value?.data?.values?.visibility || '--',
    precipitation: currentWeatherData.value?.data?.values?.precipitationIntensity || '--',
    uvIndex: currentWeatherData.value?.data?.values?.uvIndex || '--',
  }));

  const cityName = computed(() => {
    const fullLocation = currentWeatherData.value?.location?.name;

    return fullLocation ? fullLocation.split(',')[0].trim() : 'Loading...';
  })

  onMounted(async () => {
    const data = await getWeatherData();
    currentWeatherData.value = data;
    console.log(data);

    anime({
      targets: '#animatedBox',
      translateY: [-10, 10],
      duration: 2000,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true,
    });
  });

</script>

<template>
  <section id="weather-section">
    <div class="weather-container">
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
          <img src="" alt="Cloud" />
        </div>
      </div>

      <div class="weather-metrics">
        <MetricCard :metric="metrics.humidity" :value="metricValues.humidity">
          <Droplets />
        </MetricCard>

        <MetricCard :metric="metrics.wind" :value="`${metricValues.wind} km`">
          <Wind />
        </MetricCard>
        
        <MetricCard :metric="metrics.visibility" :value="`${metricValues.visibility} km`">
          <Eye />
        </MetricCard>

        <MetricCard :metric="metrics.precipitation" :value="`${metricValues.precipitation} mm`">
          <Droplet />
        </MetricCard>

        <MetricCard :metric="metrics.uvIndex" :value="metricValues.uvIndex">
          <Droplet />
        </MetricCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .weather-container {
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      to bottom right, 
      var(--secondary-color), 
      hsla(from var(--secondary-color) h s calc(l + 20) / 0.3)
    );
    border-radius: 15px;
    justify-content: center;
  }

  .weather-location {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-sm);
    color: var(--text-color);
    padding: var(--spacing-xl);
  }

  .weather-location h2 {
    font-size: var(--text-xl);
    font-weight: 500;
  }

  .weather-today {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-5xl);
    justify-content: space-between;
    padding-inline: var(--spacing-xl);
  }

  .temp-details {
    display: flex;
    flex-direction: column;
  }

  .current-temp p {
    color: var(--text-color);
    font-size: var(--text-8xl);
    font-weight: 200;
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
    padding: var(--spacing-xl);
  }
</style>
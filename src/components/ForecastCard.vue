<script setup>
  import { Clock } from 'lucide-vue-next';
  import HourlyForecastCard from '@/components/ui/HourlyForecastCard.vue';
  import { getForecastData } from '@/utils/api/getForecastData.js';
  import { ref, onMounted, computed } from 'vue';
  import { slideIn } from '@/components/animations/slideIn';

  const currentForecastData = ref(null);

  const hourlyForecasts = computed(() => {
    if (!currentForecastData.value?.timelines?.hourly) return [];
    
    return currentForecastData.value.timelines.hourly.slice(0, 5).map(hour => ({
      time: new Date(hour.time).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: false
      }),
      temp: hour.values?.temperature,
    }));
  })

  onMounted(async () => {
    const data = await getForecastData();
    currentForecastData.value = data;
    console.log(data);

    slideIn('#forecast-container');
  });
</script>

<template>
  <section id="forecast-section">
    <div id="forecast-container" class="forecast-container">
      <div class="forecast-header">
        <Clock />
        <h2>Hourly Forecast</h2>
      </div>

      <div class="hourly-forecast">
        <HourlyForecastCard 
          v-for="(forecast, index) in hourlyForecasts" 
          :key="index"
          :time="forecast.time" 
          :temp="forecast.temp"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
  .forecast-container {
    display: flex;
    flex-direction: column;
    background: hsl(from rgb(255, 255, 255) h s l / 0.5);
    border-radius: 15px;
  }

  .forecast-header {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-sm);
    padding: var(--spacing-xl);
    color: var(--secondary-dark);
  }

  .forecast-header h2 {
    font-weight: 500;
  }

  .hourly-forecast {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-base);
    justify-content: center;
    padding: var(--spacing-xl);
    padding-top: 0;
  }
</style>
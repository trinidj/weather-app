<script setup>
  import { Clock } from 'lucide-vue-next';
  import HourlyForecastCard from '@/components/ui/HourlyForecastCard.vue';
  import { computed } from 'vue';

  const props = defineProps({
    forecastData: {
      type: Object,
      default: null,
    }
  });

  const hourlyForecasts = computed(() => {
    if (!props.forecastData?.forecast?.forecastday) return [];
    
    const now = new Date();
    const allHours = [];
    
    for (const day of props.forecastData?.forecast?.forecastday) {
      allHours.push(...day.hour);
    }
    
    const currentIndex = allHours.findIndex(hour => {
      const hourTime = new Date(hour.time);
      return hourTime >= now;
    });
    
    if (currentIndex === -1) return [];
    
    return allHours.slice(currentIndex, currentIndex + 5).map(hour => ({
      time: new Date(hour.time).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: false
      }),
      icon: hour.condition?.icon,
      temp: Math.round(hour.temp_c),
    }));
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
          :icon="forecast.icon"
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
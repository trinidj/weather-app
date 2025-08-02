<script setup>
  import { Clock } from 'lucide-vue-next';
  import HourlyForecastCard from '@/components/ui/HourlyForecastCard.vue';

</script>

<template>
  <section id="forecast-section">
    <div class="forecast-container">
      <div class="forecast-header">
        <Clock />
        <h2>Hourly Forecast</h2>
      </div>

      <div class="hourly-forecast">
        <HourlyForecastCard />
      </div>
    </div>
  </section>
</template>

<style scoped>
  .forecast-container {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 15px;
    width: 550px;
  }

  .forecast-header {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-sm);
    padding: var(--spacing-xl);
    color: var(--secondary-dark);
  }

  .forecast-header h3 {
    font-weight: 500;
  }
</style>
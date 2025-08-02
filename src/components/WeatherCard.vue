<script setup>
  import MetricCard from '@/components/ui/MetricCard.vue';
  import { MapPin, Droplets, Wind, Eye } from 'lucide-vue-next';
  import { ref } from 'vue';
  import anime from 'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js';

  const metrics = ref({
    humidity: 'Humidity',
    wind: 'Wind',
    visibility: 'Visibility',
  });

  window.onload = function() {
    anime({
      targets: '#animatedBox',
      translateY: [-5, 5],
      duration: 2000,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true
    });
  };

</script>

<template>
  <section id="weather-section">
    <div class="weather-container">
      <div class="weather-location">
        <MapPin 
          :size="25"
        />
        <h2>Toronto, ON</h2>
      </div>
      
      <div class="weather-today">
        <div class="temp-details">
          <div class="current-temp">
            <p>22°</p>
          </div>

          <div class="temp-description">
            <p>Partly Cloudy</p>
          </div>

          <div class="feels-like-temp">
            <p>Feels like 24°</p>
          </div>
        </div>

        <div id="animatedBox" class="temp-image">
          <img src="../assets/images/cloud-icon.jpg" alt="Cloud" />
        </div>
      </div>

      <div class="weather-metrics">
        <MetricCard :metric="metrics.humidity" :value="65">
          <Droplets />
        </MetricCard>

        <MetricCard :metric="metrics.wind" :value="'12 km/h'">
          <Wind />
        </MetricCard>
        
        <MetricCard :metric="metrics.visibility" :value="'10 km'">
          <Eye />
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
    width: 550px;
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
    justify-content: space-between;
    padding-inline: var(--spacing-xl);
  }

  .current-temp p {
    color: var(--text-color);
    font-size: var(--text-6xl);
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
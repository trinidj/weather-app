<script setup>
</script>

<template>
  <div class="weather-card">
    <div class="time">
      <p>12:00</p>
    </div>

    <div class="weather-image">
      <img src="../../assets/images/cloud-icon.jpg" />
    </div>

    <div class="temp">
      <p>22°</p>
    </div>
  </div>
</template>

<style scoped>
  .weather-card {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    justify-content: center;
    align-items: center;
    background: hsl(from var(--secondary-dark) h s l / 0.1);
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: 5px; 
  }

  .weather-image {
    display: flex;
    align-items: center;
  }

  .weather-image img {
    width: 40px;
    border-radius: 20%;
  }

  .time {
    color: hsl(from var(--secondary-dark) h s calc(l - 20) / 0.5);
    font-weight: 500;
  }

  .time p {
    font-size: var(--text-base);
  }

  .temp p {
    font-weight: 500;
    font-size: var(--text-lg);
    color: hsl(from grey h s calc(l - 20));
  }
</style>
<script setup>
  import { getDate } from '@/utils/getDate.js';

  const todaysDate = getDate();
</script>

<template>
  <header>
    <div class="app-header">
      <h1>Weather</h1>
      <p>{{ todaysDate }}</p>
    </div>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-betweens;
    padding: 1rem;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  }

  .app-header {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    text-align: center;
  }

  .app-header h1 {
    font-size: var(--text-4xl);
    color: var(--text-color);
    font-weight: 100;
  }

  .app-header p {
    color: hsl(from var(--text-color) h s calc(l - 15));
    font-size: var(--text-xl);
  }
</style>
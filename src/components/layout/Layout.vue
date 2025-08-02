<script setup>
</script>

<template>
  <body>
    <header>
      <h1>Weather App</h1>
    </header>
    <main>
      <slot />
    </main>
  </body>
</template>

<style scoped>
  header, main {
    padding: 1rem;
    width: 100%;
    max-width: 700px;
    margin: 0 auto; 
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header > h1 {
    font-size: var(--text-2xl);
  }
</style>
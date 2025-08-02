<script setup>
</script>

<template>
  <body>
    <header>
      <h1>Weather</h1>
      <p>Saturday, August 2</p>
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

  header h1 {
    font-size: var(--text-4xl);
    color: var(--text-color);
    font-weight: 100;
  }

  header p {
    color: hsl(from var(--text-color) h s calc(l - 15));
    font-size: var(--text-xl);
  }
</style>
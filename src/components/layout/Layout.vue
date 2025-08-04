<script setup>
  import Header from './Header.vue';
</script>

<template>
  <body>
    <Header />
    <main>
      <slot />
    </main>
  </body>
</template>

<style scoped>
  main {
    padding: 1rem;
    width: 100%;
    max-width: 700px;
    margin: 0 auto; 
  }
</style>
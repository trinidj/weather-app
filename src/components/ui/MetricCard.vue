<script setup>
  const props = defineProps({
    metric: {
      type: String,
    },
    value: {
      type: Number,
    },
  });
</script>

<template>
  <div class="metric-container">
    <slot />
    <p class="metric-title">{{ metric }}</p>
    <p class="metric-value">{{ value }}</p>
  </div>
</template>

<style scoped>
  .metric-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    align-items: center;
    color: hsl(from var(--text-color) h s calc(l - 5));
  }

  .metric-value {
    color: var(--text-color);
  }
</style>

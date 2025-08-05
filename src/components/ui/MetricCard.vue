<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    metric: {
      type: String,
    },
    value: {
      type: Number,
    },
  });

  const formattedValue = computed(() => {
    if (props.value === null) {
      return '--';
    }

    switch (props.metric) {
      case 'Wind':
      case 'Visibility':
        return `${props.value} km`;
      case 'Humidity':
        return `${props.value} %`;
      default:
        return props.value;
    }
  })
</script>

<template>
  <div class="metric-container">
    <slot />
    
    <span class="metric-value">{{ formattedValue }}</span>
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

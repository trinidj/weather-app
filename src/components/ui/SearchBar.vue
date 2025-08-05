<script setup>
  import { Search } from 'lucide-vue-next';
  import { ref } from 'vue';

  const emit = defineEmits(['search']);
  const searchInput = ref('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchInput.value.trim()) {
      emit('search', searchInput.value.trim());
    }
  };
</script>

<template>
  <form class="search-container" @submit="handleSubmit">
    <input
      v-model="searchInput"
      type="search" 
      placeholder="Search for a city..." />
    <Search 
      class="search-icon"
      :size="16"
    />
  </form>
</template>

<style scoped>
  .search-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: hsl(from rgb(255, 255, 255) h s l / 0.1);
    border: 2px solid hsl(from rgb(255, 255, 255) h s calc(l + 20) / 0.3);
    width: 100%;
    border-radius: 15px;
    padding: var(--spacing-xs) var(--spacing-sm);
  }

  input[type="search"] {
    background: none;
    border: none;
    padding: var(--spacing-xs);
    width: 100%;
    caret-color: rgb(255, 255, 255);
    color: rgb(255, 255, 255);
  }

  input[type="search"]:focus {
    outline: none;
  }

  input[type="search"]::placeholder,
  .search-icon {
    color: hsl(from rgb(255, 255, 255) h s calc(l + 10) / 0.5);
  }

  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }

  input[type="search"]::-ms-clear {
    display: none;
  }
</style>
<script setup>
import { ref } from 'vue'
const toggle = ref(false)
</script>


<template>
  <header class="flex justify-between items-center p-4 shadow-sm">
    <h3 class="font-bold">Where in the world?</h3>
    <div class="flex items-center gap-2">
      <img src="@/assets/icons/moon-outline.svg" alt="icon-moon" class="w-4 cursor-pointer" />
      <p>{{ toggle ? 'Dark Mode' : 'Light Mode' }}</p>
    </div>
  </header>
</template>

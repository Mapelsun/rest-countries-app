<script setup>
import { ref } from 'vue'
const queryTxt = ref('')

</script>
<template>
  <div class="flex items-center gap-5 px-8 py-4 rounded-md shadow-md bg-white">
    <img src="@/assets/icons/search-outline.svg" alt="search icon" class="w-5" />
    <input v-model="queryTxt" type="text" placeholder="Search for a country..."
      class="outline-none w-full bg-inherit text-sm">
  </div>
</template>

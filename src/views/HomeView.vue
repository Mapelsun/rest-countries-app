<script setup>
import SearchFilter from '@/components/SearchFilter.vue'
import CountryList from '@/components/CountryList.vue'
import { useGlobalStore } from '@/stores/global'
const global = useGlobalStore()
</script>
<template>
  <div>
    <p class="max-w-screen-xl mx-auto px-4" v-if="global.loading">Loading...</p>
    <div v-else>
      <SearchFilter />
      <CountryList />
    </div>
  </div>
</template>


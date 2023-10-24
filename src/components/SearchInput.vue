<script setup>
import { ref, watch } from 'vue'
const queryTxt = ref('')
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

import { useGlobalStore } from '@/stores/global'
const global = useGlobalStore()

watch(
  queryTxt,
  (newVal) => {
    if (newVal !== '') {
      global.filterByQuery(newVal)
    }
  },
  { immediate: true }
)
</script>
<template>
  <div class="flex items-center gap-5 px-8 py-4 rounded-md shadow-md bg-[--accent-color]">
    <MagnifyingGlassIcon class="w-6 text-[--text-color]" />
    <input
      v-model="queryTxt"
      type="text"
      placeholder="Search for a country..."
      class="outline-none w-full bg-inherit text-sm text-[--text-color]"
    />
  </div>
</template>


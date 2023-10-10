<script setup>
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
const selected = ref('')
const showDropdown = ref(false)
import { useGlobalStore } from '@/stores/global'
const global = useGlobalStore()

const toggleOptions = () => {
  showDropdown.value = !showDropdown.value
}

const setSelected = (region) => {
  selected.value = region
  showDropdown.value = false
}
</script>

<template>
  <div class="relative">
    <div
      class="flex justify-between gap-5 px-5 py-4 rounded-md shadow-md w-60 bg-white"
      @click="toggleOptions"
    >
      <span class="text-sm text-gray-400">Filter by Region</span>
      <ChevronDownIcon class="w-4 text-gray-500" />
    </div>
    <div
      class="absolute top-16 flex flex-col px-5 py-4 rounded-md shadow-md w-60 bg-white transition"
      v-if="showDropdown"
    >
      <span
        v-for="region in global.regions"
        :key="region"
        class="text-base text-gray-400 cursor-pointer"
        @click="setSelected(region)"
        >{{ region }}</span
      >
    </div>
  </div>
</template>


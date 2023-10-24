<script setup>
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
import { useGlobalStore } from '@/stores/global'

const selected = ref('')
const showDropdown = ref(false)
const global = useGlobalStore()

const toggleOptions = () => {
  showDropdown.value = !showDropdown.value
}

const setSelected = (region) => {
  selected.value = region
  global.filterRegions(region)
  showDropdown.value = false
}
</script>

<template>
  <div class="relative">
    <div
      class="flex justify-between gap-5 px-5 py-4 rounded-md shadow-md w-60 bg-[--accent-color]"
      @click="toggleOptions"
    >
      <span class="text-sm">{{ selected || 'Filter by Region' }}</span>
      <ChevronDownIcon class="w-4 text-[--text-color]" />
    </div>
    <div
      class="absolute top-16 flex flex-col px-5 py-4 rounded-md shadow-md w-60 bg-[--accent-color] transition"
      v-if="showDropdown"
    >
      <span
        v-for="region in global.regions"
        :key="region"
        class="text-base text-[--text-color] cursor-pointer"
        @click="setSelected(region)"
        >{{ region }}</span
      >
    </div>
  </div>
</template>


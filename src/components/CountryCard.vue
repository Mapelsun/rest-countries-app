<script setup>
const props = defineProps({
  countries: Array,
})
</script>

<template>
  <div v-for="{ flag, flagAlt, name, population, region, capital } in countries" :key="name"
    class="flex flex-col rounded shadow-lg overflow-hidden">
    <img :src="flag" :alt="flagAlt" class="h-48 w-full object-cover" />
    <div class="px-6 pt-6 pb-10">
      <h4 class="font-bold mb-3 text-xl">{{ name }}</h4>
      <p class="text-base"><span class="font-semibold">Population:</span><span>&nbsp;{{ population }}</span></p>
      <p class="text-base"><span class="font-semibold">Region:</span><span>&nbsp;{{ region }}</span></p>
      <p class="text-base"><span class="font-semibold">Capital:</span><span>&nbsp;{{ capital }}</span></p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  country: Object
})

const viewCountryDetails = (name) => {
  console.log('Country Name:', name)
}
</script>

<template>
  <div @click="viewCountryDetails(country.name)"
    class="flex flex-col rounded shadow-lg hover:shadow-2xl transition overflow-hidden cursor-pointer">
    <img :src="country.flag" :alt="country.flagAlt" class="h-48 w-full object-cover" />
    <div class="px-6 pt-6 pb-10">
      <h4 class="font-bold mb-3 text-xl">{{ country.name }}</h4>
      <p class="text-base"><span class="font-semibold">Population:</span><span>&nbsp;{{ country.population }}</span></p>
      <p class="text-base"><span class="font-semibold">Region:</span><span>&nbsp;{{ country.region }}</span></p>
      <p class="text-base"><span class="font-semibold">Capital:</span><span>&nbsp;{{ country.capital }}</span></p>
    </div>
  </div>
</template>

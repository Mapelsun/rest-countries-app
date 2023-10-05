<script setup>
import { useRouter } from 'vue-router'
import {
  convertToLowerCase,
  formatNumberWithCommas,
  getCapital,
} from '@/utils/helpers.js'
const router = useRouter()

const props = defineProps({
  country: Object,
})
</script>

<template>
  <div
    @click="router.push(`/country/${convertToLowerCase(country.cca2)}`)"
    class="flex flex-col rounded shadow-lg hover:shadow-2xl transition overflow-hidden cursor-pointer"
  >
    <img
      :src="country.flags.svg"
      :alt="country.flags.alt || ''"
      class="h-48 w-full object-cover"
    />
    <div class="px-6 pt-6 pb-10">
      <h4 class="font-bold mb-3 text-xl">{{ country.name.common }}</h4>
      <p class="text-sm">
        <span class="font-semibold">Population:</span
        ><span>&nbsp;{{ formatNumberWithCommas(country.population) }}</span>
      </p>
      <p class="text-sm">
        <span class="font-semibold">Region:</span
        ><span>&nbsp;{{ country.region }}</span>
      </p>
      <p class="text-sm">
        <span class="font-semibold">Capital:</span
        ><span>&nbsp;{{  getCapital(country) }}</span>
      </p>
    </div>
  </div>
</template>


<script setup>
import { formatNumberWithCommas, getCapital } from '@/utils/helpers.js'

import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { ArrowLongLeftIcon } from '@heroicons/vue/24/solid'
import Container from '@/components/Container.vue'

import { useGlobalStore } from '@/stores/global'
const global = useGlobalStore()

const router = useRouter()
const route = useRoute()

const loading = ref(true)
const countryInfo = ref(global.country)

const getCountryInfo = async () => {
  loading.value = true
  countryInfo.value = global.getCountry(route.params.id)
  loading.value = false
}

const formatLanguages = (country) => {
  return Object.values(country.languages).join(', ')
}

const formatCurrencies = (country) => {
  const currencies = country.currencies
  const result = []
  for (let key in currencies) {
    if (currencies.hasOwnProperty(key)) {
      let nestedObj = currencies[key]
      if (nestedObj.hasOwnProperty('name')) {
        result.push(nestedObj.name)
      }
    }
  }
  return result.join(', ')
}

onMounted(() => {
  getCountryInfo()
})
</script>
<template>
  <Container>
    <button
      class="mt-5 mb-14 flex items-center cursor-pointer gap-1.5 py-1 px-4 border rounded-sm shadow-lg"
      @click="router.back()"
    >
      <ArrowLongLeftIcon class="w-4" /><span>Back</span>
    </button>
    <p v-if="loading">Loading...</p>
    <div v-else class="grid sm:grid-cols-2 sm:items-center">
      <img
        class="w-full max-w-2xl h-60 md:h-full mb-6 sm:mb-0 bg-red-500"
        src=""
        alt=""
      />
      <div class="sm:pl-5 sm:mt-5 md:pl-10 lg:pl-20">
        <h2 class="text-2xl font-bold mb-4">{{ countryInfo.name.common }}</h2>
        <div class="md:flex md:gap-10 lg:gap-16">
          <div class="mb-8">
            <p class="text-cus">
              <span class="font-semibold">Native Name:</span
              ><span>&nbsp;{{ countryInfo.name.official }}</span>
            </p>
            <p class="text-cus">
              <span class="font-semibold">Population:</span
              ><span
                >&nbsp;{{
                  formatNumberWithCommas(countryInfo.population)
                }}</span
              >
            </p>
            <p class="text-cus">
              <span class="font-semibold">Region:</span
              ><span>&nbsp;{{ countryInfo.region }}</span>
            </p>
            <p class="text-cus">
              <span class="font-semibold">Sub Region:</span
              ><span>&nbsp;{{ countryInfo.subregion }}</span>
            </p>
            <p class="text-cus">
              <span class="font-semibold">Capital:</span
              ><span>&nbsp;{{ getCapital(countryInfo) }}</span>
            </p>
          </div>
          <div class="mb-8">
            <p class="text-cus">
              <span class="font-semibold">Top Level Domain:</span
              ><span>&nbsp;{{ countryInfo.tld[0] }}</span>
            </p>
            <p class="text-cus">
              <span class="font-semibold">Currencies:</span
              ><span>&nbsp;{{ formatCurrencies(countryInfo) }}</span>
            </p>
            <p class="text-cus">
              <span class="font-semibold">Languages:</span
              ><span>&nbsp;{{ formatLanguages(countryInfo) }}</span>
            </p>
          </div>
        </div>
        <div v-if="countryInfo.borders">
          <h5 class="font-semibold mb-3 text-sm">Border Countries</h5>
          <div class="flex items-center gap-2">
            <p
              v-for="country in global.borderCountries"
              :key="country"
              class="py-1 px-4 border rounded-sm shadow-sm cursor-pointer"
            >
              {{ country }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>


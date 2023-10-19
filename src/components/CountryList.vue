<script setup>
import Container from '@/components/Container.vue'
import CountryCard from '@/components/CountryCard.vue'
import api from '@/utils/api-services.js'
import { ref, onMounted, watch } from 'vue'

import { storeToRefs } from 'pinia'

import { useGlobalStore } from '@/stores/global'
const global = useGlobalStore()
const { countriesByRegion, filteredCountries } = storeToRefs(global)

const defaultCountries = ref([])

const getCountries = async () => {
  global.toggleLoading(true)
  try {
    let data
    if (global.countries.length > 0) {
      data = global.countries
      defaultCountries.value = data
      global.setRegions()
    } else {
      const { data } = await api.getAllCountries()
      global.setAllCountries(data)
      defaultCountries.value = data
    }
  } catch (error) {
    console.log(error)
  } finally {
    global.toggleLoading(false)
  }
}

watch(
  countriesByRegion,
  (newVal) => {
    if (newVal.length > 0) {
      defaultCountries.value = newVal
    }
  },
  { immediate: true }
)

watch(
  filteredCountries,
  (newVal) => {
    if (newVal.length > 0) {
      defaultCountries.value = newVal
    }
  },
  { immediate: true }
)

onMounted(() => {
  getCountries()
})
</script>

<template>
  <container>
    <section class="flex flex-col gap-10 sm:grid sm:grid-cols-auto">
      <CountryCard
        :country="country"
        v-for="country in defaultCountries"
        :key="country.cca2"
      />
    </section>
  </container>
</template>


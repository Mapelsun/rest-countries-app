<script setup>
import CountryCard from '@/components/CountryCard.vue'
import api from '@/utils/api-services.js';
import { ref, onMounted, watch } from 'vue'

const defaultCountries = ref([])

const getCountries = async () => {
  try {
    const { data } = await api.getAllCountries()
    defaultCountries.value = data.slice(0, 8).map(country => {
      return {
        flag: country.flags.svg,
        flagAlt: country.flags.alt || '',
        name: country.name.common,
        population: country.population,
        region: country.region,
        capital: country.capital
      }
    })
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getCountries()
})
</script>


<template>
  <section>
    <CountryCard :countries="defaultCountries" />
  </section>
</template>

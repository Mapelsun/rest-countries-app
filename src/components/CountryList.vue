<script setup>
import Container from '@/components/Container.vue'
import CountryCard from '@/components/CountryCard.vue'
import api from '@/utils/api-services.js'
import { getCapital } from '@/utils/helpers.js'
import { ref, onMounted } from 'vue'
import { useGlobalStore } from '@/stores/global'
const global = useGlobalStore()
const defaultCountries = ref([])

const getCountries = async () => {
  try {
    let data
    if (global.countries.length > 0) {
      data = global.countries
      defaultCountries.value = data.slice(0, 8).map((country) => {
        return {
          flag: country.flags.svg,
          flagAlt: country.flags.alt || '',
          name: country.name.common,
          population: country.population,
          region: country.region,
          code: country.cca2,
          capital: getCapital(country),
        }
      })
    } else {
      const { data } = await api.getAllCountries()
      global.setAllCountries(data)
      defaultCountries.value = data.slice(0, 8).map((country) => {
        return {
          flag: country.flags.svg,
          flagAlt: country.flags.alt || '',
          name: country.name.common,
          population: country.population,
          region: country.region,
          code: country.cca2,
          capital: getCapital(country),
        }
      })
    }
  } catch (error) {
    console.log(error)
  }
}

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
        :key="country.name"
      />
    </section>
  </container>
</template>


<script setup>
import Container from '@/components/Container.vue'
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
        capital: country.capital[0]
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
  <container>
    <section class="flex flex-col gap-10 sm:grid sm:grid-cols-auto">
      <CountryCard :countries="defaultCountries" />
    </section>
  </container>
</template>

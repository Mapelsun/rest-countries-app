<script setup>
defineProps({
  countries: Array,
})
</script>

<template>
  <section>
    <div v-for="{ flag, flagAlt, name, population, region, capital, area } in countries" :key="area">
      <img :src="flag" :alt="flagAlt" />
      <div>
        <h4>{{ name }}</h4>
        <p>Population: {{ population }}</p>
        <p>Region: {{ region }}</p>
        <p>Capital: {{ capital }}</p>
      </div>
    </div>
  </section>
</template>

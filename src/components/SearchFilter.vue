<script setup>
import Container from '@/components/Container.vue'
import SearchInput from '@/components/SearchInput.vue'
import FilterDropDown from '@/components/FilterDropDown.vue'
</script>
<template>
  <container>
    <div class="flex flex-col gap-14 sm:flex-row sm:justify-between">
      <SearchInput />
      <FilterDropDown />
    </div>
  </container>
</template>

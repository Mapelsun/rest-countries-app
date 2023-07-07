<script setup>
import { ref, onMounted, watch } from 'vue'
const modeVal = ref(localStorage.getItem('theme') || 'light')

const checkDarkMode = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.theme = 'light'
  }
}

const toggleDarkMode = () => {
  if (modeVal.value === 'dark') {
    modeVal.value = 'light'
  } else if (modeVal.value === 'light') {
    modeVal.value = 'dark'
  }
}

watch(modeVal, (newVal) => {
  if (newVal === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.theme = 'light'
  } else {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.theme = 'dark'
  }
}, {immediate: true})

onMounted(() => checkDarkMode())
</script>


<template>
  <header class="flex justify-between items-center p-4 shadow-sm">
    <h3 class="font-bold">Where in the world?</h3>
    <div class="flex items-center gap-2">
      <img src="@/assets/icons/moon-outline.svg" alt="icon-moon" class="w-4 cursor-pointer" @click="toggleDarkMode" />
      <p>{{ modeVal === 'dark' ? 'Dark Mode' : 'Light Mode' }}</p>
    </div>
  </header>
</template>

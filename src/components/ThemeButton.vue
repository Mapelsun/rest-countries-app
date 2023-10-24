<script setup>
import { ref, onMounted } from 'vue'
import { MoonIcon } from '@heroicons/vue/24/solid'

const getTheme = () => localStorage.getItem('user-theme')

const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  if (hasDarkPreference) {
    return 'dark'
  } else {
    return 'light'
  }
}

const userTheme = ref(getTheme() || getMediaPreference())

const setTheme = (theme) => {
  localStorage.setItem('user-theme', theme)
  userTheme.value = theme
  document.documentElement.className = theme
}

const toggleTheme = () => {
  const activeTheme = localStorage.getItem('user-theme')
  if (activeTheme === 'light') {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}

onMounted(() => setTheme(userTheme.value))
</script>

<template>
  <div class="flex items-center gap-2">
    <MoonIcon class="w-4 cursor-pointer" @click="toggleTheme" />
    <p>{{ userTheme === 'dark' ? 'Dark Mode' : 'Light Mode' }}</p>
  </div>
</template>


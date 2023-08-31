<script setup>
import { ref, onMounted, watch } from 'vue'
const modeVal = ref(localStorage.getItem('theme') || 'light')
import Container from '@/components/Container.vue'

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
}, { immediate: true })

onMounted(() => checkDarkMode())
</script>


<template>
  <header class="shadow-sm sticky top-0"
    :class="modeVal === 'dark' ? 'bg-[--color-background-light]' : 'bg-[--color-background-dark]'">
    <container>
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-base">Where in the world?</h3>
        <div class="flex items-center gap-2">
          <div @click="toggleDarkMode">
            <img v-if="modeVal.value === 'light'" src="@/assets/icons/moon-outline.svg" alt="icon-moon"
              class="w-4 cursor-pointer" />
            <img v-else src="@/assets/icons/moon-filled.svg" alt="icon-moon" class="w-4 cursor-pointer" />
          </div>
          <p>{{ modeVal === 'dark' ? 'Dark Mode' : 'Light Mode' }}</p>
        </div>
      </div>
    </container>
  </header>
</template>

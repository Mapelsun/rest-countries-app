<script setup>
import { useRouter } from 'vue-router'
import Container from '@/components/Container.vue'
import ThemeButton from '@/components/ThemeButton.vue'

const router = useRouter()
</script>

<template>
  <header class="shadow-sm sticky top-0 bg-[--accent-color] z-50">
    <container>
      <div class="flex justify-between items-center">
        <h3
          class="font-bold text-base sm:text-[18px] cursor-pointer"
          @click="router.push('/')"
        >
          Where in the world?
        </h3>
        <ThemeButton />
      </div>
    </container>
  </header>
</template>


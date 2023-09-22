<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ArrowLongLeftIcon } from '@heroicons/vue/24/solid'
import Container from '@/components/Container.vue'
const router = useRouter()
const route = useRoute()
</script>
<template>
  <Container>
    <button class="mt-5 mb-14 flex items-center cursor-pointer gap-1.5 py-1 px-4 border rounded-sm shadow-lg"
      @click="router.back()">
      <ArrowLongLeftIcon class="w-4" /><span>Back</span>
    </button>
    <div class="grid sm:grid-cols-2 sm:items-center">
      <img class="w-full max-w-2xl h-60 md:h-full mb-6 sm:mb-0 bg-red-500" src="" alt="">
      <div class="sm:pl-5 sm:mt-5 md:pl-10 lg:pl-20">
        <h4 class="font-bold mb-4 text-xl">Belgium</h4>
        <div class="md:flex md:gap-10 lg:gap-16">
          <div class="mb-8">
            <p class="text-cus"><span class="font-semibold">Native Name:</span><span>&nbsp;Belgie</span></p>
            <p class="text-cus"><span class="font-semibold">Population:</span><span>&nbsp;11,319,511</span>
            </p>
            <p class="text-cus"><span class="font-semibold">Region:</span><span>&nbsp;Europe</span></p>
            <p class="text-cus"><span class="font-semibold">Sub Region:</span><span>&nbsp;Western Europe</span></p>
            <p class="text-cus"><span class="font-semibold">Capital:</span><span>&nbsp;Brussels</span></p>
          </div>
          <div class="mb-8">
            <p class="text-cus"><span class="font-semibold">Top Level Domain:</span><span>&nbsp;.be</span></p>
            <p class="text-cus"><span class="font-semibold">Currencies:</span><span>&nbsp;Euro</span></p>
            <p class="text-cus"><span class="font-semibold">Languages:</span><span>&nbsp;Dutch, French, German</span></p>
          </div>
        </div>
        <div>
          <h5 class="font-semibold mb-3 text-sm">Border Countries</h5>
          <div class="flex items-center gap-2">
            <p class="py-1 px-4 border rounded-sm shadow-sm cursor-pointer">France</p>
            <p class="py-1 px-4 border rounded-sm shadow-sm cursor-pointer">Germany</p>
            <p class="py-1 px-4 border rounded-sm shadow-sm cursor-pointer">Netherlands</p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
</script>
<template>
  <div>
    {{ router }} - {{ route }}
    </div>
</template>

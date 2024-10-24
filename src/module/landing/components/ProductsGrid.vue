<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
    <div v-for="product in products" :key="product.id">
      <CardComponent :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/interfaces/product.interface'
import CardComponent from '@/ui/components/CardComponent.vue'

interface Props {
  products: Product[]
}

defineProps<Props>()
</script>

<style scoped></style>

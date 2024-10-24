<template>
  <div class="flex justify-center items-center h-full">
    <div class="max-w-[320px] mx-auto h-full">
      <!-- Centering wrapper -->
      <div
        class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl"
      >
        <div
          class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-60"
        >
          <img
            :src="product.img_url"
            alt="card-image"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-2">
            <p
              class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900"
            >
              {{ product.name }}
            </p>
            <p
              class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900"
            >
              ${{ product.price }}
            </p>
          </div>
          <p
            class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75"
          >
            {{ product.brand }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/interfaces/product.interface'

interface Props {
  product: Product
}

defineProps<Props>()
</script>

<style scoped></style>

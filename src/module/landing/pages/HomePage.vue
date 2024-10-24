<template>
  <div class="flex flex-col text-gray max-w-5xl">
    <section class="mb-10 flex flex-col items-center mt-36">
      <div class="flex flex-col items-center max-w-lg space-y-4">
        <h1 class="font-poppins text-[#0091EA] font-bold text-5xl">
          Arma tu skincare 😱
        </h1>
        <h2 class="font-poppins text-[#4A4A4A] text-lg md:text-2xl text-center">
          Consulta y compara los precios de tus productos favoritos de skincare
          en principales tiendas del
          <span class="colombia-gradient font-bold">pais</span>.
        </h2>
      </div>
      <InfiniteXScroll />
    </section>

    <section class="flex flex-col text-gray max-w-5xl px-2">
      <SearchInput />
    </section>

    <section>
      <ProductsGrid :products="products" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { getProducts as getProductsAPI } from '@/api/products.api'
import InfiniteXScroll from '../components/InfiniteXScroll.vue'
import SearchInput from '../components/SearchInput.vue'
import { onMounted, ref } from 'vue'
import type { Product } from '@/interfaces/product.interface'
import ProductsGrid from '../components/ProductsGrid.vue'

const products = ref<Product[]>([])

const getProducts = async () => {
  return await getProductsAPI()
}
console.log(products)
onMounted(async () => {
  const productsList = await getProducts()
  products.value = productsList
})
</script>

<style scoped>
.colombia-gradient {
  background: linear-gradient(
    90deg,
    #ffcd00,
    #0033a0,
    #ce1126
  ); /* Degradado con los colores de la bandera */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>

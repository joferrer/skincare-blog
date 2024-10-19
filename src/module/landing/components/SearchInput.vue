<template>
  <!-- component -->

  <div class="flex justify-center max-w-lg w-full self-center">
    <form action="" class="relative w-full">
      <input
        type="search"
        placeholder="Buscar productos..."
        class="search-input text-base cursor-pointer relative z-10 h-12 w-full rounded-full border bg-transparent pl-12 pr-4 outline-none focus:cursor-text focus:border-gray-300"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
        viewBox="0 0 512 512"
      >
        <path
          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
          fill="none"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-width="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="32"
          d="M338.29 338.29L448 448"
        />
      </svg>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.search-input {
  transition: all 0.3s ease;
}
</style>

<template>
  <div>
    <header></header>
    <main>
      <div>Probando conexion desde el layout</div>
      <div class="main-container"></div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.main-container {
  @apply max-w-[1200px] h-full flex flex-col items-center;
  margin: 0 auto;
}

#logo-header {
  @apply w-14 h-14;
}
</style>

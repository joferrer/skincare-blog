<template>
  <div>
    <header>
      <img
        id="logo-header"
        src="/public/SkincareProyect-logo.svg"
        alt="arma tu skincare logo"
      />
    </header>
    <main>
      <div class="main-container">
        <RouterView />
      </div>
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

/** * .main-container { max-width: 1200px; height: 100vh; display: flex;
flex-direction: column; justify-content: center; } */

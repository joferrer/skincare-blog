<template>
  <div class="mt-7 scrolling-content">
    <div class="slide-track">
      <div v-for="logo in logos" :key="logo" class="store-div">
        <img :src="logo" alt="Store logo" />
      </div>
      <div v-for="logo in logos" :key="logo + '2'" class="store-div">
        <img :src="logo" alt="Store logo" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const StoreLogo = {
  FARMATODO:
    'https://revistabusinessvenezuela.com/webv/wp-content/uploads/2021/04/LOGO-FARMATODO.jpg',
  BELLA_PIEL:
    'https://eltesoro.com.co/wp-content/uploads/2020/07/bella-piel-logo-el-tesoro-1.jpg',
  CRUZ_VERDE:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Logotipo_Cruz_Verde.svg/800px-Logotipo_Cruz_Verde.svg.png',
  MEDIPIEL:
    'https://www.laquinta.com.co/wp-content/uploads/2022/11/Medipiel.png',
}

const logos = Object.values(StoreLogo)
</script>

<style scoped>
.scrolling-content {
  width: 300px;
  height: auto;
  overflow: hidden;
  /* 6 elementos de 100px de ancho */
}
.scrolling-content .slide-track {
  display: flex;
  animation: scroll 10s linear infinite;
  -webkit-animation: scroll 10s linear infinite;
  width: calc(70px * 8);
}

.scrolling-content .slide-track .store-div {
  width: 70px;
}
.slide-track .store-div img {
  width: 100%;
}

@keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(calc(-70px * 4));
    transform: translateX(calc(-70px * 4));
  }
}
</style>

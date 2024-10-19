<template>
  <div class="flex flex-col text-gray max-w-5xl">
    <section class="mb-10 flex flex-col items-center mt-36">
      <div class="flex flex-col items-center max-w-lg space-y-4">
        <h1 class="font-poppins text-[#0091EA] font-bold text-4xl">
          Arma tu skincare 😱
        </h1>
        <h2 class="font-poppins text-[#4A4A4A] text-lg md:text-2xl text-center">
          Consulta y compara los precios de tus productos favoritos de skincare
          en principales tiendas del
          <span class="colombia-gradient font-bold">pais</span>.
        </h2>
      </div>
      <div class="mt-7 scrolling-content">
        <div class="slide-track">
          <div class="store-div">
            <img
              src="https://revistabusinessvenezuela.com/webv/wp-content/uploads/2021/04/LOGO-FARMATODO.jpg"
              alt=""
            />
          </div>
          <div class="store-div">
            <img
              src="https://eltesoro.com.co/wp-content/uploads/2020/07/bella-piel-logo-el-tesoro-1.jpg"
              alt=""
            />
          </div>
          <div class="store-div">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Logotipo_Cruz_Verde.svg/800px-Logotipo_Cruz_Verde.svg.png"
              alt=""
            />
          </div>
          <div class="store-div">
            <img
              src="https://www.laquinta.com.co/wp-content/uploads/2022/11/Medipiel.png"
              alt=""
            />
          </div>
          <div class="store-div">
            <img
              src="https://revistabusinessvenezuela.com/webv/wp-content/uploads/2021/04/LOGO-FARMATODO.jpg"
              alt=""
            />
          </div>
          <div class="store-div">
            <img
              src="https://eltesoro.com.co/wp-content/uploads/2020/07/bella-piel-logo-el-tesoro-1.jpg"
              alt=""
            />
          </div>
          <div class="store-div">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Logotipo_Cruz_Verde.svg/800px-Logotipo_Cruz_Verde.svg.png"
              alt=""
            />
          </div>
          <div class="store-div">
            <img
              src="https://www.laquinta.com.co/wp-content/uploads/2022/11/Medipiel.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col text-gray max-w-5xl px-2">
      <SearchInput />
    </section>
  </div>
</template>

<script setup lang="ts">
import SearchInput from '../components/SearchInput.vue'
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
  text-fill-color: transparent;
}

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

/** */

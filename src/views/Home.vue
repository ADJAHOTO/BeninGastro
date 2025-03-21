<script setup>
import { onMounted } from "vue";
import { animate } from "motion-v";

onMounted(() => {
  animate(".hero-image", { opacity: [0, 1], scale: [0.8, 1] }, { duration: 1 });
  animate(".hero-text", { x: [-50, 0], opacity: [0, 1] }, { duration: 1 });
});
</script>

<template>
  <div class="min-h-screen bg-white">""
    <!-- Navigation améliorée -->
    <header class="flex justify-between items-center p-4 sm:p-6 lg:px-20 lg:py-8">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Restauration Bénin</h1>
      
      <!-- Menu Burger amélioré -->
      <button @click="toggleMenu" class="md:hidden text-green-600 p-2 hover:bg-gray-100 rounded-lg transition">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      <!-- Menu Mobile optimisé -->
      <nav 
        :class="isMenuOpen ? 'flex' : 'hidden'"
        class="absolute top-16 left-0 w-full bg-white shadow-lg flex-col items-center space-y-4 py-4 md:py-0 md:relative md:flex md:flex-row md:space-x-4 lg:space-x-8 md:shadow-none"
      >
        <a href="#" class="text-lg md:text-base lg:text-lg text-green-600 font-semibold hover:bg-gray-50 p-2 rounded">Home</a>
        <a href="#" class="text-lg md:text-base lg:text-lg text-gray-600 hover:text-green-600 hover:bg-gray-50 p-2 rounded">About</a>
        <a href="#" class="text-lg md:text-base lg:text-lg text-gray-600 hover:text-green-600 hover:bg-gray-50 p-2 rounded">Menu</a>
        <a href="#" class="text-lg md:text-base lg:text-lg text-gray-600 hover:text-green-600 hover:bg-gray-50 p-2 rounded">Contact</a>
      </nav>
    </header>

    <!-- Section Hero améliorée -->
    <section class="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
      <div class="hero-text space-y-4 md:space-y-6 lg:space-y-8 max-w-md lg:max-w-xl mb-8 md:mb-0">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-green-600 leading-tight">
          Welcome! Try our food
        </h2>
        <p class="text-base sm:text-lg md:text-xl text-gray-700">
          Nothing brings people together like good food.
        </p>
        <div class="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <button class="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition text-sm sm:text-base">
            View Menu
          </button>
          <button class="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-green-600 rounded-lg shadow-md hover:bg-gray-200 transition text-sm sm:text-base">
            Reserve Table
          </button>
          <button class="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-green-600 rounded-lg shadow-md hover:bg-gray-200 transition text-sm sm:text-base">
            Track Order
          </button>
        </div>
      </div>

      <!-- Image responsive améliorée -->
      <div class="hero-image w-full md:w-1/2 lg:w-2/5 xl:w-1/3 mt-8 md:mt-0">
        <img
          src="/src/assets/salade.jpeg"
          alt="Fresh Salad"
          class="w-full h-auto max-w-2xl rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Ajout de transitions fluides */
nav {
  transition: all 0.3s ease;
}

/* Ajustements pour les très petits écrans */
@media (max-width: 360px) {
  header {
    padding: 1rem;
  }
  
  .hero-text h2 {
    font-size: 1.5rem;
  }
  
  button {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
}

/* Conservation des animations originales */
.hero-text {
  opacity: 0;
  transform: translateX(-50px);
}

.hero-image {
  opacity: 0;
  transform: scale(0.8);
}
</style>

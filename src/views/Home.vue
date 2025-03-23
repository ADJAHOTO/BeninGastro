<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Liste des images
const images = [
  '/image 1.jpeg',
  '/image 2.jpeg',
  '/image 3.jpeg',
  '/image 4.jpeg',
  '/image 5.jpeg'
];
// Permet de stocker l'index de l'image actuelle
const currentIndex = ref(0);
let interval = null;

// Fonction pour changer l'image
const changeImage = () => {
  try {
    console.log("Tentative de changer l'image...");
    currentIndex.value = (currentIndex.value + 1) % images.length;

    // Vérification si l'image est chargée
    const testImage = new Image();
    testImage.src = images[currentIndex.value];
    testImage.onload = () => console.log("Image chargée avec succès :", testImage.src);
    testImage.onerror = () => console.error("Erreur de chargement de l'image :", testImage.src);

  } catch (error) {
    console.error("Erreur dans changeImage :", error);
  }
};

// Démarrer l'animation au montage du composant
onMounted(() => {
  interval = setInterval(changeImage, 3000); // Changement toutes les 3 secondes
});

// Nettoyer l'intervalle lors de la destruction du composant
onUnmounted(() => {
  clearInterval(interval);
});

// Etat pour le menu mobile
const isMobileMenuOpen = ref(false);

// Fonction pour ouvrir/fermer le menu mobile
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
   <!-- Navbar -->
   <header class="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md">
    <nav class="max-w-8xl mr-auto flex justify-between items-center  p-4  text-white">
      <h1 class="text-2xl font-bold">Restauration Bénin</h1>

      <!-- Menu Desktop -->
      <ul class="hidden md:flex space-x-10 font-bold items-center">
        <li><a href="#" class="hover:text-orange-500">Accueil</a></li>
        <li><a href="#" class="hover:text-orange-500">Menu</a></li>
        <li><a href="#" class="hover:text-orange-500">Contacts</a></li>
        <li>
            <button class="bg-transparent hover:bg-orange-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
              Réservations 
            </button>
        </li>
      </ul>

      <!-- Menu Mobile (Burger) -->
      <button @click="toggleMobileMenu" class="md:hidden focus:outline-none hover:bg-orange-500 ">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>

    <!-- Menu Mobile (Dropdown) -->
    <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-black/80 text-white p-4 font-bold justify-center items-center">
      <ul class="space-y-4 text-center">
        <li><a href="#" class="block hover:text-gray-300 hover:text-orange-500">Accueil</a></li>
        <li><a href="#" class="block hover:text-gray-300 hover:text-orange-500">Menu</a></li>
        <li><a href="#" class="block hover:text-gray-300 hover:text-orange-500">Contact</a></li>
        <li>
            <button class="bg-transparent hover:bg-orange-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
              Réservations
            </button>
        </li>
      </ul>
    </div>
  </header>

  <main :style="{ backgroundImage: `url('${images[currentIndex]}')` }"
  class="h-screen flex justify-center items-center text-white text-8x font-bold transition-a duration-1000 bg-cover bg-center"
  >
    Bienvenue sur Restauration Bénin
  </main>
</template>

<style scoped>
main {
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  transition: background-image 1s ease-in-out; /* Effet de transition douce */
}



</style>

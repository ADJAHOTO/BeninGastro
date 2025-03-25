<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AnimatedText from "@/components/AnimatedText.vue";
import { motion } from 'motion-v'

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
  <header class="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md">
    <nav class="max-w-8xl mr-auto flex justify-between items-center p-4 text-white">
      <AnimatedText tag="h1" animation="blur-in" class="text-2xl font-extrabold ">
        BENIN GASTRO
      </AnimatedText>

      <!-- Menu Desktop -->
      <ul class="hidden md:flex space-x-10 font-bold items-center">
        <router-link to="/">
        <li><a class="hover:text-orange-500">Accueil</a></li>
        </router-link>
        <router-link to="/Dashboard">
          <li><a  class="hover:text-orange-500">Dashboard</a></li>
        </router-link>
        <router-link to="/Contacts">
          <li><a class="hover:text-orange-500">Contactez-nous</a></li>
        </router-link>
        <li>
          <router-link to="/Dashboard">
              <motion.button
              class="bg-transparent hover:bg-orange-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
              :whileHover="{ scale: 1.1 }"
              :whilePress="{ scale: 0.95 }"
            >
              Réservations 
            </motion.button>

          </router-link>
        </li>
      </ul>

      <!-- Menu Mobile (Burger) -->
      <button @click="toggleMobileMenu" class="md:hidden focus:outline-none hover:bg-orange-500 ">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>

    <!-- Menu Mobile (Dropdown) -->
    <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-black/80 text-white p-4 font-bold justify-center items-center">
      <ul class="space-y-3 text-center">
        <router-link to="/">
        <li><a  class="block hover:text-orange-500 hover:text-orange-500">Accueil</a></li>
        </router-link>
        <router-link to="/Dashboard">
          <li><a class="block hover:text-orange-500 hover:text-orange-500">Dashboard</a></li>
        </router-link>  
        <router-link to="/Contacts">
          <li><a class="block hover:text-orange-500 hover:text-orange-500">Contactez-nous</a></li>
        </router-link>  
        <li>
          <router-link to="/Dashboard">
              <motion.button 
              class="bg-transparent hover:bg-orange-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
              :whileHover="{ scale: 1.1 }"
              :whilePress="{ scale: 0.95 }"
            >
              Réservations
            </motion.button>
          </router-link>
        </li>
      </ul>
    </div>
  </header>

  <main :style="{ backgroundImage: `url('${images[currentIndex]}')` }" class="h-screen flex justify-center items-center text-white text-8x font-bold transition-a duration-1000 bg-cover bg-center">
    <div class="flex flex-col justify-center items-center space-y-6 text-center">
      <AnimatedText tag="p" animation="slide-left" class="intro text-2xl font-bold">
        WELCOME TO BENIN GASTRO
      </AnimatedText>

      <AnimatedText tag="p" animation="bounce" class="intro2 text-2xl font-bold">
        Découvrez le meilleur restaurant de la ville où vous <br><br>pouvez manger les meilleurs plats
      </AnimatedText>

      <router-link to="/SignIn">
        <motion.button
            class="start hover:bg-orange-500 text-dark-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
            :whileHover="{ scale: 1.1 }"
            :whilePress="{ scale: 0.95 }"
            
          >
            Commencez des maitenants 
        </motion.button>
      </router-link>
    </div>
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
  transition: background-image 1s ease-in-out; 
  flex-direction: column;
}

.intro, .intro2 {
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.intro {
  font-size: 4.5rem;
  margin-top: -100px;
  margin-bottom: 60px;
  transition: all 0.3s ease-in-out
}

.intro2 {
  font-size: 2rem;
  margin-top: 20px;
  margin-bottom: 50px;
  transition: all 0.3s ease-in-out
}

@media (max-width: 768px) {
  .intro {
    font-size: 2.5rem;
    margin-top: 20px; 
    margin-bottom: 20px; 
    padding-left: 10px; 
    padding-right: 10px; 
  }

  .intro2 {
    font-size: 1.3rem; 
    margin-top: 15px; 
    margin-bottom: 40px; 
  }

  .start {
    font-size: 1rem;
    padding: 15px 20px;
    background-color: rgb(27, 4, 49);
  }

  .start:hover {
    background-color: orange;
  }
  ul li {
    padding: 8px;
  }
}

.start {
    font-size: 1rem; /* Réduction de la taille de la police sur mobile */
    padding: 15px 20px;
    background-color: gray
  }

  .start:hover {
    background-color: orange;
  }  
</style>

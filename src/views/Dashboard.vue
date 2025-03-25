<script setup>
import { ref, computed } from 'vue';

// État pour le menu mobile
const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Liste des plats disponibles
const plats = ref([
    {
        id: 1,
        nom: "Poulet braisé",
        prix: 4500,
        image: "/reservations/poulet_braise.jpeg"
    },
    {
        id: 2,
        nom: "Alloco au poisson",
        prix: 3500,
        image: "/reservations/alloco_poisson.jpeg"
    },
    {
        id: 3,
        nom: "Riz sauce arachide",
        prix: 3000,
        image: "/reservations/riz_sauce.jpeg"
    },
    {
        id: 4,
        nom: "Attiéké et poisson",
        prix: 5000,
        image: "/reservations/attieke.jpeg"
    },
    {
        id: 5,
        nom: "Pizza Margarita",
        prix: 7000,
        image: "/reservations/pizza.jpeg"
    },
    {
        id: 6,
        nom: "Spaghetti Bolognaise",
        prix: 6000,
        image: "/reservations/spaghetti.jpeg"
    },
    {
        id: 7,
        nom: "Soupe de poisson",
        prix: 5500,
        image: "/reservations/soupe.jpeg"
    },
    {
        id: 8,
        nom: "Poulet Yassa",
        prix: 4800,
        image: "/reservations/yassa.jpeg"
    },
    {
        id: 9,
        nom: "Brochettes de viande",
        prix: 5200,
        image: "/reservations/brochette.jpeg"
    },
    {
        id: 10,
        nom: "Tiep Bou Dienn",
        prix: 5800,
        image: "/reservations/tiep.jpeg"
    },
    {
        id: 11,
        nom: "Gratin de pommes de terre",
        prix: 5300,
        image: "/reservations/gratin.jpeg"
    },
    {
        id: 12,
        nom: "Salade César",
        prix: 4500,
        image: "/reservations/salade.jpeg"
    },
    {
        id: 13,
        nom: "Burger frites",
        prix: 7500,
        image: "/reservations/burger.jpeg"
    },
    {
        id: 14,
        nom: "Lasagnes",
        prix: 6900,
        image: "/reservations/lasagnes.jpeg"
    },
    {
        id: 15,
        nom: "Paella",
        prix: 7200,
        image: "/reservations/paella.jpeg"
    },
    {
        id: 16,
        nom: "Couscous royal",
        prix: 6700,
        image: "/reservations/couscous.jpeg"
    },
    {
        id: 17,
        nom: "Crêpes sucrées",
        prix: 3000,
        image: "/reservations/crepes.jpeg"
    },
    {
        id: 18,
        nom: "Sushi assorti",
        prix: 9500,
        image: "/reservations/sushi.jpeg"
    },
    {
        id: 19,
        nom: "Steak frites",
        prix: 8000,
        image: "/reservations/steak.jpeg"
    },
    {
        id: 20,
        nom: "Tarte aux pommes",
        prix: 4000,
        image: "/reservations/tarte.jpeg"
    }
]);

// Barre de recherche
const searchQuery = ref("");

// Filtrage des plats en fonction de la recherche
const filteredPlats = computed(() => {
    return plats.value.filter(plat =>
        plat.nom.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});
</script>

<template>
    <header class="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md">
        <nav class="max-w-8xl mx-auto flex justify-between items-center p-4 text-white">
            <input 
                type="text" 
                v-model="searchQuery" 
                placeholder="Rechercher un plat..." 
                class="px-4 py-2 rounded-lg text-black w-full max-w-md" 
            />

            <ul class="hidden md:flex space-x-10 font-bold items-center">
                <router-link to="/"><li class="hover:text-orange-500">Accueil</li></router-link>
                <router-link to="/Contacts"><li class="hover:text-orange-500">Contactez-nous</li></router-link>
                <button class="bg-orange-500 px-4 py-2 rounded-full hover:bg-orange-600">Se connecter</button>
            </ul>

            <button @click="toggleMobileMenu" class="md:hidden focus:outline-none">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </nav>

        <div 
            v-if="isMobileMenuOpen"
            class="md:hidden absolute top-full left-0 w-full bg-black/80 text-white p-4 font-bold flex flex-col items-center justify-center space-y-4"
        >
            <ul class="flex flex-col items-center w-full space-y-3 text-center">
                <router-link to="/" class="block w-full py-2">Accueil</router-link>
                <router-link to="/Contacts" class="block w-full py-2">Contactez-nous</router-link>
            </ul>
            <button class="bg-orange-500 px-4 py-2 rounded-full hover:bg-orange-600">
                Se connecter
            </button>
        </div>

    </header>

    <main class="pt-24 px-4 md:px-8 lg:px-16">
        <h2 class="text-3xl font-bold text-center mb-6">Faites votre choix dès maintenant</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div 
                v-for="plat in filteredPlats" 
                :key="plat.id" 
                class="card">
                <div class="plat-image" :style="{ backgroundImage: `url(${plat.image})` }"></div>
                <div class="card-content">
                    <h3>{{ plat.nom }}</h3>
                    <p>{{ plat.prix }} FCFA</p>
                    <button>Réserver</button>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
/* Header */
header {
    background-color: black;
}

/* Carte */
.card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: scale(1.05);
}

/* Image du plat */
.plat-image {
    width: 100%;
    height: 160px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/* Contenu de la carte */
.card-content {
    text-align: center;
    padding: 16px;
}

.card-content h3 {
    font-size: 1.2rem;
    font-weight: bold;
}

.card-content p {
    color: #555;
    margin-top: 4px;
}

/* Bouton */
.card-content button {
    margin-top: 10px;
    background-color: #ff7f00;
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
}

.card-content button:hover {
    background-color: #e06c00;
}

/* Responsive */
@media (max-width: 768px) {
    ul li {
        padding: 8px;
    }
}
</style>

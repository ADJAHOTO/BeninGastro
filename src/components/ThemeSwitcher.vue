<script setup>
import { ref, watch, onMounted } from "vue";

// État du thème (par défaut : clair)
const theme = ref(localStorage.getItem("theme") || "light");

// Fonction pour basculer le thème
const toggleTheme = () => {
  theme.value = theme.value === "light" ? "synthwave" : "light";
  document.documentElement.setAttribute("data-theme", theme.value);
  localStorage.setItem("theme", theme.value);
};

// Appliquer le thème enregistré au chargement
onMounted(() => {
  document.documentElement.setAttribute("data-theme", theme.value);
});
</script>

<template>
  <label class="flex cursor-pointer gap-2">
    <!-- Icône Soleil -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>

    <!-- Checkbox pour changer de thème -->
    <input type="checkbox" @change="toggleTheme" class="toggle theme-controller" />

    <!-- Icône Lune -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </label>
</template>


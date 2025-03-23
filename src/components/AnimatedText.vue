<script setup>
import { motion } from "motion-v";
import { defineProps, computed, ref, onMounted } from "vue";

// Définir les props
const props = defineProps({
  tag: {
    type: String,
    default: "span", // Élément HTML par défaut
  },
  animation: {
    type: String,
    default: "fade", // Animation par défaut
  },
  text: {
    type: String,
    required: true,
  },
});

// Variable de réactivité pour détecter l'affichage dans la vue
const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});

// Définition des animations disponibles
const animations = computed(() => {
  switch (props.animation) {
    case "fade":
      return { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } };
    case "slide-left":
      return { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } };
    case "slide-right":
      return { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } };
    case "scale":
      return { initial: { scale: 0.5, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { duration: 0.5 } };
    case "bounce":
      return { initial: { y: -10, opacity: 0 }, animate: { y: [0, -10, 0], opacity: 1 }, transition: { duration: 0.8, repeat: 1 } };
    
    case "blur-in":
      return {
        initial: { filter: "blur(20px)", opacity: 0 },
        animate: isVisible.value ? { filter: "blur(0px)", opacity: 1 } : {},
        transition: { duration: 1.2 },
      };
    default:
      return { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } };
  }
});
</script>

<template>
  <component
    :is="motion[tag]"
    class="animated-text"
    v-bind="animations"
  >
    <template v-if="['gradual-spacing', 'typing-effect', 'staggered-fade', 'letters-pull-up'].includes(animation)">
      <span v-for="(letter, index) in animations" :key="index">
        <motion.span v-bind="letter">{{ letter.text }}</motion.span>
      </span>
    </template>
    <template v-else>
      <slot>{{ text }}</slot>
    </template>
  </component>
</template>

<style scoped>
.animated-text {
  font-weight: bold;
}
</style>

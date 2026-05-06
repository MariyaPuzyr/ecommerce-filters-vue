<script setup>
import ProductCard from './ProductCard.vue';
defineProps({
  items: Array,
})
</script>
<template>
  <div class="grid">
    <ProductCard v-for="p in items" :key="p.id" :product="p" />

    <div v-if="!items.length">
      Нічого не знайдено
    </div>

  </div>
</template>
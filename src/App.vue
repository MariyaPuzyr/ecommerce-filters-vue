<script setup>
import { ref, computed } from 'vue'
import { products } from './data/products.js'

import Filters from './components/Filters.vue';
import ProductList from './components/ProductList.vue';

const selectedBrands = ref([]);
const maxPrice = ref(20000);
const sort = ref("");


const filtered = computed(() => {
  return products.filter((product) => {
    const brandOk = !selectedBrands.value.length || selectedBrands.value.includes(product.brand)

    const priceOk = product.price <= maxPrice.value

    return brandOk && priceOk
  })
})

const sorted = computed(() => {
  const list = [...filtered.value]

  if (sort.value === 'asc') {
    list.sort((a, b) => a.price - b.price)
  } else if (sort.value === 'desc') {
    list.sort((a, b) => b.price - a.price)
  }

  return list
})

</script>

<template>
  <div class="layout">
    <h1>Products</h1>
    <Filters v-model:brands="selectedBrands" v-model:maxPrice="maxPrice" v-model:sort="sort" />
    <ProductList :items="sorted" />
  </div>
</template>

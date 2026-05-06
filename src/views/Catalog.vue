<script setup>
import { useProducts } from '../composables/useProducts.js'
import Filters from '../components/Filters.vue';
import ProductList from '../components/ProductList.vue';

const { selectedBrands, maxPrice, sort, sorted } = useProducts()
</script>

<template>
    <div class="layout">
        <h1>Products</h1>
        <Filters v-model:brands="selectedBrands" v-model:maxPrice="maxPrice" v-model:sort="sort" />
        <ProductList :items="sorted" />
    </div>
</template>
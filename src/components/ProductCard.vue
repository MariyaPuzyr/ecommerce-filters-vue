<script setup>
import { useCart } from '../composables/useCart.js'
const { addToCart } = useCart()
defineProps({
    product: Object,
})
</script>
<template>
    <div class="card">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
        <small>{{ product.brand }}</small>
        <button @click="addToCart(product)">Add to cart</button>
    </div>
</template>
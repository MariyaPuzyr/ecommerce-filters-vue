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
<style scoped>
.card {
    border: 1px solid #eee;
    padding: 12px;
    transition: .2s;
}

.card:hover {
    transform: translateY(-3px);
}
</style>
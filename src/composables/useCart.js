import { ref, watch } from 'vue'

function loadCart() {
  try {
    const data = localStorage.getItem('cart')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const cart = ref(loadCart())


export function useCart() {
    function addToCart(product) {
        const existing = cart.value.find((p) => p.id === product.id)
        if (existing) {
            existing.quantity++
        } else {
            cart.value.push({ ...product, quantity: 1 })
        }
    }
    function removeFromCart(product) {
        cart.value = cart.value.filter((p) => p.id !== product.id)
    }

    watch(cart, () => {
        localStorage.setItem("cart", JSON.stringify(cart.value))
    }, { deep: true })
    return { cart, addToCart, removeFromCart }
}

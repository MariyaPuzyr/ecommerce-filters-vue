import { ref, computed } from 'vue'
import { products } from '../data/products.js'   

export function useProducts() {
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

    return { selectedBrands, maxPrice, sort, filtered, sorted }
}
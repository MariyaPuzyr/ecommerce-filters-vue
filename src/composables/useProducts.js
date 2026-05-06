import { useRoute, useRouter } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { products } from '../data/products.js'

export function useProducts() {
    const route = useRoute();
    const router = useRouter();
    const selectedBrands = ref([]);
    const maxPrice = ref(20000);
    const sort = ref('');
    selectedBrands.value = typeof route.query.brands === 'string' ? route.query.brands.split(',') : [];
    maxPrice.value = typeof route.query.price === 'string' ? Number(route.query.price) : 20000;
    sort.value = route.query.sort || '';

    watch([selectedBrands, maxPrice, sort], () => {
        const query = {}

        if (selectedBrands.value.length) {
            query.brands = selectedBrands.value.join(',')
        }

        if (maxPrice.value !== 20000) {
            query.price = maxPrice.value
        }

        if (sort.value) {
            query.sort = sort.value
        }

        router.replace({ query: query })

    }, { deep: true })
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

    function resetFilters() {
        selectedBrands.value = []
        maxPrice.value = 20000
        sort.value = ''
        router.replace({ query: {} })
    }

    return { selectedBrands, maxPrice, sort, filtered, sorted, resetFilters }
}
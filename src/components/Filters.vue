<script setup>
const props = defineProps({
    brands: { Array },
    maxPrice: Number,
    sort: String
})
const emit = defineEmits(['update:brands', 'update:maxPrice', 'update:sort', 'reset'])

function toggleBrand(e) {
    const value = e.target.value
    let updated = [...props.brands]
    if (updated.includes(value)) {
        updated = updated.filter((b) => b !== value)
    } else {
        updated.push(value)
    }
    emit('update:brands', updated)
}
</script>
<template>
    <aside>
        <h3>Brands</h3>
        <label>
            <input type="checkbox" value="Hormann" @change="toggleBrand">
            Hormann
        </label>

        <label>
            <input type="checkbox" value="Ryterna" @change="toggleBrand">
            Ryterna
        </label>

        <label>
            <input type="checkbox" value="Alutech" @change="toggleBrand">
            Alutech
        </label>

        <h3>Price</h3>
        <input type="range" :min="0" :max="20000" :value="maxPrice"
            @input="emit('update:maxPrice', +$event.target.value)">

        <h3>Sort</h3>
        <select @change="emit('update:sort', $event.target.value)">
            <option value="">Select</option>
            <option value="asc">cheapest</option>
            <option value="desc">expensive</option>
        </select>

        <button class="reset-btn" @click="emit('reset')">Reset</button>
    </aside>
</template>